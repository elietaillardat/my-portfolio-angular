import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';

// Services
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { ProfileService } from './services/profile.service';

// Components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { HeaderComponent } from './header/header.component';
import { SubNavComponent } from './header/sub-nav/sub-nav.component';

import { HomeViewComponent } from './home-view/home-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ExperienceComponent } from './profile-view/experience/experience.component';
import { EducationComponent } from './profile-view/education/education.component';
import { SkillsComponent } from './profile-view/skills/skills.component';
import { LanguageComponent } from './profile-view/skills/language/language.component';
import { SoftwareComponent } from './profile-view/skills/software/software.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { GalleryItemComponent } from './single-project/gallery-item/gallery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AppareilComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    HeaderComponent,
    ProfileViewComponent,
    HomeViewComponent,
    EducationComponent,
    ExperienceComponent,
    SubNavComponent,
    SkillsComponent,
    LanguageComponent,
    SoftwareComponent,
    SingleProjectComponent,
    GalleryItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ParticlesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AppareilService,
    AuthService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
