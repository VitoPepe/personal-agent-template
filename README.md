# Agent personnel — squelette vide

Un assistant personnel pour Claude, prêt à remplir : il retient ce qu'on lui raconte (proches, anniversaires, santé, maison, goûts, projets), envoie un brief le matin, un brief le week-end, un récap le soir et un bilan chaque dimanche, et crée des rappels dans Google Tasks.

Ce repo ne contient **aucune donnée** : tout se remplit à l'oral, pendant un entretien avec Claude (`onboarding/entretien.md`), puis au fil des conversations. On peut ensuite ajouter des sujets (`onboarding/ajouter-un-theme.md`) et des routines (`onboarding/ajouter-une-routine.md`).

Les règles de l'assistant sont dans [`CLAUDE.md`](CLAUDE.md) : c'est le fichier qui fait tout fonctionner.

## Installation (à faire une fois, ~45 min, idéalement à deux)

### 1. Les comptes
- **GitHub** : créer un compte gratuit sur https://github.com/signup.
- **Claude** : un abonnement **Pro** au minimum. L'offre gratuite ne donne accès ni à Claude Code (qui écrit dans la mémoire) ni aux tâches planifiées.
- **Google** : un compte Google (Agenda, Gmail, Drive).

### 2. Créer sa copie de ce squelette
Sur la page GitHub de ce modèle → bouton **Use this template** → **Create a new repository** → propriétaire : son compte, nom : `personal-agent`, visibilité : **Private** → Create.

### 3. Brancher Claude
Sur https://claude.ai, avec son compte :
- **Paramètres → Connecteurs** : ajouter Google Agenda, Gmail, Google Drive.
- Ouvrir **Claude Code** (https://claude.ai/code) → connecter GitHub (autoriser l'accès au repo `personal-agent`).
- Créer un **environnement** pour le repo ; dans ses réglages réseau, autoriser le domaine `script.googleusercontent.com` (sinon les réponses de Google Tasks arrivent vides).
- Créer un **projet** Claude rattaché au repo `personal-agent` : c'est là qu'on parle à l'assistant au quotidien (à l'écrit ou au micro, depuis l'appli Claude sur téléphone).

### 4. L'entretien de démarrage
Dans le projet, dire : **« On fait l'entretien de démarrage. »** Claude pose ses questions une par une et range tout lui-même. On peut le faire en plusieurs fois (« On continue l'entretien »).

### 5. La passerelle Google Tasks (pour que Claude crée des rappels)
Suivre [`scripts/apps-script/README.md`](scripts/apps-script/README.md) sur le compte Google de la personne. Garder de côté l'**URL** et le **token** obtenus.

### 6. Les routines (messages automatiques)
Dans Claude Code → **Routines**, créer les quatre routines décrites dans [`automations/README.md`](automations/README.md) (brief du matin, brief du week-end, récap du soir, bilan du dimanche), en collant l'URL et le token de la passerelle dans la consigne. À faire de préférence après l'entretien, quand la mémoire contient l'essentiel.

## Au quotidien — exemples de demandes
- « Qu'est-ce que j'ai cette semaine ? »
- « Rappelle-moi d'appeler le dentiste jeudi. »
- « Note que ma voisine s'appelle Martine et qu'elle adore les orchidées. »
- « C'est bientôt l'anniversaire de qui ? Une idée de cadeau ? »
- « Ajoute un sujet : le jardin. » / « Je voudrais un message le vendredi soir. »

## Organisation
| Dossier | Contenu | Qui écrit |
|---|---|---|
| `profile/` | Moi, santé, proches, maison, goûts, routines, activités, finances, retours sur l'assistant | Claude |
| `recurring/` | Anniversaires, échéances, entretien, attentions, menu, checklists | Claude |
| `projects/` | Envies, objectifs, projets en cours | Claude |
| `decisions/` | Choix importants | Claude |
| `reviews/` | Bilans de la semaine | Claude |
| `journal/` | Journal personnel (facultatif) | **la personne uniquement** |
| `automations/` | Consignes des routines | Claude |
| `onboarding/` | Entretien de démarrage, ajout de thèmes et de routines | — |
| `archive/` | Projets terminés | Claude |

## Règles
- Repo **privé**, **aucun secret** dans les fichiers (mot de passe, code, numéro de compte, token).
- Dates en `YYYY-MM-DD`, français.
