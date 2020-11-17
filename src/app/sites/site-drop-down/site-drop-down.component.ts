import {Component} from '@angular/core';
import {Mark6DropDownService} from "../../../../projects/mark6-lib/drop-down/src/drop-down.service";


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
            title: 'Entry 1'
        },
        {
            title: 'Entry 2'
        },
        {
            title: 'Entry 3'
        }
    ];

    close() {
        this.dropDownService.close(null);
    }

}
