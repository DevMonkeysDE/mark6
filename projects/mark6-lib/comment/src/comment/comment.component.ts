import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6CommentComponent {

    private hostClass = 'mark6-comment';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

}
