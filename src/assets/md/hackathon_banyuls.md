### Contexte

Un événement important du parcours proposé dans le cadre du PTP ISS est son **hackathon**, qui avait lieu à l’observatoire océanologique de Banyuls-sur-mer, durant deux jours de réalisation de projet.
Le choix du sujet est libre et doit seulement être en lien avec l’observatoire ou l’aquarium.

Nous étions un groupe de **5 étudiants** et avons choisi de dynamiser la visite du Biodiversarium.
En effet, nous avons eu la chance de pouvoir le visiter dès le premier jour et nous voulions rendre cette visite plus interactive.

L’idée de base était donc de créer, tout au long de la visite, une interaction avec le visiteur avec l’installation de bornes. Pour cela il doit :

- télécharger une **application** sur son mobile ou sa tablette
- scanner le QR code de la borne devant laquelle il se trouve
- répondre aux questions ou jouer au jeu proposé qui peut parfois être à la fois sur l’application et sur la borne (réponses à donner sur l’application, code à écrire sur le clavier de la borne…)

<div class="row p-3">
  <div class="col-6 text-center">
    <img src="./assets/images/md/experiences/tortue.png" alt="arduino" width="100%"/>
  </div>
  <div class="col-3 text-center">
    <img src="./assets/images/md/experiences/screen1.jpg" alt="arduino" width="100%"/>
  </div>
  <div class="col-3 text-center">
    <img src="./assets/images/md/experiences/screen2.jpg" alt="arduino" width="100%"/>
  </div>
</div>

</br>

### Ma fonction

Dans ce groupe d'étudiants, qui était à majorité composé de mes camarades de projet innovant, j'étais tout d'abord un peu le **leader**, un rôle que j'aimer exercer, car j'aime beaucoup mettre en avant mes idées et **organiser/dynamiser** les choses.
J'ai pu faire valloir mon idée, la développer et la présenter au groupe qui a tout de suite validé.

De manière technique, j'étais chargé du code de la **carte Edison**, et j'ai pu reprendre mes classes GPIO et librairies que j'avais codé en 4ème année pour le mini projet de **C++**, ce qui m'a permis d'avoir un bon résultat et rapidement, malgré les différents bugs liés à la connecxion en mode admin sur la carte. Un exemple de classe simple pour manipuler un GPIO :

```javascript
#include "GPIO.h"

GPIO::GPIO(int gpio, mraa_gpio_dir_t type) {
	this->m_gpio = mraa_gpio_init(gpio);
	mraa_gpio_dir(this->m_gpio, type);
}

GPIO::~GPIO() {
	mraa_gpio_close(this->m_gpio);
}
```

J'ai de même particpé à la réalisation du code sur **carte Arduino** pour l'intéraction avec le pad numérique, et à la réalisation de la **démonstartion finale** auprès du jury.
Voici un extrait du projet que j'avais réalisé en 4ème année en **C++**, très en lien avec ce que j'ai pu faire durant ce projet:

<div class="row pb-3 align-items-center">
  <div class="col-6 text-center">
    <video width="100%" mute autoplay="true" control><source src="./assets/videos/LordOfLEDs.mp4" type="video/mp4"></video>
  </div>
  <div class="col-6 text-center">
    <img src="./assets/images/md/experiences/arduino.png" alt="arduino" width="100%"/>
  </div>
</div>

### Bilan

Nous avons finalement présenté notre projet devant l’ensemble des étudiants, des enseignants présents et des acteurs de l’observatoire.
Je peux dire, et mes camarades aussi, que cette expérience fut l’une des **plus enrichissantes** du semestre car elle a permis de mobiliser de nombreuses connaissances dans un laps de temps **très court**.
L'**organisation** était l'un des points primordiaux pour un projet viable et réussi..
Espérons que Pulpito soit l’avenir des musées pour permettre des visites plus ludiques !
Ci-dessous la présentation rapide que nous avions élaborée :

</br>

<iframe src="./assets/files/hackathon_banyuls/hackathon_presentation.pdf" style="width: 100%; height: 95vh;"></iframe>