import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  img: string;
  title: string = 'Expérience';
  description: string = 'Description';
  md_file: string = 'Content';
  gallery: string[];
  tags;
  indexes: number[];

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    let skills: any;
    console.log(id);
    if (typeof id !== 'undefined') {
      this.img = this.profileService.getExperienceById(+id).img;
      this.title = this.profileService.getExperienceById(+id).title;
      this.description = this.profileService.getExperienceById(+id).description;
      this.md_file = this.profileService.getExperienceById(+id).md_file;
      this.gallery = this.profileService.getExperienceById(+id).gallery;
      skills = this.profileService.getExperienceById(+id).skills;
    } else {
      id = this.route.snapshot.params['iid'];
      this.img = this.profileService.getInterestById(+id).img;
      this.title = this.profileService.getInterestById(+id).title;
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
