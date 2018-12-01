import { Subject } from 'rxjs';

export class ProfileService {

  experienceSubject = new Subject<any[]>();
  educationSubject = new Subject<any[]>();
  softwareSubject = new Subject<any[]>();
  devTagSubject = new Subject<any[]>();
  otherTagSubject = new Subject<any[]>();

  emitExperienceSubject() {
    this.experienceSubject.next(this.experiences.slice());
  }

  emitEducationSubject() {
    this.educationSubject.next(this.educations.slice());
  }

  emitSoftwareSubject() {
    this.softwareSubject.next(this.softwares.slice());
  }

  emitDevTagSubject() {
    this.devTagSubject.next(this.dev_tags.slice());
  }

  emitOtherTagSubject() {
    this.otherTagSubject.next(this.other_tags.slice());
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
      id: 5,
      img: 'wiifor.png',
			date: 'Février-Juillet 2019',
			title: "Stage chez Wiifor (Toulouse - 31)",
      description: "Conception Plateforme SW IoT (Embarqué + Cloud)",
      gallery: [],
      skills: [],
      md_file: ''
    },
		{
      id: 4,
      img: 'beenetic.png',
			date: 'Juin-Septembre 2018',
			title: "Stage chez Beenetic Systems (Toulouse - 31)",
			description: "Projet IoT ‘iBO HOME’ : Développement logiciel d’un produit  embarqué destiné au monde de l’habitat intelligent",
      gallery: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'],
      skills: ['AWS', 'Swift', 'Xcode', 'Python', 'Javascript'],
      md_file: 'beenetic_internship.md'
    },
    {
      id: 3,
      img: 'nxp.png',
			date: '2017 - 2018',
			title: "Participation à la NXP Cup (Toulouse/Grenoble)",
      description: 'Compétition de voitures autonomes sur circuit',
      gallery: [],
      skills: ['C', 'Prog. périphérique'],
      md_file: 'nxp_cup.md'
    },
    {
      id: 2,
      img: 'allette.png',
			date: 'Juillet - Août 2017',
			title: "Stage chez Allette Systems (Sydney - Australie)",
      description: "Développement d'une application web de gestion de documents",
      gallery: [],
      skills: ['Javascript', 'HTML', 'CSS', 'Foundation', 'XSLT', 'XPath', 'Java'],
      md_file: 'allette_internship.md'
    },
    {
      id: 1,
      img: 'thales.png',
			date: 'Juin 2015',
			title: "Stage Ouvrier chez Thales Alenia Space (Toulouse - 31)",
      description: 'Transfert de données vers une base de gestion informatique',
      gallery: [],
      skills: ['Excel'],
      md_file: 'thales_internship.md'
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
			description: 'Sciences de l’Ingénieur - Spécialité Mathématiques - Mention Très Bien - 19.31/20'
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
    
  public softwares = [
    // Programmation Objet
    {
      id: 1,
      color: '#6395cc',
      name: 'C',
      level: '75%',
      examples: 'Simulation du jeu de ‘UNO’ dans un terminal linux - Communication TCP/UDP entre 2 machines'
    },
    {
      id: 2,
      color: '#00427e',
      name: 'C++',
      level: '70%',
      examples: 'Mini-jeu Simon via carte Edison et GPIO - Projet ‘Pulpito’ lors du Hackathon de Banyuls'
    },
    {
      id: 3,
      color: '#f73f29',
      name: 'Swift',
      level: '85%',
      examples: 'Application iOS ‘iBo Home’ lors du stage à Beenetic Systems'
    },
    {
      id: 4,
      color: '#0097a3',
      name: 'Java',
      level: '75%',
      examples: 'Jeux Android développés chez WhileOne Studios: Lord of Yams, MasterCode, Crunch it!'
    },
    {
      id: 5,
      color: '#f6c83c',
      name: 'Python',
      level: '65%',
      examples: ''
    },
    // Programmation Web
    {
      id: 6,
      color: '#dd4b25',
      name: 'HTML',
      level: '95%',
      examples: ''
    },
    {
      id: 7,
      color: '#006cb4',
      name: 'CSS',
      level: '90%',
      examples: ''
    },
    {
      id: 8,
      color: '#e09e27',
      name: 'Javascript',
      level: '90%',
      examples: ''
    },
    {
      id: 9,
      color: '#bd002e',
      name: 'Angular',
      level: '75%',
      examples: ''
    },
    {
      id: 10,
      color: '#563d7c',
      name: 'Bootstrap',
      level: '80%',
      examples: ''
    },
    {
      id: 11,
      color: '#4c89ef',
      name: 'Ionic',
      level: '75%',
      examples: ''
    }
  ];

  public dev_tags = [
    {
      color: '#8DC054',
      name: 'Android Studio'
    },
    {
      color: '#009FEB',
      name: 'Xcode'
    },
    {
      color: '#2E2456',
      name: 'Eclipse'
    },
    {
      color: '#0F9DA9',
      name: 'Arduino'
    },
    {
      color: '#CA0907',
      name: 'Matlab/Simulink'
    },
    {
      color: '#999999',
      name: 'LTSpice'
    },
    {
      color: '#185015',
      name: 'KiCad'
    }
  ];

  public other_tags = [
    {
      color: '#008cc3',
      name: 'R'
    },
    {
      color: '#777bb3',
      name: 'PHP'
    },
    {
      color: '#027C00',
      name: 'XSLT'
    },
    {
      color: '#EE8910',
      name: 'AWS'
    },
    {
      color: '#0F3C2D',
      name: 'Django'
    },
    {
      color: '#432D7B',
      name: 'UML'
    },
    {
      color: '#3CB8AA',
      name: 'SQL'
    },
    {
      color: '#111111',
      name: 'ADA'
    },
    {
      color: '#026E39',
      name: 'Excel'
    },
    {
      color: '#00A1C2',
      name: 'Foundation'
    },
    {
      color: '#F70505',
      name: 'XPath'
    },
    {
      color: '#C66200',
      name: 'Prog. périphérique'
    }
  ];

}