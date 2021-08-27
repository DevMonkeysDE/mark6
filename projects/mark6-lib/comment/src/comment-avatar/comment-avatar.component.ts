import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-comment-avatar',
    templateUrl: './comment-avatar.component.html',
    styleUrls: ['./comment-avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6CommentAvatarComponent {

    private hostClass = 'mark6-comment-avatar';
    @HostBinding('class') classes = this.hostClass;

}
