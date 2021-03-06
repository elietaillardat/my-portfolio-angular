import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ParticlesModule } from 'angular-particle';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Services
import { ProfileService } from './services/profile.service';
import { RestService } from './rest-project/rest.service';

// Components
import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { HeaderComponent } from './header/header.component';
import { SubNavComponent } from './header/sub-nav/sub-nav.component';

import { HomeViewComponent } from './home-view/home-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ExperienceComponent } from './profile-view/experience/experience.component';
import { EducationComponent } from './profile-view/education/education.component';
import { LanguageComponent } from './profile-view/language/language.component';
import { SoftwareComponent } from './profile-view/software/software.component';
import { SkillTagComponent } from './profile-view/skill-tag/skill-tag.component';

import { SingleProjectComponent } from './single-project/single-project.component';
import { GalleryItemComponent } from './single-project/gallery-item/gallery-item.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { PtpIssComponent } from './portfolio-view/ptp-iss/ptp-iss.component';
import { SubNavIssComponent } from './header/sub-nav-iss/sub-nav-iss.component';
import { SmartDevicesComponent } from './portfolio-view/ptp-iss/smart-devices/smart-devices.component';
import { CommunicationComponent } from './portfolio-view/ptp-iss/communication/communication.component';
import { MdwareServicesComponent } from './portfolio-view/ptp-iss/mdware-services/mdware-services.component';
import { AnalysisDataComponent } from './portfolio-view/ptp-iss/analysis-data/analysis-data.component';
import { InnovativeProjectComponent } from './portfolio-view/ptp-iss/innovative-project/innovative-project.component';
import { InnovationHumanityComponent } from './portfolio-view/ptp-iss/innovation-humanity/innovation-humanity.component';
import { InterestComponent } from './profile-view/interest/interest.component';
import { RestProjectComponent } from './rest-project/rest-project.component';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();
 
  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };
 
  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    HeaderComponent,
    ProfileViewComponent,
    HomeViewComponent,
    EducationComponent,
    ExperienceComponent,
    SubNavComponent,
    LanguageComponent,
    SoftwareComponent,
    SingleProjectComponent,
    GalleryItemComponent,
    SkillTagComponent,
    PortfolioViewComponent,
    PtpIssComponent,
    SubNavIssComponent,
    SmartDevicesComponent,
    CommunicationComponent,
    MdwareServicesComponent,
    AnalysisDataComponent,
    InnovativeProjectComponent,
    InnovationHumanityComponent,
    InterestComponent,
    RestProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ 
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),
    AngularFontAwesomeModule,
    DataTablesModule,
    ParticlesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProfileService,
    RestService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
