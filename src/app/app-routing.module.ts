import { AnalysisDataComponent } from './portfolio-view/ptp-iss/analysis-data/analysis-data.component';
import { CommunicationComponent } from './portfolio-view/ptp-iss/communication/communication.component';
import { SmartDevicesComponent } from './portfolio-view/ptp-iss/smart-devices/smart-devices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { PtpIssComponent } from './portfolio-view/ptp-iss/ptp-iss.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { MdwareServicesComponent } from './portfolio-view/ptp-iss/mdware-services/mdware-services.component';
import { InnovativeProjectComponent } from './portfolio-view/ptp-iss/innovative-project/innovative-project.component';
import { InnovationHumanityComponent } from './portfolio-view/ptp-iss/innovation-humanity/innovation-humanity.component';
import { RestProjectComponent } from './rest-project/rest-project.component';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'profile/interests/:iid', component: SingleProjectComponent },
  { path: 'profile/experiences/:id', component: SingleProjectComponent },
  { path: 'profile/i/:iid', redirectTo: 'profile/interests/:iid', pathMatch: 'full' },
  { path: 'profile/:id', redirectTo: 'profile/experiences/:id', pathMatch: 'full' },

  { path: 'portfolio', redirectTo: 'portfolio/ptp-iss', pathMatch: 'full' },
  { path: 'portfolio/ptp-iss', component: PtpIssComponent },
  { path: 'portfolio/ptp-iss/smart-devices', component: SmartDevicesComponent },
  { path: 'portfolio/ptp-iss/communication', component: CommunicationComponent },
  { path: 'portfolio/ptp-iss/mdware-services', component: MdwareServicesComponent },
  { path: 'portfolio/ptp-iss/analysis-data', component: AnalysisDataComponent },
  { path: 'portfolio/ptp-iss/innovative-project', component: InnovativeProjectComponent },
  { path: 'portfolio/ptp-iss/innovation-humanity', component: InnovationHumanityComponent },

  { path: 'portfolio/ptp-iss/innovation-humanity', component: InnovationHumanityComponent },
  { path: 'portfolio/ptp-iss/mdware-services/rest-project', component: RestProjectComponent },

  { path: 'portfolio/ptp-iss/smart-devices/:id', component: SingleProjectComponent },
  { path: 'portfolio/ptp-iss/communication/:id', component: SingleProjectComponent },
  { path: 'portfolio/ptp-iss/mdware-services/:id', component: SingleProjectComponent },
  { path: 'portfolio/ptp-iss/analysis-data/:id', component: SingleProjectComponent },

  { path: 'not-found', component: FourOhFourComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
