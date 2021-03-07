import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UiService {

    public showToolbar = true;
    public messengerBackground = {
        theme: 'light',
        image: null
    };

    constructor() {
    }

}
