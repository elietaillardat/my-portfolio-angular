### Context
I realized this internship with a friend from INSA, and we had to take over a project which was in standby within the company: **iBO Home**. It consists in a system of smart sensors (wattmeter, humidity, temperature...) connected to various plug sockets in the house, in order to inform the user and allow a communication with actuators in function of different domotic threshold parameters.
> The electronic boards including the sensors were already developed by the company.

#### Objective
The aim of this internship was to set up a solution allowing to store and manage the data in a cloud, while designing an associate iOS app able to display in a readable way all these informations for the user.

### Solution
The retained solution was to use an electronic board from DIGI, processing the data retrieved by the different boards accross the house, and store them to the Amazon Web Services (AWS) Cloud. Then, these data are recovered by ```GET``` requests via the mobile application.
