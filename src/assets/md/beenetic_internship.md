### Contexte

Le projet consiste en un système de **capteurs intelligents** (wattmètre, humidité, température...) connectés sur différentes prises électriques d'une maison. 
> Les cartes électroniques composées des capteurs ont déjà été développées par l'entreprise. 

L’objectif du stage était de reprendre ce projet en **standby**, avec la mise en place d’une solution permettant de stocker et gérer les données sur un **cloud**, tout en développant une **application** iOS associée capable d’afficher de manière lisible pour l’utilisateur toutes ces informations.

### Ma fonction

La solution choisie a été d’utiliser une carte électronique conçue par DIGI (traitant les données reçues) envoyant les données des différentes cartes sur **AWS (Amazon Web Services)**, qui sont ensuite récupérer par des requêtes `GET` via l’application, que j'ai codé grâce au langage **Swift** et l'environnement de **Xcode**. J'avais consacré le début de mon stage à ala réalisation de nombreux tutoriels sur ces outils, et à l'analyse du code déjà présent.

J’ai fait de même en sorte que cette dernière soit capable d’interagir avec les différentes cartes de la maison, en allumant/éteignant les torches intégrées par exemple (requêtes `POST`), ou bien en programmant la coupure d’une prise d’une pièce à un certain horaire. L’utilisateur peut de même choisir ses préférences grâce à des seuils (de température par exemple), et si des valeurs hors cadres sont récupérées, un script sur **Amazon Lambda** génère un message pour l’utilisateur sous forme de « push notification » le prévenant de la situation. J’ai pu enfin un peu côtoyer le fonctionnement des « skills » **Alexa** d’Amazon (assistant vocal). On pourra voir quelques screenshots de l'application iOS en bas de page.

Nous avons conçu totalment l'architecure CLoud sur Amazon, avec la recherche des services dont nous pensions avoir besoin. Nous obtenons l'architecture suivante :

<div class="row pb-3">
  <div class="col text-center">
    <img src="./assets/images/md/beenetic/amazon_archi.png" alt="amazon architecture" width="40%"/>
  </div>
</div>

La **présentation pdf** en suivant résume un peu plus en détails le travail accompli en collaboration avec Léo, avec qui j'ai réalisé ce stage tout comme l'année d'avant à Sydney. Nous avons laissé à notre tuteur en fin de stage une **documentation complète** pour pouvoir reprendre nos travaux sans trop de difficultés.

### Bilan

Par conséquent, j’ai pu découvrir le langage **Swift de développement Apple sous Xcode**, ainsi que de très nombreux services d’AWS,ce qui sera très utile pour la suite de mes projets dans le monde des IoT. Enfin, j’ai pu de nouveau acquérir une grande autonomie de travail dans cette petite entreprise, avec un projet très intéressant et formateur.

<iframe src="./assets/files/beenetic_internship/presentation_concours_alumni.pdf" style="width: 100%; height: 95vh;"></iframe>