import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit, OnDestroy {

  experiences: any[];
  experienceSubscription: Subscription;

  educations: any[];
  educationSubscription: Subscription;

  skills: any[];
  skillSubscription: Subscription;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.experienceSubscription = this.profileService.experienceSubject.subscribe(
      (experiences: any[]) => {
        this.experiences = experiences;
      }
    );
    this.profileService.emitExperienceSubject();

    this.educationSubscription = this.profileService.educationSubject.subscribe(
      (educations: any[]) => {
        this.educations = educations;
      }
    );
    this.profileService.emitEducationSubject();

    this.skillSubscription = this.profileService.skillSubject.subscribe(
      (skills: any[]) => {
        this.skills = skills;
      }
    );
    this.profileService.emitSkillSubject();
  }

  ngOnDestroy() {
    this.experienceSubscription.unsubscribe();
    this.educationSubscription.unsubscribe();
    this.skillSubscription.unsubscribe();
  }

}
