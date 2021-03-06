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

  interests: any[];
  interestSubscription: Subscription;

  languages: any[];
  languageSubscription: Subscription;

  softwares: any[];
  softwareSubscription: Subscription;

  aptitudes: string[];
  devTags: any[];
  devTagSubscription: Subscription;
  otherTags: any[];
  otherTagSubscription: Subscription;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {    
    this.experienceSubscription = this.profileService.experienceSubject.subscribe((experiences: any[]) => {
      this.experiences = experiences;
    });
    this.educationSubscription = this.profileService.educationSubject.subscribe((educations: any[]) => {
      this.educations = educations;
    });
    this.interestSubscription = this.profileService.interestSubject.subscribe((interests: any[]) => {
      this.interests = interests;
    });
    this.languageSubscription = this.profileService.languageSubject.subscribe((languages: any[]) => {
      this.languages = languages;
    });
    this.softwareSubscription = this.profileService.softwareSubject.subscribe((softwares: any[]) => {
      this.softwares = softwares;
    });
    this.devTagSubscription = this.profileService.devTagSubject.subscribe((devTags: any[]) => {
      this.devTags = devTags;
    });
    this.otherTagSubscription = this.profileService.otherTagSubject.subscribe((otherTags: any[]) => {
      this.otherTags = otherTags;
    });
    this.aptitudes = this.profileService.aptitudes;
    this.profileService.emitExperienceSubject();
    this.profileService.emitEducationSubject();
    this.profileService.emitInterestSubject();
    this.profileService.emitLanguageSubject();
    this.profileService.emitSoftwareSubject();
    this.profileService.emitDevTagSubject();
    this.profileService.emitOtherTagSubject();
  }

  ngOnDestroy() {
    this.experienceSubscription.unsubscribe();
    this.educationSubscription.unsubscribe();
    this.interestSubscription.unsubscribe();
    this.languageSubscription.unsubscribe();
    this.softwareSubscription.unsubscribe();
    this.devTagSubscription.unsubscribe();
    this.otherTagSubscription.unsubscribe();
  }

}