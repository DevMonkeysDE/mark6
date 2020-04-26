import {Injectable, RendererFactory2} from '@angular/core';
// TODO Check sometimes when the bug in compiler is fixed. then we can move Renderer2 again to above import
// More about it: https://github.com/ng-packagr/ng-packagr/issues/1543#issuecomment-593873874
import {Renderer2} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Mark6PrimaryColorService {

    private renderer: Renderer2;
    private primaryColor = 'default';
    // Define prefix for more clear and readable styling classes in scss files
    private colorSchemePrefix = 'primary-color-';

    constructor(rendererFactory: RendererFactory2) {
        // Create new renderer from renderFactory, to make it possible to use renderer2 in a service
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    _setColorScheme(scheme) {
        this.primaryColor = scheme;
        // Save prefers-color-scheme to localStorage
        localStorage.setItem('primary-color', scheme);
    }

    _getColorScheme() {
        // Check if any prefers-color-scheme is stored in localStorage
        if (localStorage.getItem('primary-color')) {
            // Save prefers-color-scheme from localStorage
            this.primaryColor = localStorage.getItem('primary-color');
        }
    }

    load() {
        this._getColorScheme();
        this.renderer.addClass(document.body, this.colorSchemePrefix + this.primaryColor);
    }

    update(scheme) {
        this._setColorScheme(scheme);
        // Remove all old class from body
        this.removeOldClass(this.colorSchemePrefix);
        // Remove the old color-scheme class
        // this.renderer.removeClass(document.body, this.colorSchemePrefix + (this.primaryColor === 'dark' ? 'light' : 'dark'));
        // Add the new / current color-scheme class
        this.renderer.addClass(document.body, this.colorSchemePrefix + scheme);
    }

    removeOldClass(prefix) {
        for (let i = document.body.classList.length - 1; i >= 0; i--) {
            if (document.body.classList[i].startsWith(prefix)) {
                document.body.classList.remove(document.body.classList[i]);
            }
        }
    }

    currentActive() {
        return this.primaryColor;
    }

}
