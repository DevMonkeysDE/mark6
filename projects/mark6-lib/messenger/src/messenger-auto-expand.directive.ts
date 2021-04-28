import {AnimationBuilder, AnimationPlayer} from '@angular/animations';
import {AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy} from '@angular/core';
import {XpAnimations} from './animation';

@Directive({
    selector: '[mark6MessengerAutoExpand]'
})
export class Mark6MessengerAutoExpandDirective implements AfterViewInit, OnDestroy {

    @Input() animation = 'mark6-auto-expand-animation';
    @HostBinding('style') style = {height: 0, opacity: 0,};
    private player: AnimationPlayer;
    private message: HTMLElement;

    constructor(private animationBuilder: AnimationBuilder, private el: ElementRef<HTMLElement>) {
    }

    animate() {
        // console.log('animate', this.animation);
        if (this.animation) {
            if (this.player) {
                this.player.destroy();
            }
            if (XpAnimations[this.animation]) {
                const metaData = XpAnimations[this.animation];
                const factory = this.animationBuilder.build(metaData);
                const player = factory.create(this.el.nativeElement);
                player.play();
            } else {
                throw new Error(`Invalid animation  ${this.animation}`);
            }
        }
    }

    ngOnDestroy() {
        this.message.removeEventListener('click', () => this.animate());
    }

    ngAfterViewInit() {
        this.message = this.el.nativeElement.parentElement.querySelectorAll<HTMLElement>('mark6-messenger-message')[0];
        this.message.addEventListener('click', () => this.animate());
    }

}
