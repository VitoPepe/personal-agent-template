/**
 * Passerelle Google Tasks : les to-do créés par Claude vont dans Google Tasks, pas dans l'agenda.
 * Projet Apps Script autonome (script.google.com → Nouveau projet), service avancé « Google Tasks API » activé.
 *
 * Reçoit en POST (JSON), avec ?token=<TOKEN> dans l'URL (propriété de script TOKEN, propre à ce projet) :
 *  - {"source":"claude","action":"tasks_ajouter","list":"Mes tâches","tasks":[{"title":"…","notes":"…","due":"YYYY-MM-DD"}]}
 *      ajoute des tâches (liste créée si absente, liste par défaut si `list` omis ; tâche ouverte de même titre ignorée).
 *  - {"source":"claude","action":"tasks_lister","lists":["Mes tâches"],"dueMax":"YYYY-MM-DD"}
 *      tâches ouvertes (toutes les listes si `lists` omis ; `dueMax` : échéance ≤ cette date, ou sans échéance si `withoutDue`).
 *  - {"source":"claude","action":"tasks_terminer","list":"Mes tâches","title":"…"} coche une tâche ouverte.
 * L'API Tasks ne garde que la date d'échéance (pas l'heure) et ne crée pas de tâche récurrente.
 *
 * Déploiement : voir scripts/apps-script/README.md.
 */

function doGet(e) {
  if (!authorized_(e)) return json_({ ok: false, error: 'unauthorized' });
  return json_({ ok: true, ping: new Date().toISOString(), lists: allLists_().map((l) => l.title) });
}

function doPost(e) {
  if (!authorized_(e)) return json_({ ok: false, error: 'unauthorized' });
  const b = JSON.parse((e.postData && e.postData.contents) || '{}');
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    if (b.action === 'tasks_ajouter') return json_(Object.assign({ ok: true }, addTasks_(b)));
    if (b.action === 'tasks_lister') return json_(Object.assign({ ok: true }, listTasks_(b)));
    if (b.action === 'tasks_terminer') return json_(Object.assign({ ok: true }, completeTask_(b)));
    throw new Error('action inconnue : ' + b.action);
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// À lancer une fois dans l'éditeur (▶ Exécuter) pour autoriser l'accès à Google Tasks.
function autoriser() {
  Logger.log(allLists_().map((l) => l.title));
}

// ---------- Tasks ----------

/** b = {list:'Mes tâches', tasks:[{title, notes, due:'YYYY-MM-DD'}]} */
function addTasks_(b) {
  const list = findList_(b.list, true);
  const open = openTasks_(list.id).map((t) => norm_(t.title));
  const added = [];
  const skipped = [];
  (b.tasks || []).forEach((t) => {
    if (!t.title) return;
    if (open.indexOf(norm_(t.title)) >= 0) { skipped.push(t.title); return; }
    const task = { title: t.title };
    if (t.notes) task.notes = t.notes;
    if (t.due) task.due = t.due + 'T00:00:00.000Z';
    Tasks.Tasks.insert(task, list.id);
    open.push(norm_(t.title));
    added.push(t.title);
  });
  return { list: list.title, added: added, skipped: skipped };
}

/** b = {lists?:['Mes tâches'], dueMax?:'YYYY-MM-DD', withoutDue?:true} */
function listTasks_(b) {
  const lists = b.lists ? b.lists.map((n) => findList_(n, false)) : allLists_();
  const tasks = [];
  lists.forEach((l) => {
    openTasks_(l.id).forEach((t) => {
      const due = t.due ? t.due.slice(0, 10) : '';
      if (b.dueMax && (due ? due > b.dueMax : !b.withoutDue)) return;
      tasks.push({ list: l.title, title: t.title, notes: t.notes || '', due: due });
    });
  });
  tasks.sort((x, y) => (x.due || '9999').localeCompare(y.due || '9999'));
  return { tasks: tasks };
}

/** b = {list:'Mes tâches', title:'…'} */
function completeTask_(b) {
  const list = findList_(b.list, false);
  const task = openTasks_(list.id).filter((t) => norm_(t.title) === norm_(b.title))[0];
  if (!task) throw new Error('tâche ouverte absente : ' + b.title);
  Tasks.Tasks.patch({ status: 'completed' }, list.id, task.id);
  return { list: list.title, completed: task.title };
}

function allLists_() {
  const out = [];
  let page;
  do {
    const res = Tasks.Tasklists.list({ maxResults: 100, pageToken: page });
    (res.items || []).forEach((l) => out.push(l));
    page = res.nextPageToken;
  } while (page);
  return out;
}

// Liste par titre ; titre vide → liste par défaut ; create → la crée si absente.
function findList_(title, create) {
  if (!title) return Tasks.Tasklists.get('@default');
  const found = allLists_().filter((l) => norm_(l.title) === norm_(title))[0];
  if (found) return found;
  if (!create) throw new Error('liste absente : ' + title);
  return Tasks.Tasklists.insert({ title: title });
}

function openTasks_(listId) {
  const out = [];
  let page;
  do {
    const res = Tasks.Tasks.list(listId, { showCompleted: false, showHidden: false, maxResults: 100, pageToken: page });
    (res.items || []).forEach((t) => { if (t.title) out.push(t); });
    page = res.nextPageToken;
  } while (page);
  return out;
}

// ---------- Utilitaires ----------

function norm_(s) {
  return String(s || '').trim().toLowerCase();
}

function authorized_(e) {
  const token = PropertiesService.getScriptProperties().getProperty('TOKEN');
  return Boolean(token) && e && e.parameter && e.parameter.token === token;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
