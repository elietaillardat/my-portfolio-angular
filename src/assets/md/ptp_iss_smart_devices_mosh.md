### Contexte

Le but de ce projet était de réaliser, en binôme et dans un contexte open-source, un **capteur de gaz communiquant**. Ce capteur mesure la concentration de gaz dans l'air et la transmet, via le réseau **LoRa**, à un compte **TTN (The Things Network)**. Ces données sont ensuite récupérées grâce à **NodeRED** et intégrer dans une interface utilisateur réalisée avec **Node-RED et Freeboard.io**, qui permet de lire ces données et d'interagir avec le capteur. Une partie consistait également à intégrer tout nos composants dans un shield **Arduino**, à designer à l'aide de **KiCad**.

> La partie capteur est traitée dansl'autre partie de ce module : Introduction aux capteurs.

### Ma fonction

Dans le découpage de ce projet avec mon binôme, j'ai réalisé plusieurs tâches:

- Utilisation des **librairies TTN** dans le code Arduino pour transmettre et recevoir des données via le réseau LoRa
- Aide à la conception du shield via l'outil KiCad
- Traitement des trames de bytes reçues sur **TTN** avec des fonctions `decoder` et `encoder` pour récupérer les donées et utiliser l'outils **NodeRED**
- Création le **dashboard** utilisateur sur NodeRED

##### Résolution du problème

Toutes les informations sur la résolution de ces problèmes sont détaillées via le **README** présent en fin de page.
Le lien de notre projet sur GitHub est disponible ici:
[github.com/elietaillardat/lora-mosh-project-5iss](https://github.com/elietaillardat/lora-mosh-project-5iss).

##### Compétences mobilisées

Ce projet très important du semestre a mobiliser plusieurs compétences :

- Programmation C et Arduino
- découverte de la modélisation de shiels avec KiCad
- **Utilisation du réseau LoRa pour la première fois, via TTN**
- Utilisation de NodeRED pour récupérer les donénes et les afficher via un dashboard

#### Synthèse et Bilan

Ce projet était pour moi l'un des **plus intéressant** de ce semestre, et m'a apporté de nombreuses compétences, pour coder en **Arduino** et surtout utiliser **le réseau LoRA et TTN**, les deux notions clefs pour moi de ce projet.
Je regrette néanmoins de ne pas beaucoup avoir participer à la conception KiCad de A à Z, mais j'ai pu avoir un aperçu de cet outil très intéressant.

</br>

#### **README avec toutes les informations de ce projet :**