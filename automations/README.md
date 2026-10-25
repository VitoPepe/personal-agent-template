# Tâches planifiées (routines)
Quatre routines, à activer quand l'entretien de démarrage est fini et que la mémoire contient l'essentiel. Chacune relit sa consigne dans ce dossier à chaque passage : pour changer le contenu, on modifie le fichier, pas la routine.

| Routine | Quand (à ajuster) | Consigne |
|---|---|---|
| Brief du matin | lundi → vendredi, 08:30 | `brief-matin.md` |
| Brief du week-end | samedi et dimanche, 09:00 | `brief-weekend.md` |
| Récap du soir | tous les jours, 20:30 | `recap-soir.md` |
| Bilan de la semaine | dimanche, 19:00 | `bilan-semaine.md` |

## Créer une routine
Dans Claude Code (web ou app) → **Routines** → nouvelle routine : choisir ce repo, l'heure (fuseau Europe/Paris), les connecteurs (Google Agenda, Gmail, Google Drive), et comme consigne :
> Lis `automations/brief-matin.md` dans ce repo et applique-le. Passerelle Tasks : URL = `https://script.google.com/macros/s/…/exec`, token = `…`.

L'adresse et le code (token) de la passerelle Tasks vont **uniquement dans la consigne de la routine**, jamais dans le repo. Le bilan de la semaine n'en a pas besoin.
