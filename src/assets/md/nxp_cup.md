### Contexte

La participation à cette compétition remplaçait le **projet tuteuré** que l'on doit réalisé au cours de la 4ème année à l'INSA. J'ai choisi de m'inscrire, avec deux autres de mes camarades, car le **challenge** était aussi au rendez-vous, en plus des compétences techniques nécessaires à mettre en oeuvre.
Le principe global de cette compétition est de parvenir à compléter un tour de piste **le plus rapidement possible** avec la voiture mis à disposition des concurrents. La voiture doit toujours avoir au minimum deux roues en sur la piste, qui peut être composée de divers obstacles tels que des bosses, virages en zigzag, croisement, cassis... Chaque équipe dispose de trois essais pour y parvenir. Dès qu’un essai est « réussi », l’équipe n’a plus droit à ses autres essais. De même, il est interdit de modifier le code contenu dans le microcontrôleur de la voiture entre les essais. Si la voiture ne s’arrête pas après la ligne d’arrivée, cela entraîne une pénalité de 1 seconde sur le temps réalisé.

### Ma fonction

Durant le semestre, et malgré le retard de la livraison du kit, nous avons beaucoup travaillé, au moins par deux, à l'avancé de ce projet. Deux autres équipes de l'INSA étaient aussi présentes, et nous essayions de nous aider quand certains étaient vraiment bloqués. Ce projet a mis en oeuvre les compétences de **programmation périphérique** étudées cette même année en **C** (court extrait avec des exemples de configuration des **GPIO** par **masquage**)...

```javascript
// set GPIO outputs to outputs
GPIOA_PDDR |= (1<<4);   // PTA4  Motor 1 In 1
GPIOA_PDDR |= (1<<5);   // PTA5  Motor 1 In 2 (direction)
GPIOC_PDDR |= (1<<8);   // PTC8  Motor 2 In 1 (direction)
GPIOC_PDDR |= (1<<9);   // PTC9  Motor 2 In 2

// initial configuration of motors
TPM0_C2V = 100;         // TPM0 channel1 left Motor 1 In 1 slow forward
TPM0_C5V = 100;         // TPM0 channel5 right Motor 2 In 2 slow forward
GPIOA_PDOR &= ~(1<<4);  // Set PTA4 left Motor 1 In 2 forward
GPIOC_PDOR &= ~(1<<8);  // Set PTC8 right Motor 2 In 1 forward
```

...tout comme le **management de projet** et les méthodes/outils à mettre en place pour mettre le plus de chance de notre côté de faire d'un projet une réussite.
Le déroulement de la compétition à Grenoble pour le nouveau modèle Alamak a été quelque peu surprenant. En effet, aucune des équipes en lice n’est parvenue à compléter un tour entier. Notre voiture a été la plus rapide concernant les portions réalisées mais un des virages placé en sortie de bosse et enchaînant sur un second très léger a mis la moitié des équipes hors-piste. Nous étions assez déçus car notre voiture avait un vrai potentiel de qualification.

Le **rapport** en fin de page reprend tous les éléments clefs de ce projet et les travaux réalisés. Vous pouvez aussi apercevoir de courtes vidéos de notre modèle Alamak avant de partir à Grenoble.

### Bilan

Il est **dommage** qu’aucune des équipes n’ait pu se qualifier (notamment sur les trois équipes engagées par l’INSA), mais cela reste néanmoins une bonne expérience, sur un projet qui a su mettre en évidence nos compétences en périphériques, automatique et informatique. Cela a aussi été l'occasion d'entrer en **contact avec NXP** et son directeur, à qui nous sommes d'ailleurs allé refaire notre prsentation finale en fin d'année.

<div class="row py-3">
  <div class="col-4 text-center">
    <video width="100%" control muted loop autoplay="true"><source src="./assets/videos/nxp1.mp4" type="video/mp4"></video>
  </div>
  <div class="col-4 text-center">
    <video width="100%"control muted loop autoplay="true"><source src="./assets/videos/nxp2.mp4" type="video/mp4"></video>
  </div>
  <div class="col-4 text-center">
    <video width="100%"control muted loop autoplay="true"><source src="./assets/videos/nxp3.mp4" type="video/mp4"></video>
  </div>
</div>

<iframe src="./assets/files/nxp_cup/rapport_projet_tut_nxp.pdf" style="width: 100%; height: 95vh;"></iframe>
