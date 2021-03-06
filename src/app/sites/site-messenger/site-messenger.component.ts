import {Component, Inject, ViewChild} from '@angular/core';
import {MessengerDummyDataService} from './messenger-dummy-data.service';
import {MatListOption} from '@angular/material/list';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

import {MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import {UiService} from '../../services/ui.service';
import {take} from 'rxjs/operators';
import {MessengerMessageBlockInterface, MessengerMessageInterface, MessengerReplyInterface} from 'src/app/interfaces';
import {Mark6TextareaAutosizeDirective} from '@devmonkeys/mark6/directives';


@Component({
    selector: 'app-site-messenger',
    templateUrl: './site-messenger.component.html',
    styleUrls: ['./site-messenger.component.scss']
})
export class SiteMessengerComponent {

    public currentUserId = 1;
    public messageBlock: MessengerMessageBlockInterface[];
    public textareaValue = '';
    public reply: MessengerReplyInterface;

    // Demo Editor
    public messengerBoxed = false;
    public avatarMe = true;
    public avatarOthers = true;
    public demoEditorState = false;
    public defaultElementSize = 1;
    public defaultFontSize = 16;
    public defaultAvatarSize = 36;
    public theme = [
        {
            scheme: 'light',
            image: 'light-watercolor'
        },
        {
            scheme: 'dark',
            image: 'dark-space'
        }
    ];

    @ViewChild(Mark6TextareaAutosizeDirective) Mark6MessengerAutoSize: Mark6TextareaAutosizeDirective;

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

        this.updateTextArea(); // TODO - Find a smarter way...
    }

    updateTextArea() {
        setTimeout(() => {
            this.Mark6MessengerAutoSize.resizeToFitContent();
        }, 50);
    }

    toggleMessageOptions(msg: MessengerMessageInterface) {
        this.bottomSheet.open(MessengerMessageOptionsComponent, {data: msg}).afterDismissed()
            .pipe(take(1))
            .subscribe((result: MessengerMessageInterface) => {
                if (result) {
                    this.reply = {
                        text: result.text,
                        user_name: result.user_name
                    };
                }
            });
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
    constructor(
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: MessengerMessageInterface,
        private bottomSheetRef: MatBottomSheetRef<MessengerMessageOptionsComponent>,
    ) {

    }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss(this.data);
        event.preventDefault();
    }

}
