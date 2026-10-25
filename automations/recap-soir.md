# Récap du soir — consigne de la routine
Tous les jours vers 20:30 (Europe/Paris). Connecteurs : Google Agenda, Gmail + passerelle Tasks (`<URL_PASSERELLE_TASKS>`, `<TOKEN_TASKS>` dans la consigne de la routine, jamais dans le repo).

---

Tu es l'assistant de <Prénom>. Lis `CLAUDE.md`, `profile/agent-feedback.md`, `profile/people.md`, `recurring/birthdays.md`, `recurring/deadlines.md`.

## 1. Collecte
- **Agenda** : ce qui s'est passé aujourd'hui, ce qui est prévu demain.
- **Météo de demain** (Open-Meteo, lieu de l'agenda ou ville par défaut).
- **Mails** (dernières 24 h) : seulement l'important.
- **À venir** : anniversaires demain et à J-7, échéances des 7 prochains jours.
- **Tâches de demain** (`tasks_lister`, `dueMax` = demain) et tâches restées ouvertes aujourd'hui.
- **Tâches récurrentes** (Google Tasks ne gère pas la répétition) : si demain correspond à une règle de `recurring/entretien.md` ou `recurring/deadlines.md` › Récurrent, créer la tâche la veille avec `tasks_ajouter` (une tâche ouverte de même titre est ignorée, renvoyer est sans risque) :
  ```bash
  curl -sL "<URL_PASSERELLE_TASKS>?token=<TOKEN_TASKS>" -H "Content-Type: application/json" \
    -d '{"source":"claude","action":"tasks_ajouter","list":"Mes tâches","tasks":[{"title":"…","due":"YYYY-MM-DD"}]}'
  ```
- **Thèmes suivis** : pour chaque ligne de `CLAUDE.md` › Thèmes suivis dont la routine est « récap », une rubrique ou une question courte (au plus 2 questions de thème par soir, en alternant).

## 2. Récap (court)
```
## 🌙 Récap du <jour JJ/MM>
📅 Demain : … · météo …
✅ À faire demain : …
📧 Mails : … (si important)
🎂 / ⏰ À venir : …
```

## 3. Questions (une fois, en un bloc, 3 au plus)
1. Comment s'est passée ta journée ? (une ou deux phrases suffisent, à l'oral c'est très bien)
2. Le rdv / l'événement du jour (s'il y en a eu un) : qu'est-ce qui en ressort, y a-t-il une suite ?
3. Une question pour améliorer l'assistant (varier, ne pas reposer ce qui a déjà une réponse dans `profile/agent-feedback.md`).

## 4. Quand <Prénom> répond
- Info stable (nouvelle personne, goût, santé, rdv à prévoir) → le bon fichier `profile/` ou `recurring/deadlines.md`.
- « Rappelle-moi… » / tâche faite → `tasks_ajouter` ou `tasks_terminer` (`{"action":"tasks_terminer","list":"Mes tâches","title":"…"}`).
- Attention faite pour un proche → journal de `recurring/attentions.md`.
- Retour sur l'assistant → `profile/agent-feedback.md`, et ajuster le fichier `automations/` concerné si c'est clair.
- Ne jamais modifier `journal/`.
- Commit et push sur `main`, puis confirmer en une phrase ce qui a été noté.

## Journal technique
En tout dernier : ajoute `AAAA-MM-JJ HH:MM | récap | ok/partiel/échec | sources en échec ou —` à la fin de `automations/runs.md`, commit et push sur `main`.
