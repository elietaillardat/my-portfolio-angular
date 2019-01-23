### Contexte

 Le but de ce projet était de réaliser, en binôme et dans un contexte open-source, un capteur de gaz communiquant. Ce capteur mesure la concentration de gaz dans l'air et la transmet, via le réseau LoRa, à un compte TTN (The Things Network). Ces données sont récupérées par une interface graphique (réalisée avec Node-RED et Freeboard.io) qui permet à l'utilisateur de lire les données et d'interagir avec le capteur. Pour la cohérence du projet et la facilité d'utilisation, l'ensemble des composants électronique ont été assemblés sur un shield Arduino.

  La partie capteur est traitée dans Introduction aux capteurs. Ici, nous traitons des technologies associées à ce capteur pour le rendre communiquant et de l'interface utilisateur.

Nous avions quatre problématiques à résoudre :

Tout d'abord, la première problématique était de conditionner le signal du capteur afin de le rendre exploitable par le microcontrôleur. En effet, le courant de sortie du capteur est très faible, de l'ordre de 100 nA, et n'est pas proportionnel à la tension de sortie (effet tunnel). Avec les caractéristiques de l'Arduino UNO (résolution de 10 bits sur son ADC, pleine échelle de 1.1 V à 5.0 V, impédance de source 10 kOhm et fréquence d'échantillonage de 15 kHz maximum), il n'était pas possible de mesurer directement le courant de sortie.
Ensuite, la seconde problématique était de connecter le capteur pour le rendre intelligent et communiquant. Une solution open-source était préconisée.
La troisième problématique consistait à faciliter la manipulation du montage, donc à assembler les précedents élements sur un shield Arduino, et à en designer le PCB.
Enfin, la dernière problématique était de récupérer les données transmises au réseau, les analyser et fournir un tableau de bord ergonomique et intuitif à l'utilisateur.

### Ma fonction

Durant le projet de simulation d'automatisation des salles de classes de l'INSA (ouverture des portes, extinction des lumières, allumage du chauffage... en fonction des données de capteurs et de différents scénarios), j'ai eu un rôle très important dans plusieurs aspects :

- Création des **scénarios** et de l'architecture
- Participation à la mise en place de notre **plugin OM2M** pour générer les ressources nécessaires
- Développement du **Client** et des **services Web** en Java
- Développement complet d'une **interface utilisateur** en Angular

</br>
<hr>

#### **A. Comprendre, définir et implémenter une Architecture Orientée Service (SOA)**

##### Résolution du problème

Les premiers cours et TDs nous ont permis d'appréhender la notion d'architecture logicielle orientée service, et de développer nos premiers petits services web, ce qui nous a été très utile après avec mon binôme pour le projet final (documents attachés en haut de page). Durant ces Travaux Dirigés, nous avons en effet implémenté des services **SOAP (Simple Access Object Protocol)** dans les deux configurations possibles (top-down et bottum-up), puis **REST (Representational State Transfer)**, afin d'avoir une vision globale de ces deux méthodes. De même, il est important de rajouter que ces cours étaient présentés à chaque fois par des étudiants, et que nous devions préparer les cours, comme nous l'avons fait par exemple pour l'introduction aux Applications distribuées (cf. PDF attaché en haut de page).

##### Compétences mobilisées

La réalisation du projet m'a demandé de mobiliser mes compétences en Java, en architecture OM2M (que nous avions déjà sollicitées pour le module Intergiciel pour l'IoT). J'ai de même pu me servir des notions que j'avais assimilées durant **[mon stage à Sydney en 2017 à Allette Systems](/#/profile/experiences/2)**, pour mieux implémenter nos services REST et le traitement des réponses en XML ou JSON. En outre, j'ai pu utiliser Angular et le module `HttpClient` pour coder notre interface utilisateur permettant de réaliser les fonctions `GET` et `POST` et dérouler nos scénarios de manière visuelle.
</br></br>
L'IHM est disponible en suivant ce [lien](/#/portfolio/ptp-iss/mdware-services/rest-project).

<div class="row pb-3">
  <div class="col text-center">
    <img src="./assets/images/md/ptp/IHM.PNG" alt="ihm soa project" width="100%"/>
  </div>
</div>

##### Synthèse et bilan

Ce module a été très bénéfique par l'implémentation de services REST et la nouvelle utilisation d'OM2M, qui nous a permis d'améliorer notre vision de cet outil puissant pour le secteur de l'IoT. Le projet était **très formateur**, par la première étape de création de l'architecture globale de notre système, puis par l'implémentation un à un de nos services et fonctions.

</br>

#### **B. Plannification et gestion d'un projet : l'outils IceScrum**

##### Résolution du problème

Ce module était lié avec les méthodes de **management de projet**, sur lesquelles nous avions fait un rapide état de l'art pour le module [Ingénierie Logicielle](/#/portfolio/ptp-iss/mdware-services/), en particulier la méthode **Agile et Scrum**, maintenant très utilisée en entreprise, et consistant en sprints à réaliser à intervalles courts et mesurés. L'utilisation d'**IceScrum**, un outil spécialement conçu pour la gestion de projet en équipe, nous a permis avec mon binôme de gérer les étapes de ce projet (conception de l'architecture, implémentation des service, création de l'IHM, ...) en temps et en répartition.

##### Compétences mobilisées

J'ai usé de ma force d'**organisation**, mais aussi de **leadership** (rôle que j'avais aussi durant le projet d'innovation de ce PTP) afin d'arriver au mieux au terme du projet dans le peu de temps que nous avions en fin de semestre.

##### Synthèse et bilan

L'utilisation d'outils de gestion de projet a permis de bien cerner les étapes en début de projet, et a du coup permis une **meilleure gestion du temps**, même si une séance de TP en plus n'aurait pas été de refus pour bien finir de gérer nos scénarios.

</br>

#### **C. Rapport de projet**

</br>

<iframe src="./assets/files/ptp_iss_mdware_services/SOA_REST_Project.pdf" style="width: 100%; height: 95vh;"></iframe>
