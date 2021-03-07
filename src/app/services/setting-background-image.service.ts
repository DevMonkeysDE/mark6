import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingBackgroundImageService {

    private background = 'default';

    constructor() {
    }

    _setBackground(backgroundImage) {
        this.background = backgroundImage;
        // Save to localStorage
        localStorage.setItem('background-image', backgroundImage);
    }

    _getBackground() {
        // Check if any prefers-color-scheme is stored in localStorage
        if (localStorage.getItem('background-image')) {
            // Save prefers-color-scheme from localStorage
            this.background = localStorage.getItem('background-image');
        }
    }

    load() {
        this._getBackground();
    }

    update(backgroundImage) {
        console.log(backgroundImage);
        this._setBackground(backgroundImage);
    }

    currentActive() {
        return this.background;
    }

}
