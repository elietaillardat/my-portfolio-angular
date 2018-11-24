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

  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.img = this.profileService.getExperienceById(+id).img;
    this.title = this.profileService.getExperienceById(+id).title;
    this.description = this.profileService.getExperienceById(+id).description;
  }

}
