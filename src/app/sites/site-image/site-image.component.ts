import {Component} from '@angular/core';

@Component({
    selector: 'app-site-image',
    templateUrl: './site-image.component.html',
    styleUrls: ['./site-image.component.scss']
})

export class SiteImageComponent {

    public demo = {
        avatar: 'assets/demo/avatar-female-asian.jpg',
        cover: 'assets/demo/cover-nature.jpg',
        demo: 'assets/demo/demo.jpg',
        alt: 'Alt Text',
    };

}
