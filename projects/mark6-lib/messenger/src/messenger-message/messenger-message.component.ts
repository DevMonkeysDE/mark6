import { Component, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';
import { Mark6MessengerAutoExpandService } from '../messenger-auto-expand.service';

@Component({
    selector: 'mark6-messenger-message',
    templateUrl: './messenger-message.component.html',
    styleUrls: ['./messenger-message.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerMessageComponent {

    private hostClass = 'mark6-messenger-message';
    @HostBinding('class') classes = this.hostClass;
    @HostListener('click', ['$event'])
    onClick(e) {
        this.service.animate.next();
        console.log('hostlistenent');
    }
    constructor(private service: Mark6MessengerAutoExpandService) { }
}
