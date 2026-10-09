# NOTES

## Octobre 2026 : mise à jour suite à la revue

### Ce qui a été fait
- Accueil : métier (« Développeur Java & Full-stack »), badge de disponibilité et trois boutons (projets, CV, calendrier).
- Présentation : Bachelor CDA au CESI Grenoble **en cours**, disponibilité immédiate, rythme d'alternance.
- Calendrier CESI 2026-2027 ajouté dans `assets/files/Calendrier_Alternance_CESI_2026-2027.pdf`.
- Section Projets remontée juste après la Présentation ; projets de stage affichés avant les projets BTS.
- Expériences de développement en premier ; les deux missions Cellcosmet passent dans « Autres expériences ».
- Mairie de Meylan : la contribution réelle (corrections, nouvelles fonctionnalités) et la stack sont mises en avant.
- Anglais aligné sur le CV (B2) en FR et en EN ; Digipad n'est plus présenté comme « open-source ».
- Image de partage créée (`assets/images/og-image.png`, 1200×630), l'ancienne pointait vers un fichier inexistant.
- Technique : versions fixées (ScrollReveal 4.0.9, EmailJS 4.4.1), Font Awesome retiré (aucune icône utilisée),
  le site ne plante plus si un CDN ne répond pas, `aria-label` et `rel="noopener noreferrer"` sur les liens externes,
  balises `hreflang`, titres de pages descriptifs, espace insécable dans « Bonjour ! ».
- Petites corrections : « Je maîtrise », « Cliquez sur les cartes » (elles s'ouvrent au clic), « General information », « Hey! ».

### Choix faits (et pourquoi)
- **Rythme affiché** : « environ 3 semaines en entreprise pour 1 semaine au CESI (≈ 75 %) ». Calculé à partir du
  calendrier : environ 70 jours de cours entre octobre 2026 et septembre 2027, en blocs d'une semaine par mois environ.
- **BUT1 gardé sur le site** (retiré du CV) : le site a la place et la section « Projets BUT1 » y fait référence.
- **Titre court de la formation** dans la carte (« Bachelor CDA (Bac+3) ») : le titre complet débordait de la carte ;
  il reste écrit en entier dans la Présentation.
- **Image de partage générée** à partir d'une page HTML aux couleurs du site, sans photo.
- **Travail poussé sur une branche avec une Pull Request** plutôt que directement sur `main`, pour pouvoir vérifier
  l'aperçu Vercel avant la mise en ligne.

### Ce qui reste
- Ajouter des captures d'écran des projets (le plus gros gain visuel restant).
- `index.html` et `indexEN.html` sont deux copies : toute modification doit être faite dans les deux.
- Le CV PDF actuel (export Figma) a un texte mal extractible : polices converties en « Type 3 ».
