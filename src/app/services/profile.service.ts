import { Subject } from 'rxjs';

export class ProfileService {

  experienceSubject = new Subject<any[]>();
  educationSubject = new Subject<any[]>();
  interestSubject = new Subject<any[]>();
  languageSubject = new Subject<any[]>();
  softwareSubject = new Subject<any[]>();
  devTagSubject = new Subject<any[]>();
  otherTagSubject = new Subject<any[]>();

  emitExperienceSubject() {
    this.experienceSubject.next(this.experiences.slice());
  }

  emitEducationSubject() {
    this.educationSubject.next(this.educations.slice());
  }

  emitinterestSubject() {
    this.interestSubject.next(this.interests.slice());
  }

  emitLanguageSubject() {
    this.languageSubject.next(this.languages.slice());
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
  
  getInterestById(iid: number) {
		const interest = this.interests.find(
			(e) => {
				return e.iid === iid;
			}
		);
		return interest;
	}

  private experiences = [
    {
      id: 5,
      img: 'wiifor.png',
			date: 'February-July 2019',
			title: "Internship at Wiifor (Toulouse - 31)",
      description: "IoT Platform Software Design (Embedded + Cloud)",
      gallery: [],
      skills: [],
      documents: [],
      md_file: ''
    },
		{
      id: 4,
      img: 'beenetic.png',
			date: 'June-September 2018',
			title: "Internship at Beenetic Systems (Toulouse - 31)",
			description: "IoT Project ‘iBO HOME’ : Software development of an embedded product designed for the Smart Home area",
      gallery: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'],
      skills: ['Amazon Web Services', 'Swift', 'Xcode', 'Python', 'Javascript/JQuery', 'JSON'],
      documents: ['2018-Taillardat-Elie-BilanStage4A-18', '2018-Taillardat-Elie-PosterStage4A_2018'],
      md_file: 'beenetic_internship'
    },
    {
      id: 3,
      img: 'nxp.png',
			date: '2017 - 2018',
			title: "Participation in the NXP Cup (Toulouse/Grenoble)",
      description: 'Autonomous car competition on track',
      gallery: [],
      skills: ['C', 'Peripheral prog.'],
      documents: [],
      md_file: 'nxp_cup.md'
    },
    {
      id: 2,
      img: 'allette.png',
			date: 'July - August 2017',
			title: "Internship at Allette Systems (Sydney - Australie)",
      description: "Design of a Web application for documents management",
      gallery: [],
      skills: ['Javascript/JQuery', 'HTML', 'CSS', 'Foundation', 'XSLT', 'XPath', 'Java', 'JSON'],
      documents: [],
      md_file: 'allette_internship.md'
    },
    {
      id: 1,
      img: 'thales.png',
			date: 'June 2015',
			title: "Worker internship at Thales Alenia Space (Toulouse - 31)",
      description: 'Data transfer to a new management database',
      gallery: [],
      skills: ['Excel'],
      documents: [],
      md_file: 'thales_internship.md'
		}
  ];
  
	private educations = [
		{
      img: 'insa.png',
			date: '2014 - 2018',
			title: "Engineering student in 5th year at INSA de Toulouse",
			description: 'Automation & Electronic Engineering - Embedded Systems - Speciality Innovative Smart System (IoT domain)'
		},
		{
      img: 'ul.png',
			date: '2016',
			title: "Erasmus exchange semester in Limerick (Ireland)",
			description: 'Enrichment of the English language and cultural opening'
		},
		{
      img: 'cdg.png',
			date: '2014',
			title: "General Bachelor's Degree Serie S",
			description: "Engineering Science (SI) - Speciality Mathematics - with Highest honour and Jury's congratulations - 19.31/20"
		}
  ];

  private interests = [
    {
      iid: 1,      
      img: 'play_logo.png',
			date: '2015 - Today',
			title: "Android Games development at WhileOne Studios",
      description: '3 games published on the Google PlayStore (+7000 downloads): Lord of Yams • Master Code • O.B.I. • Crunch it! (bêta) - Website creation : www.whileone-studios.com',
      gallery: [],
      skills: ['Android Studio', 'Java'],
      documents: [],
      md_file: ''
    },
    {
      iid: 2,      
      img: 'logo_forum.png',
			date: '2018',
			title: "Volunteer in Web development for Forum by INSA",
      description: 'Responsible for the creation and management of the new features for this edition',
      gallery: [],
      skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript/JQuery'],
      documents: [],
      md_file: ''
    },
    {
      iid: 3,      
      img: 'logo_amicale.png',
			date: '2017 - 2018',
			title: "Volunteer at Amicale INSA Toulouse as 'Technic' manager",
      description: "Creation of a Web platform for club's equipments sharing",
      gallery: [],
      skills: ['PHP', 'SQL', 'Bootstrap', 'HTML', 'CSS', 'Javascript/JQuery'],
      documents: [],
      md_file: ''
    },
    {
      iid: 4,      
      img: 'soccer_player.png',
			date: '2003/2006 - Today',
			title: "Football Player - Center Midfielder",
      description: 'High Level Athlete equivalent status (2015) - Experience as a captain',
      gallery: [],
      skills: [],
      documents: [],
      md_file: ''
		},
  ];
  
  private languages = [
    {
      id: 1,
      name: 'English',
      wr_level: 'C1',
      s_level: 'C1',
      level: '90%',
      degree: 'TOEIC: 910/990',
      color: '#00427e',
      icon: 'united-kingdom',
      examples: "Semestre d'études à Limerick (Irlande) - Internship de 10 semaines à Sydney (Australie) - PTP ISS dispensé en Anglais"
    },
    {
      id: 2,
      name: 'Spanish',
      wr_level: 'B2',
      s_level: 'B2',
      level: '65%',
      degree: '',
      color: '#CA0907',
      icon: 'spain',
      examples: "Mini séjours en Espagne - 20/20 au Baccalauréat Général Série S"
    }
  ];

  public aptitudes = ["Self-learning", "Meticulous", "Organized", "Autonomous"];
    
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
      examples: 'Application iOS ‘iBo Home’ lors du Internship à Beenetic Systems'
    },
    {
      id: 4,
      color: '#0097a3',
      name: 'Java',
      level: '75%',
      examples: 'Jeux Android développés at WhileOne Studios: Lord of Yams, MasterCode, Crunch it!'
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
      name: 'Javascript/JQuery',
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
      name: 'Amazon Web Services'
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
      name: 'Peripheral prog.'
    },
    {
      color: '#737373',
      name: 'JSON'
    }
  ];

}