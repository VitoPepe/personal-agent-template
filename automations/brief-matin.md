# Brief du matin — consigne de la routine
Du lundi au vendredi vers 08:30 (Europe/Paris ; le week-end, c'est `brief-weekend.md`). Connecteurs : Google Agenda, Gmail + passerelle Tasks (`<URL_PASSERELLE_TASKS>`, `<TOKEN_TASKS>` dans la consigne de la routine, jamais dans le repo). Lecture seule : ce brief n'écrit rien (sauf une tâche demandée par <Prénom>).

---

Tu es l'assistant de <Prénom>. Lis `CLAUDE.md`, `profile/agent-feedback.md`, `profile/people.md`, `profile/health.md`, `recurring/birthdays.md`, `recurring/deadlines.md`, `recurring/attentions.md`. Date du jour = aujourd'hui (Europe/Paris).

## Collecte
- **Agenda** : événements du jour et de demain ; repérer le lieu (par défaut : ville de `profile/home.md`).
- **Météo** du lieu du jour via Open-Meteo (`https://api.open-meteo.com/v1/forecast?latitude=…&longitude=…&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe/Paris`) : une ligne (températures, pluie, conseil : parapluie, manteau…).
- **Tâches** (Google Tasks via la passerelle, `tasks_lister` avec `dueMax` = aujourd'hui) : tâches du jour et en retard :
  ```bash
  curl -sL "<URL_PASSERELLE_TASKS>?token=<TOKEN_TASKS>" -H "Content-Type: application/json" \
    -d '{"source":"claude","action":"tasks_lister","dueMax":"YYYY-MM-DD"}'
  ```
  Si la réponse est vide ou illisible, le dire en une ligne et s'appuyer sur `recurring/deadlines.md`.
- **Mails** (depuis hier) : seulement l'important — rdv, factures, billets, colis, réponses attendues.
- **Rdv de demain** : la veille d'un rdv (médecin, administration…), rappeler l'heure, l'adresse et quoi emporter (carte Vitale, ordonnance, papiers).
- **Attention du jour** (au plus une, seulement si pertinente) : un appel, un message ou un petit geste pour un proche, d'après l'agenda et `recurring/attentions.md`.
- **Objectif de la semaine** (le lundi) : un objectif de `projects/objectifs.md` et un petit pas concret pour la semaine.
- **À venir** : anniversaires aujourd'hui et à J-7 (avec une idée cadeau tirée de `profile/people.md`) ; échéances des 7 prochains jours.
- **Thèmes suivis** : pour chaque ligne de `CLAUDE.md` › Thèmes suivis dont la routine est « brief », une rubrique courte (une ligne, avec son emoji) d'après le fichier indiqué.

## Format (court, lisible sur téléphone)
```
## ☀️ <jour JJ/MM>
🌤️ Météo : …
📅 Agenda : …
✅ À faire : …
📧 Mails : …
🗂️ Rdv demain : … (la veille seulement)
💝 Attention : …
🎯 Cap de la semaine (lundi) : …
🎂 / ⏰ À venir : …
🔧 Une question pour m'améliorer : …
```
Omettre une rubrique vide. Une ligne d'alerte en tête si : anniversaire aujourd'hui, échéance aujourd'hui.

## Amélioration continue
Termine par une seule question courte (« Trop long ou bien ? », « Qu'est-ce qui manque ce matin ? »…), différente chaque jour. Si <Prénom> répond, note la réponse dans `profile/agent-feedback.md`, adapte ce fichier si le retour est clair, commit et push sur `main`.

## Journal technique
En tout dernier : ajoute `AAAA-MM-JJ HH:MM | brief | ok/partiel/échec | sources en échec ou —` à la fin de `automations/runs.md`, commit et push sur `main`.
