import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-comment-date',
    templateUrl: './comment-date.component.html',
    styleUrls: ['./comment-date.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6CommentDateComponent {

    private hostClass = 'mark6-comment-date';
    @HostBinding('class') classes = this.hostClass;

}
