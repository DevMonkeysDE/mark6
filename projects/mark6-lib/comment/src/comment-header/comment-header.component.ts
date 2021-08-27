import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-comment-header',
    templateUrl: './comment-header.component.html',
    styleUrls: ['./comment-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6CommentHeaderComponent {

    private hostClass = 'mark6-comment-header';
    @HostBinding('class') classes = this.hostClass;

}
