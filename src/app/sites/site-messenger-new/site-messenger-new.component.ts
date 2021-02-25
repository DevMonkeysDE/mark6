import {Component, OnInit} from '@angular/core';
import {MessengerDummyDataService} from './messenger-dummy-data.service';

@Component({
    selector: 'app-site-messenger-new',
    templateUrl: './site-messenger-new.component.html',
    styleUrls: ['./site-messenger-new.component.scss']
})
export class SiteMessengerNewComponent implements OnInit {

    public messageBlock = [];
    public messengerMode: 'fullscreen' | 'boxed' = 'fullscreen';

    constructor(public messengerDummyDataService: MessengerDummyDataService) {
        this.messageBlock = this.messengerDummyDataService.getDummyData();
    }

    setMessengerMode(mode) {
        this.messengerMode = mode;
    }

    ngOnInit(): void {
    }


}
