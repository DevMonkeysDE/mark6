import { Component } from '@angular/core';
import { Mark6DropDownService } from 'projects/mark6-lib/src/public_api';


@Component({
    selector: 'app-site-drop-down',
    templateUrl: './site-drop-down.component.html',
    styleUrls: ['./site-drop-down.component.scss'],
    providers: [Mark6DropDownService]
})


export class SiteDropDownComponent {
    constructor(private dropDownService: Mark6DropDownService) {
    }

    public demoEntries = [
        {
            title: 'Entrie 1'
        },
        {
            title: 'Entrie 2'
        },
        {
            title: 'Entrie 3'
        }
    ];
    close() {
        this.dropDownService.close(null);
    }
}
