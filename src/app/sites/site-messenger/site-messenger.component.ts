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
    public messengerBoxed = false;
    public textareaValue = '';

    // Demo Editor
    public demoEditorState = false;
    public defaultElementSize = 1;
    public defaultFontSize = 16;
    public defaultAvatarSize = 36;

    constructor(public messengerDummyDataService: MessengerDummyDataService) {
        this.messageBlock = this.messengerDummyDataService.getDummyData();
    }

    selectionChange(option: MatListOption) {
        this.messengerBoxed = option.selected;
    }

}
