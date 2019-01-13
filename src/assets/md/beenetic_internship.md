#### Context
I realized this internship with a friend from INSA, and we had to take over a project which was in standby within the company: **iBO Home**, related to the connected house domain. It consists in a system of smart sensors (wattmeter, humidity, temperature...) connected to various plug sockets in the house, in order to inform the user and allow a communication with actuators, depending on different domotic threshold parameters.

##### Objective
The aim of this internship was to set up a solution allowing to store and manage the data in a cloud, while designing an associate iOS app able to display in a readable way all these informations for the user.
> The electronic boards including the sensors were already developed by the company.

##### Solutions
The retained solution was to use an electronic board from DIGI tech, processing the data retrieved by the different boards accross the house, store them on the Amazon Web Services (AWS) Cloud, and analyse them with an AI allowing to inform the user in different situations. These data are then recovered with the REST API of Amazon in Swift (programming language of Apple), with ```GET``` requests from the mobile application, or ```POST/UPDATE``` to schedule events or command actuators and plug sockets.

#### My function
My main role was to develop the AWS architecture (on the app services side) with my co-worker, Leo, who was in internship too, and build an iOS App in order to interact with this architecture.

##### Swift and Xcode tutorials
I first learnt Swift programming language ans the XCode IDE, used to code Apple apps, with a lot of tutorials. I analysed also the Python script which was retrieving the data on the mother board (this part was then improved by Leo) to understand the principle. I analysed the source code for the app which was aborted, and started to implement new functionalities and improve the User Interface.

##### Amazon Web Services Cloud architecture
Meanwhile, we were looking for the needed services for our Cloud architecture. We finally got this scheme:

<div class="row pb-3">
  <div class="col text-center">
    <img src="./assets/images/md/beenetic/amazon_archi.png" alt="amazon architecture" width="50%"/>
  </div>
</div>

##### iOS App functionalities
Then, I used all the services API in the code to access them in the app. I managed to get the data and disply them, and after interact with the plug sockets, etc...

##### iOS App User Interface
You can see below some pictures of the app.

##### Amazon Alexa skill

#### Conclusion