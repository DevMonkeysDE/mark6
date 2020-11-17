import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mark6-messenger-content',
    templateUrl: './messenger-content.component.html',
    styleUrls: ['./messenger-content.component.scss']
})
export class Mark6MessengerContentComponent implements OnInit {

    // TODO @Murhaf: Please make it possible to enable / disable VirtualScroll with this variable.
    @Input() public virtualScroll = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
