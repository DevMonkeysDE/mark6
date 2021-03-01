import {Component, OnInit} from '@angular/core';
import {MessengerDummyDataService} from './messenger-dummy-data.service';
import {MatListOption} from '@angular/material/list';

@Component({
    selector: 'app-site-messenger-new',
    templateUrl: './site-messenger-new.component.html',
    styleUrls: ['./site-messenger-new.component.scss']
})
export class SiteMessengerNewComponent implements OnInit {

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

    ngOnInit(): void {
    }


}
