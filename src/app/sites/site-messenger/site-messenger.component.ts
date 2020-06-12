import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-site-messenger',
    templateUrl: './site-messenger.component.html',
    styleUrls: ['./site-messenger.component.scss']
})
export class SiteMessengerComponent implements OnInit {

    public messengerMode: 'fullscreen' | 'boxed' = 'fullscreen';

    constructor() {
    }

    setMessengerMode(mode) {
        this.messengerMode = mode;
    }

    ngOnInit(): void {
    }

}
