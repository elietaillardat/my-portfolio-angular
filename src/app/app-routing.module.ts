import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SingleProjectComponent } from './single-project/single-project.component';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'profile/experiences/:id', component: SingleProjectComponent },
  { path: 'profile/:id', redirectTo: 'profile/experiences/:id', pathMatch: 'full' },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
