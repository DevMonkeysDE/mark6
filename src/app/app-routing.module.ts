import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteUserProfileComponent} from './sites/site-user-profile/site-user-profile.component';
import {SiteImageComponent} from './sites/site-image/site-image.component';
import {SiteMessengerComponent} from './sites/site-messenger/site-messenger.component';
import {SitePhoneCallComponent} from './sites/site-phone-call/site-phone-call.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'messenger'},
    {path: 'profile', component: SiteUserProfileComponent},
    {path: 'messenger', component: SiteMessengerComponent},
    {path: 'image', component: SiteImageComponent},
    {path: 'phone-call', component: SitePhoneCallComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
