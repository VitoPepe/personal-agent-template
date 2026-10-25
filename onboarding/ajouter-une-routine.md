# Ajouter une routine (un message automatique)

> Pour l'utiliser : « Je voudrais un message le vendredi soir pour préparer le week-end. »

## Consignes pour Claude
1. Demander (une question à la fois) : quel jour et à quelle heure, ce que le message doit contenir, ce qu'il doit éventuellement noter ensuite.
2. Écrire `automations/<nom>.md` sur le modèle des autres consignes : en-tête (quand, connecteurs, passerelle Tasks si besoin), **Collecte**, **Format** (court, lisible sur téléphone), **Thèmes suivis** (rubriques de `CLAUDE.md` › Thèmes suivis pour cette routine), **Journal technique** (ligne dans `automations/runs.md`).
3. Ajouter la ligne dans le tableau de `automations/README.md`. Commit + push sur `main`.
4. Expliquer simplement qu'il reste à créer la routine sur Claude (Claude Code → Routines), avec la consigne :
   > Lis `automations/<nom>.md` dans ce repo et applique-le. Passerelle Tasks : URL = …, token = …
   Claude ne peut pas la créer seul depuis une conversation : la personne (ou celle qui l'aide) le fait en 2 minutes.
5. Pour **modifier** une routine existante (contenu, ton, rubriques) : modifier seulement son fichier dans `automations/` — pas besoin de toucher la routine sur Claude. Pour changer l'**heure**, c'est dans la routine sur Claude.
