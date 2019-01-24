import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  
  backLink: string;
  img: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  md_file: string;
  gallery: string[];
  documents: string[];
  tags;
  indexes: number[];

  constructor(private profileService: ProfileService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    const path = this.route.snapshot.routeConfig.path;
    if (path.includes("profile"))
      this.backLink = "/profile"
    else if (path.includes("ptp-iss/smart-devices"))
      this.backLink = "/portfolio/ptp-iss/smart-devices";
    else if (path.includes("ptp-iss/communication"))
      this.backLink = "/portfolio/ptp-iss/communication";
    else if (path.includes("ptp-iss/mdware-services"))
      this.backLink = "/portfolio/ptp-iss/mdware-services";
    else if (path.includes("ptp-iss/analysis-data"))
      this.backLink = "/portfolio/ptp-iss/analysis-data";
    else if (path.includes("ptp-iss/innovation-humanity"))
      this.backLink = "/portfolio/ptp-iss/innovation-humanity";
    else if (path.includes("ptp-iss/innovative-project"))
      this.backLink = "/portfolio/ptp-iss/innovative-project";

    let id: number = this.route.snapshot.params['id'];
    let skills: any;
    if (typeof id !== 'undefined') {
      if (id < 100) {
        this.img = this.profileService.getExperienceById(+id).img;
        this.title = this.profileService.getExperienceById(+id).title;
        this.description = this.profileService.getExperienceById(+id).description;
        this.date = this.profileService.getExperienceById(+id).date;
        this.duration = this.profileService.getExperienceById(+id).duration;
        this.md_file = this.profileService.getExperienceById(+id).md_file;
        this.documents = this.profileService.getExperienceById(+id).documents;
        this.gallery = this.profileService.getExperienceById(+id).gallery;
        skills = this.profileService.getExperienceById(+id).skills;
      } else {
        this.img = this.profileService.getPtpISSById(+id).img;
        this.title = this.profileService.getPtpISSById(+id).title;
        this.description = this.profileService.getPtpISSById(+id).description;
        this.date = this.profileService.getPtpISSById(+id).date;
        this.duration = this.profileService.getPtpISSById(+id).duration;
        this.md_file = this.profileService.getPtpISSById(+id).md_file;
        this.documents = this.profileService.getPtpISSById(+id).documents;
        this.gallery = this.profileService.getPtpISSById(+id).gallery;
        skills = this.profileService.getPtpISSById(+id).skills;
      }
      
    } else {
      id = this.route.snapshot.params['iid'];
      this.img = this.profileService.getInterestById(+id).img;
      this.title = this.profileService.getInterestById(+id).title;
      this.date = this.profileService.getInterestById(+id).date;
      this.description = this.profileService.getInterestById(+id).description;
      this.md_file = this.profileService.getInterestById(+id).md_file;
      this.gallery = this.profileService.getInterestById(+id).gallery;
      skills = this.profileService.getInterestById(+id).skills;
    }
    
    this.tags = (this.profileService.dev_tags.concat(this.profileService.other_tags)).concat(this.profileService.softwares);
    const tags_tmp = this.tags;
    var indexes_tmp = [];
    skills.forEach(function(skill) {
      var i = tags_tmp.findIndex(s => s.name === skill);
      indexes_tmp.push(i);
    });
    this.indexes = indexes_tmp;
  }

}
