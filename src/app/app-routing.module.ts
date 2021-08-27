import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteUserProfileComponent} from './sites/site-user-profile/site-user-profile.component';
import {SiteImageComponent} from './sites/site-image/site-image.component';
import {SiteMessengerComponent} from './sites/site-messenger/site-messenger.component';
import {SitePhoneComponent} from './sites/site-phone/site-phone.component';
import {SiteCommentComponent} from './sites/site-comment/site-comment.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'messenger'},
    {path: 'profile', component: SiteUserProfileComponent},
    {path: 'messenger', component: SiteMessengerComponent},
    {path: 'image', component: SiteImageComponent},
    {path: 'phone', component: SitePhoneComponent},
    {path: 'comment', component: SiteCommentComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
