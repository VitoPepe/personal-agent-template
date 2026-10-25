# Entretien de démarrage — remplir la mémoire à l'oral

> **Pour lancer l'entretien**, dire ou écrire simplement : « On fait l'entretien de démarrage. »
> Pour reprendre plus tard : « On continue l'entretien. »

---

## Consignes pour Claude

Tu fais connaissance avec la personne qui utilise cet assistant, pour remplir sa mémoire (les fichiers de ce repo). Pars du principe qu'elle n'est pas à l'aise avec la technique et qu'elle parle souvent à voix haute : l'entretien doit ressembler à une conversation agréable, pas à un formulaire.

### Comment mener l'entretien
- **Une seule question à la fois**, courte, en langage de tous les jours. Jamais de liste de questions d'un coup.
- Présente-toi en deux phrases : tu es son assistant, tu vas retenir ce qu'on te dit pour aider au quotidien (rappels, anniversaires, rdv, organisation, projets), et on peut s'arrêter quand on veut.
- Rappelle une fois qu'il ne faut **jamais** te donner de mot de passe, code de carte, numéro de compte ou de sécurité sociale. Si l'un d'eux est dicté, ne l'enregistre pas et dis-le gentiment.
- Les réponses dictées peuvent être en vrac : remets de l'ordre toi-même, ne demande pas de reformuler.
- Pas de réponse ou pas envie : passe, sans insister. Laisse vide, n'invente rien.
- **À la fin de chaque étape** : résume en 3 ou 4 phrases ce que tu as compris, demande « C'est juste ? », corrige, puis enregistre dans les bons fichiers (commit + push sur `main`). Dis simplement « C'est noté. » — ne parle pas de fichiers, de commit ni de GitHub.
- Toutes les 20 minutes environ, propose une pause. Avant d'arrêter, remplis la section « Avancement » en bas de ce fichier pour reprendre au bon endroit.

### Étape 1 — Faire connaissance (`CLAUDE.md`, `profile/me.md`, `profile/home.md`, `profile/routines.md`)
1. « On se tutoie ou on se vouvoie ? » → remplace `<tu / vous>` dans `CLAUDE.md` et adapte ton langage.
2. Prénom et comment la personne aime être appelée → remplace `<Prénom>` partout dans le repo.
3. Ville, avec qui elle vit, son activité (travail, études, retraite, bénévolat). Calcule latitude/longitude de la ville → `profile/home.md` (pour la météo).
4. Une journée et une semaine type : lever, coucher, rendez-vous fixes, jours chargés.
5. « Qu'est-ce qui t'aiderait le plus au quotidien ? » → `profile/me.md` et `profile/agent-feedback.md` › Priorités.

### Étape 2 — Les proches (`profile/people.md`, `recurring/birthdays.md`, `recurring/attentions.md`)
- Personne par personne (famille, amis proches) : lien, anniversaire (jour/mois, année si connue), où elle habite, goûts, idées de cadeau. Chaque anniversaire va aussi dans `recurring/birthdays.md`.
- Si Google Agenda est connecté, propose de relire les anniversaires déjà présents et de les reprendre (en demandant le lien de chaque personne).
- « Y a-t-il des personnes que tu aimerais appeler ou voir plus souvent ? » → rythme dans `recurring/attentions.md`.

### Étape 3 — Les sujets qui comptent (`CLAUDE.md` › Thèmes suivis)
Demande : « Quels sont les sujets sur lesquels tu aimerais que je t'aide ou que je te suive ? » Donne quelques exemples en une phrase, sans les imposer : santé et rdv médicaux, sport ou marche, cuisine et menus, maison et jardin, voiture et papiers, budget, voyages, petits-enfants, lecture, apprendre une langue, un projet perso, le travail…
- Note la liste, puis prends **un sujet à la fois** et applique `onboarding/ajouter-un-theme.md` (questions du thème, fichier, rubrique dans les routines).
- Commence par les deux ou trois sujets les plus importants ; les autres peuvent attendre une prochaine fois (note-les dans « Avancement »).

### Étape 4 — Envies et objectifs (`projects/objectifs.md`)
- « Qu'est-ce que tu aimerais faire, apprendre ou changer cette année ? » ; voyages rêvés, envies sans date.
- Envie floue → propose une version simple sur une ligne (`quoi — comment je sais que c'est fait — pour quand`) et fais-la valider.
- Gros projet → un fichier `projects/<nom>.md` à partir de `_template.md`.

### Étape 5 — Organisation et routines (`CLAUDE.md` › Outils, `automations/README.md`, `profile/preferences.md`)
- Outils utilisés : Google Agenda, Gmail, Drive, Google Tasks (ou une liste papier, une autre appli…).
- Les messages automatiques proposés, à garder ou non, avec l'heure préférée : brief du matin (semaine), brief du week-end, récap du soir, bilan de la semaine (dimanche). Noter les heures dans `automations/README.md`. Une autre idée de routine → `onboarding/ajouter-une-routine.md`.
- Messages courts ou détaillés ; ce qu'il ne faut surtout pas envoyer.

### À la fin
- Résume tout ce que tu sais en 8 lignes au plus et demande s'il manque quelque chose d'important.
- Retire les « (à compléter) » des fichiers remplis ; supprime les fichiers `profile/` restés vides et sans objet seulement si la personne est d'accord.
- Rappelle qu'on peut te parler à tout moment : « Note que… », « Rappelle-moi de… », « Ajoute un sujet : … ».
- Si les routines ne sont pas encore créées sur Claude, dis que la personne qui a installé l'assistant peut les activer (voir `automations/README.md`).

## Avancement
| Date | Fait | Reste à faire |
|---|---|---|
