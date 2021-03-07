import {Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {MessengerReplyPreviewInterface} from '../messenger.interface';

@Component({
    selector: 'mark6-messenger-reply-preview',
    templateUrl: './messenger-reply-preview.component.html',
    styleUrls: ['./messenger-reply-preview.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Mark6MessengerReplyPreviewComponent {

    private hostClass = 'mark6-messenger-reply-preview';
    @HostBinding('class') classes = this.hostClass;

    @Input() public replyPreview: MessengerReplyPreviewInterface;

}
