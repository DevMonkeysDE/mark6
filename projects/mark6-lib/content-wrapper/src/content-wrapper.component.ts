import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'mark6-content-wrapper',
    templateUrl: './content-wrapper.component.html',
    styleUrls: ['./content-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6ContentWrapperComponent {

    private hostClass = 'mark6-content-wrapper';
    @HostBinding('class') classes = this.hostClass;

    @Input() public removeSpacing: 'all' | 'vertical' | 'horizontal' | 'top' | 'right' | 'bottom' | 'left' | string;

    @HostBinding('style.background-color') @Input() public backgroundColor = null;

    constructor() {
    }

}
