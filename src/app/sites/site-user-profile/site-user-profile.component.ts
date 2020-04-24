import { ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ImageCropperResult } from '../../../../projects/mark6-lib/src/lib/cropper';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
    selector: 'app-site-user-profile',
    templateUrl: './site-user-profile.component.html',
    styleUrls: ['./site-user-profile.component.scss'],
    encapsulation: ViewEncapsulation.None
})


export class SiteUserProfileComponent implements OnDestroy {
    srcSet = of(`https://via.placeholder.com/300x150 300w,
    https://via.placeholder.com/600x300 600w,
    https://via.placeholder.com/960x480 960w,
    https://via.placeholder.com/1400x700 1400w`).pipe(
        delay(5000)
    );
    sizes = `(max-width:960px) 100vw, 960px`;

    public user = {
        avatarURL: 'assets/demo/avatar.png',
        birthDate: 514072800000,
        coverURL: 'assets/demo/cover.png',
        displayName: 'Sven',
        email: 'sven@budak.info',
        gender: 'male'
    };

    // Media Querys
    public resMinMobile: MediaQueryList;
    public resMinDesktop: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher) {
        this.resMinMobile = media.matchMedia('(min-width: 720px)');
        this.resMinDesktop = media.matchMedia('(min-width: 1280px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.resMinMobile.addListener(this._mobileQueryListener);
        this.resMinDesktop.addListener(this._mobileQueryListener);
    }

    uploadAvatar() {
        console.log('Horaaaay Go Avatar... GO!');
    }

    ngOnDestroy(): void {
        this.resMinMobile.removeListener(this._mobileQueryListener);
        this.resMinDesktop.removeListener(this._mobileQueryListener);
    }
    coverCropEnd(data: ImageCropperResult) {
        this.user.coverURL = data.canvas.toDataURL();
    }
    avatarCropEnd(data: ImageCropperResult) {
        this.user.avatarURL = data.canvas.toDataURL();
    }
}

