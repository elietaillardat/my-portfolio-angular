### Contexte

Au milieu des divers protocoles et moyens de communication entre objets connectés, le monde de l'IoT s'est construit de manière verticale, sans vraiment de 'passerelle' entre les différentes technologies. Pour interconnecter ces technologies hardwares variées, il était nécessaire de définir un standard pour plateforme horizontale. Le standard **OneM2M** a été créé pour répondre à ce besoin, mis en oeuvre par le logiciel open-source OM2M que nous utilisons et développé au LaaS.
Dans le cadre du module sur les intergiciels, nous avions à déployer une architecture IoT **RESTful** avec OM2M capable d'interagir avec des lampes **Philips Hue** et des capteurs Fibaro. En outre, l'utilisateur devait avoir un accès facile et ergonomique pour contrôler les lampes et visualiser les données du capteur.

### Ma fonction

Lors des séances de TP, j'ai pu participé de manière active à toutes les étapes de développement avec mon binôme :

- Réalisation du tutoriel **OM2M sur Openclassroom**
- Intégration et utilisation des API Hue de Phillips
- Création d'un **IPE** (Interworking Proxy Entity)
- Développement de l'**interface utilisateur** avec NodeRED

</br>
<hr>

#### **A. Utiliser le standard OM2M et développer une architecture dans un contexte du domaine IoT**

##### Résolution du problème

Le rapport de TP que nous avons fait reprend bien la résolution complète des problématiques de déploiement de l'architecture et de l'interface utilisateur.

##### Compétences mobilisées

J'ai eu la chance d'être avec un binôme qui avait déjà pu utiliser le framework OM2M. Il a pu me présenter à sa manière en complément du tutoriel les **ressources OM2M (CSE, AE, ...)** et leur utilité, ainsi que les méthodes **RESTful** et l'outil **Postman**. Le déploiement et l'interaction avec l'architecture OM2M s'est donc faite plutôt aisément. La maîtrise du langage Java m'a permis de développer un client REST sous Eclipse avec l'intégration de lampes de la technologie Philips, ce qui était assez novateur et ludique. J'ai appris de même à développer un "interworking proxy" ou IPE pour intégrer cette technologie à l'architecture OM2M. Enfin, j'ai pu réutiliser l'outil **NodeRED** pour réaliser l'interface graphique, que j'avais déjà utiliser pour le projet [MOSH LoRa](). J'ai également vu rapidement comment utiliser le **mapping XML avec oBIX et JAXB** pour coder et décoder des objets au format convenable pour l'envoi et la réception des données.

##### Synthèse et bilan

Lors de ces TPs j'ai pu réaliser une architecture IoT basée sur le standard OneM2M permettant un accès transparent via des méthodes RESTful à des ressources hardwares de technologies différentes (lampes, capteur...). L'utilisation d'Eclipse et de Java pour déployer une architecture IoT m'a également servi pour le projet du module SOA. Nous regrettons avec mon binôme que le temps imparti pour finir le projet ait été **légèrement trop court** car nous n'avons pas pu implémenter l'implémentation du mini scenario entre le capteur et les lampes Philips.

</br>

#### **B. Rapport de TP**

</br>

<iframe src="./assets/files/ptp_iss_mdware_services_iot/Middleware_for_IOT.pdf" style="width: 100%; height: 95vh;"></iframe>
