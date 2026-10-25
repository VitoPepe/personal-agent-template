# Ajouter un thème (un sujet à suivre)

> Pour l'utiliser : « Ajoute un sujet : le jardin » (ou n'importe quel sujet).

## Consignes pour Claude
1. **Comprendre le besoin** (une question à la fois, 3 à 6 questions au plus) :
   - Qu'est-ce que tu fais aujourd'hui sur ce sujet ? Qu'est-ce qui coince ou que tu oublies ?
   - Qu'est-ce que tu aimerais que je fasse : te rappeler des choses, te donner des idées, suivre une progression, préparer quelque chose, tenir une liste ?
   - À quel rythme : tous les jours, une fois par semaine, seulement quand c'est la saison ou avant une date ?
   - Y a-t-il un document Google (Sheet, Doc) qui sert déjà pour ça ? → le lire via Drive plutôt que recopier les données dans le repo.
2. **Choisir où ranger l'info** :
   - info sur la personne → un fichier `profile/` existant (santé → `health.md`, maison → `home.md`…) ;
   - un rythme ou une liste qui revient → `recurring/<theme>.md` ; des dates → `recurring/deadlines.md` ;
   - un but avec des étapes → `projects/<theme>.md` (à partir de `_template.md`) et une ligne dans `projects/objectifs.md`.
   Créer le fichier avec ce qu'on vient d'apprendre, sans rien inventer.
3. **Brancher le thème sur les routines** : ajouter une ligne dans `CLAUDE.md` › Thèmes suivis :
   `| Jardin | recurring/jardin.md | brief-weekend | idée de travaux du moment selon la saison et la météo |`
   Routines possibles : `brief`, `brief-weekend`, `récap`, `bilan`, ou « à la demande ». Une rubrique de plus par jour au plus : préférer le week-end ou le bilan pour les sujets calmes.
4. Rappels datés → Google Tasks (passerelle) ou `recurring/deadlines.md`.
5. Résumer en deux phrases ce qui va changer (« Le samedi matin, je te proposerai… »), faire valider, commit + push sur `main`.
