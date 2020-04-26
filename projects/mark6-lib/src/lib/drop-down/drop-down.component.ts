import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
    Directive,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { Mark6DropDownService } from './drop-down.service';

/**
 * DropDown
 *
 * Can contain elements:
 * - mark6-drop-down-trigger
 */
@Component({
    selector: 'mark6-drop-down',
    exportAs: 'mark6DropDown',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mark6DropDownComponent implements OnInit, OnDestroy, OnChanges {

    @HostBinding('class') classes = 'mark6-drop-down';

    @HostBinding('class.pos-x-right') a;

    @HostBinding('class.pos-x-left') b;

    @HostBinding('class.pos-y-top') c;

    @HostBinding('class.pos-y-bottom') d;

    @Input() public addClass: string;
    @Input() public positionY = 'bottom';
    @Input() public positionX = 'right';

    private open = false;
    private dropDown;
    private subscription;

    @HostListener('document:click', ['$event'])
    click(event) {
        this.closeAll(event);
    }

    constructor(private elementRef: ElementRef, private _dropDownService: Mark6DropDownService) {
    }

    toggle(event) {

        event.preventDefault();
        event.stopPropagation();
        const target = event.target;
        this.dropDown = target.closest('.mark6-drop-down');

        if (target) {
            if (this.open === false) {
                this.open = true;
                this.dropDown.classList.add('open');
                this._dropDownService.close(this);
            } else {
                this.open = false;
                this.dropDown.classList.remove('open');
            }
        }

    }

    closeAll(event) {
        if (!this.canClose(event)) {
            this.close(null);
        }
    }

    close(target) {
        if (target !== this && this.open) {
            this.open = false;
            this.dropDown.classList.remove('open');
        }
    }

    canClose(event) {
        let current = event.target;
        const host = this.elementRef.nativeElement;
        do {
            if (current === host) {
                return true;
            }
            current = current.parentNode;
        } while (current);

        return false;
    }

    ngOnInit() {
        this.subscription = this._dropDownService.getState()
            .subscribe(target => this.close(target));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.positionX) { this.a = changes.positionX.currentValue === 'right'; }
        if (changes.positionX) { this.b = changes.positionX.currentValue === 'left'; }
        if (changes.positionY) { this.c = changes.positionY.currentValue === 'top'; }
        if (changes.positionY) { this.d = changes.posipositionYtionX.currentValue === 'bottom'; }
    }
}


/**
 * DropDownTrigger - Component intended to be used within the `<mark6-drop-down>`.
 */
@Component({
    selector: 'mark6-drop-down-trigger',
    templateUrl: 'drop-down-trigger.component.html',
    styleUrls: ['./drop-down-trigger.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6DropDownTriggerComponent {
    @HostBinding('class') classes = 'mark6-drop-down-trigger';
}

@Directive({ selector: '[mark6DropDownCloseTrigger]' })
export class Mark6DropDownCloseTriggerDirective {
    constructor(private _dropDownService: Mark6DropDownService) {
    }

    @HostListener('click') onClick() {
        this._dropDownService.close(null);
    }
}

/**
 * DropDownOrigin - Component intended to be used within the `<mark6-drop-down>`.
 */
@Component({
    selector: 'mark6-drop-down-origin',
    templateUrl: 'drop-down-origin.component.html',
    styleUrls: ['./drop-down-origin.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6DropDownOriginComponent {
    @HostBinding('class') classes = 'mark6-drop-down-origin';
}


/**
 * DropDownContent - Component intended to be used within the `<mark6-drop-down>`.
 */
@Component({
    selector: 'mark6-drop-down-content',
    template: 'drop-down-content.html',
    styleUrls: ['./drop-down-content.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Mark6DropDownContentComponent {
    @HostBinding('class') classes = 'mark6-drop-down-content';
}
