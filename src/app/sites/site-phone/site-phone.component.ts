import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-site-phone',
    templateUrl: './site-phone.component.html',
    styleUrls: ['./site-phone.component.scss']
})
export class SitePhoneComponent {

    public dpi = 1;
    public currentMode = 'incoming-call'

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        iconRegistry.addSvgIcon('call', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/call.svg'));
    }

}
