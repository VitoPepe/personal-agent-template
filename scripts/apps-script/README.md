# Passerelle Google Tasks
Le connecteur Google Agenda de Claude ne voit pas Google Tasks. Cette petite « macro » Google (Apps Script), installée une fois sur le compte Google de <Prénom>, permet à l'assistant de **lister, créer et cocher des tâches**.

## Installation (une fois, ~10 min, sur le compte Google de <Prénom>)
1. Aller sur https://script.google.com → **Nouveau projet**, le nommer « Passerelle Tasks ». Remplacer le code par le contenu de `passerelle-tasks.gs`. Enregistrer (💾).
2. Barre de gauche **Services ＋** → **Google Tasks API** → Ajouter (identifiant `Tasks`).
3. En haut, choisir la fonction `autoriser` → ▶ **Exécuter** → accepter les autorisations (Google prévient que l'appli n'est pas validée : « Paramètres avancés » → « Accéder à Passerelle Tasks »). Le journal affiche les listes de tâches.
4. ⚙️ **Paramètres du projet** → Fuseau horaire `(GMT+01:00) Paris`. Plus bas, **Propriétés du script** → ajouter `TOKEN` = un code au hasard (ex. 32 lettres et chiffres). Le garder de côté, ne jamais le mettre dans le repo.
5. **Déployer → Nouveau déploiement** → ⚙️ type **Application Web** → Exécuter en tant que : **Moi** → Qui a accès : **Tout le monde** → Déployer → copier l'URL `https://script.google.com/macros/s/…/exec`.
6. Tester dans un navigateur : `<URL>?token=<TOKEN>` doit afficher `{"ok":true,…,"lists":[…]}`.
7. Coller l'URL et le token dans la consigne de chaque routine (voir `automations/README.md`).

Après une modification du code : Déployer → **Gérer les déploiements** → ✏️ → Version : **Nouvelle version** (l'URL reste la même).

## Appels (pour l'assistant)
```bash
curl -sL "<URL_PASSERELLE_TASKS>?token=<TOKEN_TASKS>" -H "Content-Type: application/json" \
  -d '{"source":"claude","action":"tasks_ajouter","list":"Mes tâches","tasks":[{"title":"Appeler le dentiste","notes":"…","due":"YYYY-MM-DD"}]}'
curl -sL "<URL_PASSERELLE_TASKS>?token=<TOKEN_TASKS>" -H "Content-Type: application/json" \
  -d '{"source":"claude","action":"tasks_lister","dueMax":"YYYY-MM-DD"}'
curl -sL "<URL_PASSERELLE_TASKS>?token=<TOKEN_TASKS>" -H "Content-Type: application/json" \
  -d '{"source":"claude","action":"tasks_terminer","list":"Mes tâches","title":"Appeler le dentiste"}'
```
- Ne pas mettre `-X POST` (`-d` suffit, curl doit suivre la redirection de Google).
- `tasks_ajouter` : liste créée si absente ; une tâche ouverte de même titre est ignorée → renvoyer est sans risque.
- `tasks_lister` : toutes les listes si `lists` est omis ; `dueMax` = échéance ≤ date ; `"withoutDue":true` pour inclure les tâches sans date.
- Limites : échéance = date seule (une heure limite va dans le titre, ex. « … (avant 17h) ») ; pas de tâche récurrente → le récap du soir crée la veille les tâches récurrentes.
- Depuis le cloud, la réponse passe par `script.googleusercontent.com` : si ce domaine n'est pas autorisé dans l'environnement Claude Code, l'écriture passe mais la réponse est vide. Autoriser ce domaine dans les réglages réseau de l'environnement.
