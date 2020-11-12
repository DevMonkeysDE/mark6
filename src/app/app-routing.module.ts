import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteUserProfileComponent} from "./sites/site-user-profile/site-user-profile.component";
import {SiteMessengerComponent} from "./sites/site-messenger/site-messenger.component";
import {SiteImageComponent} from "./sites/site-image/site-image.component";


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'profile'},
    {path: 'profile', component: SiteUserProfileComponent},
    {path: 'messenger', component: SiteMessengerComponent},
    {path: 'image', component: SiteImageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
