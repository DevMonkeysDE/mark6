import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Mark6CommentComponent} from './comment/comment.component';
import {Mark6CommentActionsComponent} from './comment-actions/comment-actions.component';
import {Mark6CommentAvatarComponent} from './comment-avatar/comment-avatar.component';
import {Mark6CommentDateComponent} from './comment-date/comment-date.component';
import {Mark6CommentHeaderComponent} from './comment-header/comment-header.component';
import {Mark6CommentNameComponent} from './comment-name/comment-name.component';
import {Mark6CommentTextComponent} from './comment-text/comment-text.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        Mark6CommentComponent,
        Mark6CommentActionsComponent,
        Mark6CommentAvatarComponent,
        Mark6CommentDateComponent,
        Mark6CommentHeaderComponent,
        Mark6CommentNameComponent,
        Mark6CommentTextComponent
    ],
    exports: [
        Mark6CommentComponent,
        Mark6CommentActionsComponent,
        Mark6CommentAvatarComponent,
        Mark6CommentDateComponent,
        Mark6CommentHeaderComponent,
        Mark6CommentNameComponent,
        Mark6CommentTextComponent
    ]
})
export class Mark6CommentModule {
}
