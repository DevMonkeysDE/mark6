import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {SimpleChanges} from '@angular/core';

@Component({
    selector: 'mark6-content-wrapper',
    templateUrl: './content-wrapper.component.html',
    styleUrls: ['./content-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class Mark6ContentWrapperComponent implements OnInit {

    private hostClass = 'mark6-content-wrapper';
    @HostBinding('class') classes = this.hostClass;

    constructor() {
    }

    ngOnInit(): void {
    }

}
