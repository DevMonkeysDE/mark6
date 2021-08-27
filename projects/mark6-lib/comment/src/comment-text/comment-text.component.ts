import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-comment-text',
    templateUrl: './comment-text.component.html',
    styleUrls: ['./comment-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6CommentTextComponent {

    private hostClass = 'mark6-comment-text';
    @HostBinding('class') classes = this.hostClass;

}
