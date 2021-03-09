import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UiService {

    public showToolbar = true;
    public theme = {
        scheme: 'light',
        image: null
    };

    constructor() {
    }

}
