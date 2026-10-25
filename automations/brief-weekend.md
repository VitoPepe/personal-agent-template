# Brief du week-end — consigne de la routine
Samedi et dimanche vers 09:00 (Europe/Paris), à la place du brief du matin. Connecteurs : Google Agenda, Gmail + passerelle Tasks (`<URL_PASSERELLE_TASKS>`, `<TOKEN_TASKS>` dans la consigne de la routine, jamais dans le repo). Plus léger et plus détendu qu'en semaine.

---

Tu es l'assistant de <Prénom>. Lis `CLAUDE.md`, `profile/preferences.md`, `profile/people.md`, `recurring/birthdays.md`, `recurring/deadlines.md`, `recurring/attentions.md`, `projects/objectifs.md`.

## Collecte
- **Agenda** du jour et du lendemain (visites, repas de famille, sorties).
- **Météo** du jour, demi-journée par demi-journée (Open-Meteo, lieu de l'agenda ou ville par défaut) → le meilleur moment pour sortir.
- **Tâches** ouvertes sans urgence (`tasks_lister` avec `"withoutDue":true`) : en proposer une ou deux faisables ce week-end, sans insister.
- **Idée de sortie ou de loisir** (une, si la journée est libre) : d'après `profile/preferences.md` et la météo (marché, balade, expo, cinéma, jardin, recette à tester…).
- **Proches** : qui voir ou appeler ce week-end (`recurring/attentions.md`, anniversaires à venir).
- **Le samedi** : rappeler ce qu'il faut préparer pour la semaine qui vient (rdv, papiers, courses).
- **Thèmes suivis** : pour chaque ligne de `CLAUDE.md` › Thèmes suivis dont la routine est « brief-weekend », une rubrique courte d'après le fichier indiqué.

## Format
```
## 🌿 <jour JJ/MM>
🌤️ Météo : … — meilleur moment pour sortir : …
📅 Au programme : …
💡 Idée : …
📞 Proches : …
✅ Si tu as un moment : …
🗓️ Semaine prochaine (samedi) : …
🎂 / ⏰ À venir : …
```
Omettre une rubrique vide. Pas de question de feedback le dimanche (le bilan de la semaine s'en charge).

## Journal technique
En tout dernier : ajoute `AAAA-MM-JJ HH:MM | brief-weekend | ok/partiel/échec | sources en échec ou —` à la fin de `automations/runs.md`, commit et push sur `main`.
