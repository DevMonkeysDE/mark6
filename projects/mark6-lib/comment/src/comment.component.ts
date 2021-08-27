import {ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation} from '@angular/core';

export interface CreatedAt {
    seconds: number;
    nanoseconds: number;
}

export interface Reply {
    user_name: string;
    created_at: CreatedAt;
    message: string;
}

export interface CommentInterface {
    user_name: string;
    created_at: CreatedAt;
    message: string;
    replies: Reply[];
}

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

    @Input() public comment: CommentInterface;

    constructor() {
    }

}
