### Contexte

Dans le cadre de l'édition 2018 du Forum INSA Entreprise, de son nouveau format, et nouveau nom **'Forum *by* INSA**, je me suivi porté volontaire pour faire parti de l'équipe organisatrice, en tant que membre de **GEIser**, l'association des élèves du département Électronique et Informatique.

### Ma fonction

J'étais responsable du **site web du forum**, et de coder toutes les nouvelles fonctionnalités que nous voulions ajouter : inscription et participation à des ateliers, nouveau format des Speed Job Dating, nouveaux tarifs en vigueur, changement de la **charte graphique**... et bien sûr de la partie admin du site afin de gérer l'évènement de manière viable et efficace.
J'ai pu développer de nouvelles compétences Web avec Node.js et le framework **SailsJS** lié à une base de données que je pouvais aussi manipuler avec **MongoDB**. J'ai passé beaucoup de temps à coder ce site, mais mes précédentes expériences à Sydney et à l'Amicale m'ont permis de finir à temps, et de réaliser une édition 2018 très réussie, avec de **très bons retours** de la part des entreprises conviées.

Voici le lien pour accéder à la partie publique du site : [https://foruminsaentreprises.fr/](http://foruminsaentreprises.fr/)
Et un exemple de Controlleur que j'ai codé pour la gestion des ateliers pour les étudiants :
```javascript
/**
* WorkshopWishController extract
*
**/
WorkshopWish.create(req.body).exec((err, wish) => {
  if(err) {
      sails.log.error('[WorkshopWishController.create] error when create a wish: ', err);

      // get error message from validator. (cf locale/*.json)
      for(var attribute of Object.keys(err.invalidAttributes))  {
          for(var error of err.Errors[attribute])    {
              req.addFlash(attribute, error.message);
          }
      }

      return res.view('StudentSpace/Workshop', {layout: 'layout', student: student, workshop: workshop})
  }
  if(!wish || wish.length === 0) {
      req.addFlash('warning', 'No wish has been created');
      return res.view('StudentSpace/Workshop', {layout: 'layout', student: student, workshop: workshop})
  }

  Student.update({login: req.session.login}, {
    workshopRegistered: true
  }).exec((err) => {
      if (err) {
          console.log('err', err)
          return res.view('ErrorPage', {layout: 'layout', ErrorTitle: "Une erreur s'est produite", ErrorDesc: 'Votre inscription s\'est mal passée et est dans un état instable. Veuillez prévenir le webmaster pour qu\'il règle le problème.'})
      }
      SjdWish.findOne({login: req.session.login}).exec((err, sjdWishes) => {
          if (err) {
              console.log('err', err)
              return res.view('ErrorPage', {layout: 'layout', ErrorTitle: "Une erreur s'est produite", ErrorDesc: 'Veuillez réessayer'})
          }
          WorkshopWish.findOne({login: req.session.login}).exec((err, workshopWishes) => {
              if (err) {
                  console.log('err', err)
                  return res.view('ErrorPage', {layout: 'layout', ErrorTitle: "Une erreur s'est produite", ErrorDesc: 'Veuillez réessayer'})
              }
              return res.view('StudentSpace/Profile', {
                  layout: 'layout',
                  login: student.login,
                  firstName: student.firstName,
                  lastName: student.lastName,
                  mailAddress: student.mailAddress,
                  year: student.year,
                  speciality: student.speciality,
                  frCVPath: student.frCVPath,
                  enCVPath: student.enCVPath,
                  personalWebsite: student.personalWebsite,
                  linkedin: student.linkedin,
                  viadeo: student.viadeo,
                  github: student.github,
                  specialities: Student.definition.speciality.enum,
                  sjdWishes: sjdWishes,
                  workshop: workshop,
                  workshopWishes: workshopWishes
              })
          })
      })
  })
})
```