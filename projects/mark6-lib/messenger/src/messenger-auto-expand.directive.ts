import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy } from '@angular/core';
import { XpAnimations } from './animation';
import { MessengerService } from './messenger.service';

@Directive({
    selector: '[mark6MessengerAutoExpand]'
})
export class Mark6MessengerAutoExpandDirective implements AfterViewInit, OnDestroy {

    @Input() mark6MessengerAutoExpand = 'default';
    @Input() index = 0;
    @HostBinding('style') style = { height: 0, opacity: 0 };
    private animation = 'mark6-auto-expand-animation-';
    private message: HTMLElement;

    constructor(private messengerService: MessengerService, private animationBuilder: AnimationBuilder, private el: ElementRef<HTMLElement>) { }

    animate() {
        if (this.animation) {
            if (this.messengerService.lastAutoExpandedMessage[this.mark6MessengerAutoExpand]) {
                this.playAnimation('close', this.messengerService.lastAutoExpandedMessage[this.mark6MessengerAutoExpand]);
            }

            if (this.messengerService.lastAutoExpandedMessage[this.mark6MessengerAutoExpand] !== this.el.nativeElement) {
                this.playAnimation('open');
            } else {
                delete this.messengerService.lastAutoExpandedMessage[this.mark6MessengerAutoExpand];
            }
        }
    }

    private playAnimation(state: 'open' | 'close', element = this.el.nativeElement) {
        const animation = this.animation + state;

        if (XpAnimations[animation]) {
            const metaData = XpAnimations[animation];
            const factory = this.animationBuilder.build(metaData);
            const player = factory.create(element);
            this.messengerService.lastAutoExpandedMessage[this.mark6MessengerAutoExpand] = element;
            player.play();
        } else {
            throw new Error(`Invalid animation  ${this.animation}`);
        }
    }

    ngOnDestroy() {
        this.message.removeEventListener('click', () => this.animate());
    }

    ngAfterViewInit() {
        /* TODO: FIX EventListener delete them if not needed anymore */
        this.message = this.el.nativeElement.parentElement.querySelectorAll<HTMLElement>('mark6-messenger-message')[this.index];
        this.message.addEventListener('click', () => this.animate());
    }

}
