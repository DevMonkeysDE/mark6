import {Component, ViewChild} from '@angular/core';
import {MessengerDummyDataService} from './messenger-dummy-data.service';
import {MatListOption} from '@angular/material/list';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {Mark6MessengerAutoSizeDirective} from '../../../../projects/mark6-lib/messenger/src/messenger-textarea-auto-size.directive';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {UiService} from '../../services/ui.service';

@Component({
    selector: 'app-site-messenger',
    templateUrl: './site-messenger.component.html',
    styleUrls: ['./site-messenger.component.scss']
})
export class SiteMessengerComponent {

    public currentUserId = 1;
    public messageBlock = [];
    public textareaValue = '';
    public replyPreview = {
        user_name: 'ShyGuy',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        color: '#4151d0'
    };

    // Demo Editor
    public messengerBoxed = false;
    public avatarMe = true;
    public avatarOthers = true;
    public demoEditorState = false;
    public defaultElementSize = 1;
    public defaultFontSize = 16;
    public defaultAvatarSize = 36;
    public backgroundImages = [
        {
            theme: 'light',
            image: 'light-watercolor'
        },
        {
            theme: 'dark',
            image: 'dark-space'
        }
    ];

    @ViewChild(Mark6MessengerAutoSizeDirective) Mark6MessengerAutoSize: Mark6MessengerAutoSizeDirective;

    constructor(
        public messengerDummyDataService: MessengerDummyDataService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private bottomSheet: MatBottomSheet,
        public uiService: UiService
    ) {
        this.messageBlock = this.messengerDummyDataService.getDummyData();
        // Material Icons
        iconRegistry.addSvgIcon('attach_file', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/attach_file.svg'));
        iconRegistry.addSvgIcon('camera', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/camera.svg'));
        iconRegistry.addSvgIcon('camera_alt', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/camera_alt.svg'));
        iconRegistry.addSvgIcon('check_circle_outline', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/check_circle_outline.svg'));
        iconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/close.svg'));
        iconRegistry.addSvgIcon('emoji_emotions', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/emoji_emotions.svg'));
        // Feather Icons
        iconRegistry.addSvgIcon('send', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/feather/send.svg'));
    }

    updateTextArea() {
        setTimeout(() => {
            this.Mark6MessengerAutoSize.resize();
        }, 50);
    }

    toggleMessageOptions() {
        this.bottomSheet.open(MessengerMessageOptionsComponent);
    }

    toggleToolbar(option: MatListOption) {
        this.uiService.showToolbar = option.selected;
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


@Component({
    selector: 'app-messenger-message-options',
    templateUrl: 'messenger-message-options.html',
})
export class MessengerMessageOptionsComponent {

    constructor(private bottomSheetRef: MatBottomSheetRef<MessengerMessageOptionsComponent>) {
    }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }

}
