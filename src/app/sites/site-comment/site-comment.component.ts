import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

export interface CreatedAt {
    seconds: number;
    nanoseconds: number;
}

export interface Reply {
    name: string;
    created_at: CreatedAt;
    message: string;
}

export interface CommentInterface {
    name: string;
    created_at: CreatedAt;
    message: string;
    replies?: Reply[];
}

@Component({
    selector: 'app-site-comment',
    templateUrl: './site-comment.component.html',
    styleUrls: ['./site-comment.component.scss']
})

export class SiteCommentComponent {

    public comments: CommentInterface[] = [
        {
            name: 'Budi',
            created_at: {
                seconds: 1577412087,
                nanoseconds: 603000000
            },
            message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            replies: [
                {
                    name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                }
            ]
        },
        {
            name: 'Budi',
            created_at: {
                seconds: 1577412087,
                nanoseconds: 603000000
            },
            message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
            replies: [
                {
                    name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    name: 'Budi',
                    created_at: {
                        seconds: 1577412087,
                        nanoseconds: 603000000
                    },
                    message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
                },
                {
                    name: 'Budi',
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
