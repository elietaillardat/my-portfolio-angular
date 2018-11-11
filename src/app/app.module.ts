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

// Components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { HeaderComponent } from './header/header.component';

import { ProfileViewComponent } from './profile-view/profile-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { EducationComponent } from './profile-view/education/education.component';
import { ProfileService } from './services/profile.service';
import { ExperienceComponent } from './profile-view/experience/experience.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

@NgModule({
  declarations: [
    AppComponent,
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
