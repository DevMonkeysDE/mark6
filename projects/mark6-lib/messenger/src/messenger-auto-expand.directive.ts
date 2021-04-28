import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { XpAnimations } from './animation';
import { Mark6MessengerMessageComponent } from './messenger-message/messenger-message.component';

@Directive({
    selector: '[mark6MessengerAutoExpand]'
})
export class Mark6MessengerAutoExpandirective implements AfterViewInit, OnDestroy {
    player: AnimationPlayer;
    @Input() mark6MessengerAutoExpand: Mark6MessengerMessageComponent;
    @Input() animation = 'slide_in_top';

    message: HTMLElement;
    constructor(private builder: AnimationBuilder, private el: ElementRef<HTMLElement>) {
    }
    ngOnDestroy() {
        this.message.removeEventListener('click', () => this.animate());

    }
    ngAfterViewInit() {
        this.message = this.el.nativeElement.parentElement.querySelector<HTMLElement>('mark6-messenger-message');
        this.message.addEventListener('click', () => this.animate());
    }


    animate() {
        console.log('animate', this.animation);
        if (this.animation) {
            if (this.player) {
                this.player.destroy();
            }
            if (XpAnimations[this.animation]) {
                const metadata = XpAnimations[this.animation];
                const factory = this.builder.build(metadata);
                const player = factory.create(this.el.nativeElement);
                player.play();

            } else {
                throw new Error(`Inavild animation  ${this.animation}`);
            }
        }

    }
}
