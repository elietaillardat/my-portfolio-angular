import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  img: string;
  title: string = 'Expérience';
  description: string = 'Description';
  content_1: string = 'Content';
  content_2: string = 'Content';
  content_3: string = 'Content';
  gallery: string[];
  skills: string[];
  tags;

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.img = this.profileService.getExperienceById(+id).img;
    this.title = this.profileService.getExperienceById(+id).title;
    this.description = this.profileService.getExperienceById(+id).description;
    this.content_1 = this.profileService.getExperienceById(+id).content_1;
    this.content_2 = this.profileService.getExperienceById(+id).content_2;
    this.content_3 = this.profileService.getExperienceById(+id).content_3;
    this.gallery = this.profileService.getExperienceById(+id).gallery;
    this.skills = this.profileService.getExperienceById(+id).skills;
    this.tags = this.profileService.dev_tags.concat(this.profileService.other_tags);
    console.log(this.tags.findIndex(s => s.name === 'AWS'));
  }

}
