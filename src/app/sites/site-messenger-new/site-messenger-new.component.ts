import {Component, OnInit} from '@angular/core';
import {MessengerDummyDataService} from './messenger-dummy-data.service';
import * as txtgen from 'txtgen';

@Component({
    selector: 'app-site-messenger-new',
    templateUrl: './site-messenger-new.component.html',
    styleUrls: ['./site-messenger-new.component.scss']
})
export class SiteMessengerNewComponent implements OnInit {

    public messageGroup = [
        {
            type: 'message',
            direction: 'me',
            user_name: 'Sven',
            user_avatar: {
                preview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAA6lBMVEXw8c/r0oDt5bDu46zmzoAmKTYjJjIeIi3q68rm58jqzbXkxa7p36vAkoDJlHywo3qFf3m1gG5PVGiBYFtBRVs3OkU4Lz9fQzwpLTnh4cLW17y/v6zYwafXvKLOxp7Iqpe/q5WpqJW+t5THopFwd4q2l4ibmoeglYdjbIa1mIWhmoTNvIKypoHfyYBdZoDbxXzJtny2qHvPuXqlhXpgZniffXFzcGVrZ2VtamRESWFnZFt6W1tkYVl0XFdgUVfdl1VJRVLSiU9dSU88P0x9U0UuLUXKeUS2b0JHNj8xNDxCNDVnRjQvJikXGydMl/xaAAAAhklEQVQI1y3HVRbDIBRF0VdIIO5Wd3d3d5v/dApZ3T/3Hkgw7ZY1ENjy6FR6jYkpxDFylp7jzfssECpdg+C0PuQQAoD0wx2Xp7sUcLJVVZR8XYaYlFHVbBL+CrrelPjBWCtubdutaRiDMJz5oWFcniuzCxtfFMPj/k3JeQHkS6LX/fahVIx+h3sNFhxamOcAAAAASUVORK5CYII=',
                src: 'assets/demo/avatar-male.jpg'
            },
            messages: [
                {
                    created_at: 1613788372,
                    message: 'This is a message text',
                },
                {
                    created_at: 1613788379,
                    message: 'This is my second message text',
                },
                {
                    created_at: 1613788379,
                    message: 'This is my second message text',
                }
            ]
        },
        {
            type: 'date',
            messages: [
                {
                    message: 1613788372,
                }
            ]
        },
        {
            type: 'info',
            messages: [
                {
                    message: 'You have 1 Free Message Left',
                }
            ]
        },
    ];
    public messengerMode: 'fullscreen' | 'boxed' = 'fullscreen';

    constructor(public messengerDummyDataService: MessengerDummyDataService) {
    }

    setMessengerMode(mode) {
        this.messengerMode = mode;
    }

    ngOnInit(): void {
        // this.messages = this.messengerDummyDataService.getDummyData();
        console.log(this.messages);
    }

}
