import {Component} from '@angular/core';
import {MessengerDummyDataService} from './messenger-dummy-data.service';
import {MatListOption} from '@angular/material/list';

@Component({
    selector: 'app-site-messenger',
    templateUrl: './site-messenger.component.html',
    styleUrls: ['./site-messenger.component.scss']
})
export class SiteMessengerComponent {

    public currentUserId = 1;
    public messageBlock = [];
    public textareaValue = '';

    // Demo Editor
    public messengerBoxed = false;
    public avatarMe = true;
    public avatarOthers = true;
    public demoEditorState = false;
    public defaultElementSize = 1;
    public defaultFontSize = 16;
    public defaultAvatarSize = 36;

    constructor(public messengerDummyDataService: MessengerDummyDataService) {
        this.messageBlock = this.messengerDummyDataService.getDummyData();
    }

    toggleMessengerMode(option: MatListOption) {
        this.messengerBoxed = option.selected;
    }

    toggleAvatarMe(option: MatListOption) {
        this.avatarMe = option.selected;
    }

    toggleAvatarOthers(option: MatListOption) {
        this.avatarOthers = option.selected;
    }

}
