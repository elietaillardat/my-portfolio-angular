import { Subject } from 'rxjs';

export class ProfileService {

  experienceSubject = new Subject<any[]>();
  educationSubject = new Subject<any[]>();
  softwareSubject = new Subject<any[]>();

  emitExperienceSubject() {
    this.experienceSubject.next(this.experiences.slice());
  }

  emitEducationSubject() {
    this.educationSubject.next(this.educations.slice());
  }

  emitSoftwareSubject() {
    this.softwareSubject.next(this.softwares.slice());
  }

	getExperienceById(id: number) {
		const experience = this.experiences.find(
			(e) => {
				return e.id === id;
			}
		);
		return experience;
	}

  private experiences = [
		{
      id: 1,
      img: 'beenetic.png',
			date: 'Juin-Septembre 2018',
			title: "Stage chez Beenetic Systems (Toulouse - 31)",
			description: "Projet IoT ‘iBO HOME’ : Développement logiciel d’un produit  embarqué destiné au monde de l’habitat intelligent",
      gallery: ''
    },
    {
      id: 2,
      img: 'nxp.png',
			date: '2017 - 2018',
			title: "Participation à la NXP Cup (Toulouse/Grenoble)",
			description: 'Compétition de voitures autonomes sur circuit'
    },
    {
      id: 3,
      img: 'allette.png',
			date: 'Juillet - Août 2017',
			title: "Stage chez Allette Systems (Sydney - Australie)",
			description: "Développement d'une application web de gestion de documents"
    },
    {
      id: 4,
      img: 'thales.png',
			date: 'Juin 2015',
			title: "Stage Ouvrier chez Thales Alenia Space (Toulouse - 31)",
			description: 'Transfert de données vers une base de gestion informatique'
		}
  ];
  
	private educations = [
		{
      img: 'insa.png',
			date: '2014 - 2018',
			title: "Élève Ingénieur en 5ème année à l'INSA de Toulouse",
			description: 'Génie Automatique et Électronique - Systèmes Embarqués - Option Innovative Smart System (domaine de l’IoT)'
		},
		{
      img: 'ul.png',
			date: '2016',
			title: "Semestre d'étude à Limerick (Irlande)",
			description: 'Enrichissement de la langue anglaise et ouverture culturelle'
		},
		{
      img: 'cdg.png',
			date: '2014',
			title: 'Diplôme du Baccalauréat Général Série S',
			description: 'Sciences de l’Ingénieur - Spécialité Mathématiques - Mention Très Bien - 19.31/20 (31 - Muret)'
		}
  ];
  
  private languages = [
    {
      name: 'Anglais',
      writing_reading_level: 'C1',
      speaking_level: 'B2+'
    },
    {
      name: 'Espagnol',
      writing_reading_level: 'B2',
      speaking_level: 'B2'
    }
  ];
    
  private softwares = [
    {
      id: 1,
      name: 'C/C++',
      level: '65%',
      examples: 'Mini-jeu Simon C++'
    },
    {
      id: 2,
      name: 'Swift/Java',
      level: '75%',
      examples: 'Appli iOS'
    }
  ];

}