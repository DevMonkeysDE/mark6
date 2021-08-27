import {ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'mark6-comment-name',
    templateUrl: './comment-name.component.html',
    styleUrls: ['./comment-name.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6CommentNameComponent {

    private hostClass = 'mark6-comment-name';
    @HostBinding('class') classes = this.hostClass;

}
