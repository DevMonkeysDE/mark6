import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
    selector: 'app-site-image',
    templateUrl: './site-image.component.html',
    styleUrls: ['./site-image.component.scss']
})


export class SiteImageComponent {

    srcSet = of(`https://via.placeholder.com/300x150 300w,
    https://via.placeholder.com/600x300 600w,
    https://via.placeholder.com/960x480 960w,
    https://via.placeholder.com/1400x700 1400w`).pipe(
        delay(5000)
    );

    public dummy = {
        avatar: 'assets/demo/avatar-female-asian.jpg',
        cover: 'assets/demo/cover-nature.jpg',
        demo: 'assets/demo/demo.jpg',
        alt: 'Alt Text',
    };

    constructor() {
    }

}
