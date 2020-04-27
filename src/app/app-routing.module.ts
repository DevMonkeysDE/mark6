import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiteUserProfileComponent} from "./sites/site-user-profile/site-user-profile.component";


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'profile' },
    { path: 'profile', component: SiteUserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
