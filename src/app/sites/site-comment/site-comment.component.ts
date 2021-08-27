import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {CommentInterface} from '@devmonkeys/mark6/comment';

@Component({
    selector: 'app-site-comment',
    templateUrl: './site-comment.component.html',
    styleUrls: ['./site-comment.component.scss']
})

export class SiteCommentComponent {

    public comments: CommentInterface[] = [
        {
            user_name: 'Budi',
            created_at: {
                seconds: 1577412087,
                nanoseconds: 603000000
            },
            message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            replies: [
                {
                    user_name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    user_name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    user_name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                }
            ]
        },
        {
            user_name: 'Budi',
            created_at: {
                seconds: 1577412087,
                nanoseconds: 603000000
            },
            message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            replies: [
                {
                    user_name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    user_name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    user_name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                }
            ]
        }
    ];

    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        // Material Icons
        iconRegistry.addSvgIcon('reply', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/reply.svg'));
        iconRegistry.addSvgIcon('report_problem', sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/material/report_problem.svg'));
    }
}
