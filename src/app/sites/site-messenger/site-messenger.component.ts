import {Component} from '@angular/core';
import {MessengerDummyDataService} from './messenger-dummy-data.service';
import {MatListOption} from '@angular/material/list';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
    selector: 'app-site-messenger',
    templateUrl: './site-messenger.component.html',
    styleUrls: ['./site-messenger.component.scss']
})
export class SiteMessengerComponent {

    public currentUserId = 1;
    public messageBlock = [];
    public textareaValue = '';

    // Demo Editor
    public messengerBoxed = false;
    public avatarMe = true;
    public avatarOthers = true;
    public demoEditorState = false;
    public defaultElementSize = 1;
    public defaultFontSize = 16;
    public defaultAvatarSize = 36;

    constructor(public messengerDummyDataService: MessengerDummyDataService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        this.messageBlock = this.messengerDummyDataService.getDummyData();
        // Material Icons
        iconRegistry.addSvgIcon('attach_file', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/attach_file.svg'));
        iconRegistry.addSvgIcon('camera', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/camera.svg'));
        iconRegistry.addSvgIcon('emoji_emotions', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/emoji_emotions.svg'));
        // Feather Icons
        iconRegistry.addSvgIcon('send', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/feather/send.svg'));
    }

    toggleMessengerMode(option: MatListOption) {
        this.messengerBoxed = option.selected;
    }

    toggleAvatarMe(option: MatListOption) {
        this.avatarMe = option.selected;
    }

    toggleAvatarOthers(option: MatListOption) {
        this.avatarOthers = option.selected;
    }

}
