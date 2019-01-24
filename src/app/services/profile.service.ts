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

  emitInterestSubject() {
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
  
  getPtpISSById(id: number) {
		const ptp = this.ptp_iss.find(
			(e) => {
				return e.id === id;
			}
		);
		return ptp;
	}

  public ptp_iss = [
    {
      id: 100,
      img: '',
      date: 'Décembre 2018',
      duration: '18,75 h',
			title: "Introduction aux capteurs",
      description: "Réalisation d'un capteur de gaz à nanoparticules en salle blanche.",
      gallery: ['aime1.jpg', 'aime2.jpg', 'aime3.jpg', 'aime4.jpg', 'aime5.jpg', 'aime6.jpg', 'aime7.jpg', 'aime8.jpg', 'aime9.jpg', 'aime10.jpg'],
      skills: [],
      documents: ['datasheet'],
      md_file: 'ptp_iss_smart_devices_sensors'
    },
    {
      id: 101,
      img: '',
      date: 'Octobre - Décembre 2018',
      duration: '41,5 h',
			title: "Microcontrôleurs et Open-Source Hardware",
      description: "Réalisation 'from scratch' d'un capteur de gaz connecté via LoRa pour alerter l'utilisateur de la présence anormale d'un gaz.",
      gallery: [],
      skills: ['C', 'Arduino', 'NodeRED', 'The Things Network'],
      md_file: 'ptp_iss_smart_devices_mosh'
    },
    {
      id: 200,
      img: '',
      date: 'Octobre - Décembre 2018',
      duration: '56,25 h',
			title: "Protocoles et Communication",
      description: "Communications numériques sans-fil, énergie (récupération, transfert), réseaux émergeants (SDN, NGN)",
      gallery: [],
      skills: [],
      documents: ['Exercice_Zigbee', '5G_Smart_City', 'MAC_Layers', 'NB_IoT', 'NB_IoT_Presentation', 'SDR_Report'],
      md_file: 'ptp_iss_communication_proto'
    },
    {
      id: 201,
      img: '',
      date: 'Janvier 2019',
      duration: '7,5 h',
			title: "Sécurité pour les réseaux IoT",
      description: "Comprendre l’impact d’une sécurité informatique négligée",
      gallery: [],
      skills: [],
      md_file: 'ptp_iss_communication_security'
    },
    {
      id: 300,
      img: '',
      date: 'Décembre 2018 - Janvier 2019',
      duration: '31 h',
			title: "Architecture Orientée Services",
      description: "Apprendre à déployer et configurer une SOA en utilisant des API REST/SOAP → Projet Salles de classes autonomes",
      gallery: [],
      skills: ['SOA', 'API REST', 'OM2M', 'Java', 'XML', 'JSON' , 'Eclipse', 'Angular', 'Bootstrap', 'HTML', 'CSS'],
      documents: ['SOA_REST_Project', 'Distributed_Applications'],
      md_file: 'ptp_iss_mdware_services_soa'
    },
    {
      id: 301,
      img: '',
      date: 'Décembre 2018 - Janvier 2019',
      duration: '14,75 h',
			title: "Intergiciel pour l'IoT",
      description: "Découvrir le standard OM2M et implémenter une architecture à base de service REST & IoT",
      gallery: [],
      skills: ['API REST', 'OM2M', 'Java', 'NodeRED', 'XML', 'JSON' , 'Eclipse'],
      documents: ['Middleware_for_IOT'],
      md_file: 'ptp_iss_mdware_services_iot'
    },
    {
      id: 302,
      img: '',
      date: 'Décembre 2018 - Janvier 2019',
      duration: '16,25 h',
			title: "Adaptabilité Cloud et gestion autonomique",
      description: "Découvrir le standard OM2M et implémenter une architecture à base de service REST & IoT",
      gallery: [],
      skills: ['Java', 'Eclipse', 'Proxmox'],
      documents: ['Cloud_computing_autonomic_management'],
      md_file: 'ptp_iss_mdware_services_cloud'
    },
    {
      id: 400,
      img: '',
      date: 'Octobre - Novembre 2018',
      duration: '6,25 h',
			title: "Ingénierie logicielle",
      description: "",
      gallery: [],
      skills: [],
      documents: ['Management_Methods'],
      md_file: 'ptp_iss_analysis_data_soft'
    },
    {
      id: 401,
      img: '',
      date: 'Novembre 2018',
      duration: '8 h',
			title: "Données Sémantique",
      description: "",
      gallery: [],
      skills: [],
      documents: ['Web_Semantic_TP_Report'],
      md_file: 'ptp_iss_analysis_data_semantic'
    },
    {
      id: 402,
      img: '',
      date: 'Novembre - Décembre 2018',
      duration: '15 h',
			title: "Big Data",
      description: "",
      gallery: [],
      skills: [],
      documents: ['FIFA_Study_Report'],
      md_file: 'ptp_iss_analysis_data_big'
    }
  ]

  private experiences = [
    {
      id: 7,
      img: 'wiifor.png',
      date: 'Février - Juillet 2019',
      duration: '6 mois',
			title: "Stage chez Wiifor (Toulouse - 31)",
      description: "Conception plateforme Software IoT (Embarqué + Cloud)",
      gallery: [],
      skills: [],
      documents: ['convention_stage_wiifor'],
      md_file: 'wiifor_internship'
    },
    {
      id: 6,
      img: 'uo.png',
      date: 'Octobre - Janvier 2018',
      duration: '4 mois',
			title: "Projet d'innovation Ultra Ordinaire (Toulouse - 31)",
      description: "Création d'une application cross-platform pour design de mobilier, et recherche de solutions pour créer une lampe auto-alimentée",
      gallery: ['u1.jpg', 'u2.jpg', 'u3.jpg', 'u4.jpg', 'u12.jpg', 'u11.jpg', 'u5.jpg', 'u6.jpg', 'u7.jpg', 'u8.jpg', 'u9.jpg', 'u10.jpg'],
      skills: ['Angular', 'Ionic', 'HTML', 'CSS', 'Typescript', 'Firebase', 'JSON', 'API REST'],
      documents: ['Ultra_Ordinaire_Presentation', 'Ultra_Ordinaire_Project_Report', 'Autonomous_Lamp_State_Of_The_Art'],
      md_file: 'ultra_ordinaire_project'
    },
    {
      id: 5,
      img: 'banyuls.png',
      date: 'Novembre 2018',
      duration: '2 jours',
			title: "Participation au Hackathon (Banyuls - 66)",
      description: "Développement d'un système logiciel pour créer des visites ludiques de l'aquarium",
      gallery: [],
      skills: ['C', 'C++', 'Arduino'],
      documents: ['hackathon_presentation'],
      md_file: 'hackathon_banyuls'
    },
		{
      id: 4,
      img: 'beenetic.png',
      date: 'Juin - Septembre 2018',
      duration: '3 mois',
			title: "Stage chez Beenetic Systems (Toulouse - 31)",
			description: "Projet IoT ‘iBO HOME’ : Développement Software d'un prduit embarqué destiné au monde de l'habitat intelligent",
      gallery: ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b6.png', 'b7.png', 'b8.png', 'b9.png', 'b10.png'],
      skills: ['Amazon Web Services', 'Swift', 'Xcode', 'Python', 'Javascript/JQuery', 'JSON'],
      documents: ['2018-Taillardat-Elie-BilanStage4A-18', '2018-Taillardat-Elie-PosterStage4A_2018', 'convention_stage_beenetic', 'presentation_concours_alumni'],
      md_file: 'beenetic_internship',
    },
    {
      id: 3,
      img: 'nxp.png',
      date: '2017 - 2018',
      duration: '5 mois',
			title: "Participation à la NXP Cup (Toulouse/Grenoble)",
      description: 'Compétition de voiture autonome sur circuit',
      gallery: [],
      skills: ['C', 'Peripheral prog.'],
      documents: ['rapport_projet_tut_nxp', 'Presentation_NXP', 'etat_de_l_art', 'abstract'],
      md_file: 'nxp_cup'
    },
    {
      id: 2,
      img: 'allette.png',
      date: 'Juillet - Août 2017',
      duration: '10 semaines',
			title: "Stage chez Allette Systems (Sydney - Australie)",
      description: "Design d'une application web et de ses outils pour la gestion de documents",
      gallery: ['a1.jpg', 'a2.jpg', 'a3.jpg', 'a4.jpg', 'a5.jpg', 'a6.jpg', 'a7.jpg', 'a8.jpg', 'a9.jpg', 'a10.jpg'],
      skills: ['Javascript/JQuery', 'HTML', 'CSS', 'Foundation', 'XSLT', 'XPath', 'Java', 'JSON'],
      md_file: 'allette_internship'
    },
    {
      id: 1,
      img: 'thales.png',
      date: 'June 2015',
      duration: '5 weeks',
			title: "Stage ouvrier chez Thales Alenia Space (Toulouse - 31)",
      description: 'Transfert de données vers une base de gestion automatique',
      gallery: [],
      skills: ['Excel'],
      documents: ['Rapport_Stage_THALES', 'Rapport_Stage_INSA_version'],
      md_file: 'thales_internship'
		}
  ];
  
	private educations = [
		{
      img: 'insa.png',
			date: '2014 - 2018',
			title: "Élève ingénieur 5ème année à l'INSA de Toulouse",
			description: 'Génie Électronique et Informatique - Systèmes Embarqués - Spécialité Innovative Smart System (IoT)'
		},
		{
      img: 'ul.png',
			date: '2016',
			title: "Semestre d'échange Erasmus à Limerick (Irlande)",
			description: 'Enrichissement de la langue anglaise et ouverture culturelle'
		},
		{
      img: 'cdg.png',
			date: '2014',
			title: "Baccalauréat Général Série S",
			description: "Sciences de l'Ingénieure (SI) - Spécialité Mathématiques - avec les Félicitations du Jury - 19.31/20"
		}
  ];

  private interests = [
    {
      iid: 1,      
      img: 'play_logo.png',
			date: "2015 - Aujourd'hui",
			title: "Développement de Jeux Android chez WhileOne Studios",
      description: '3 jeux publiés sur le Google PlayStore (+7000 downloads): Lord of Yams • Master Code • O.B.I. • Crunch it! (bêta) - Website : www.whileone-studios.com',
      gallery: [],
      skills: ['Android Studio', 'Java'],
      md_file: 'whileone_studios'
    },
    {
      iid: 2,      
      img: 'logo_forum.png',
			date: '2018',
			title: "Bénévole en développement Web pour Forum by INSA",
      description: 'Responsable de la création et de la maintenance des nouvelles fonctionnalités pour cette édition',
      gallery: [],
      skills: ['Bootstrap', 'HTML', 'CSS', 'Javascript/JQuery'],
      md_file: 'forum_by_insa'
    },
    {
      iid: 3,      
      img: 'logo_amicale.png',
			date: '2017 - 2018',
			title: "Bénévole à l'Amicale INSA Toulouse comme 'Responsable Technique'",
      description: "Création d'une plateforme Web pour le partage d'équipements entre clubs",
      gallery: [],
      skills: ['PHP', 'SQL', 'Bootstrap', 'HTML', 'CSS', 'Javascript/JQuery'],
      md_file: 'club_insa_sharing'
    },
    {
      iid: 4,      
      img: 'soccer_player.png',
			date: "2003/2006 - Aujourd'hui",
			title: "Joueur de Football - Milieu relayeur",
      description: 'Sportif de Haut Niveau assimilé (2015) - Expérience de capitaine',
      gallery: [],
      skills: [],
      md_file: 'football'
		},
  ];
  
  private languages = [
    {
      id: 1,
      name: 'Anglais',
      wr_level: 'C1',
      s_level: 'C1',
      level: '90%',
      degree: 'TOEIC: 910/990',
      color: '#00427e',
      icon: 'united-kingdom',
      examples: "Semestre d'études à Limerick (Irlande) - Stage de 10 semaines à Sydney (Australie) - PTP ISS dispensé en Anglais"
    },
    {
      id: 2,
      name: 'Espagnol',
      wr_level: 'B2',
      s_level: 'B2',
      level: '65%',
      degree: '',
      color: '#CA0907',
      icon: 'spain',
      examples: "Mini séjours en Espagne - 20/20 au Baccalauréat Général Série S"
    }
  ];

  public aptitudes = ["Auto-apprentissage", "Méticuleux", "Persévérant", "Organisé", "Autonome"];
    
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
    },
    {
      color: '#ED855A',
      name: 'XML'
    },
    {
      color: '#6295AC',
      name: 'OM2M'
    },
    {
      color: '#E89643',
      name: 'API REST'
    },
    {
      color: '#96C237',
      name: 'SOA'
    },
    {
      color: '#8F0000',
      name: 'NodeRED'
    },
    {
      color: '#27646C',
      name: 'Proxmox'
    },
    {
      color: '#007ACC',
      name: 'Typescript'
    },
    {
      color:'#EE7E0C',
      name: 'Firebase'
    },
    {
      color:'#006DB6',
      name: 'The Things Network'
    },
    
  ];

}