import {Component} from '@angular/core';
import {UiService} from './services/ui.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public uiService: UiService) {
    }

}
