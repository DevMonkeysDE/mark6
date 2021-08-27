import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-comment-actions',
    templateUrl: './comment-actions.component.html',
    styleUrls: ['./comment-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6CommentActionsComponent {

    private hostClass = 'mark6-comment-actions';
    @HostBinding('class') classes = this.hostClass;

}
