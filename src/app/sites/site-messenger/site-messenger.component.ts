import {Component, OnInit} from '@angular/core';
import {MessengerDummyDataService} from "./messenger-dummy-data.service";

@Component({
    selector: 'app-site-messenger',
    templateUrl: './site-messenger.component.html',
    styleUrls: ['./site-messenger.component.scss']
})
export class SiteMessengerComponent implements OnInit {

    public messages = [];
    public messengerMode: 'fullscreen' | 'boxed' = 'fullscreen';

    constructor(public messengerDummyDataService: MessengerDummyDataService) {
    }

    setMessengerMode(mode) {
        this.messengerMode = mode;
    }

    ngOnInit(): void {
        this.messages = this.messengerDummyDataService.getDummyData();
        console.log(this.messages);
    }

}
