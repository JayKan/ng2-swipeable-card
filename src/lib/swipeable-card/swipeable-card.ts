import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
  EventEmitter,
  Input,
  Injectable
} from '@angular/core';

import { SafeStyle, DomSanitizationService } from '@angular/platform-browser';

@Injectable()
@Component({
  selector: 'swipeable-card',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(swipeLeft)': 'swipeLeft(idx, $event)',
    '(swipeRight)': 'swipeRight(idx, $event)',
    '(panmove)': 'panMoveStream.next({index: idx, event: $event})',
    '(panend)': 'panEnd(idx, $event)'
  },
  template:`
    <div class="swipe-card-container" [style.transform]="getTransformStyle()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [require('./component-style.scss')]
})
export class SwipeableCard {
  /**
   * Distance at which the card will begin transformation on pan.
   */
  static PAN_CANCEL_THRESHOLD:number = 150;
  static SWIPE_ACTION = {
    LEFT: 'swipeleft',
    RIGHT: 'swiperight'
  }

  private panMoveStream: EventEmitter<Event>;
  private panDistance: number;
  private transformStyle: SafeStyle;

  @Input() cards: any[];

  constructor(
    private element: ElementRef,
    private sanitizer: DomSanitizationService
  ){
    this.panMoveStream = new EventEmitter<Event>();
    this.panMoveStream
      .map((next: any) => {
        const { event } = next;
        return {
          deltaX: Math.floor(event.deltaX),
          distance: Math.floor(event.distance),
          direction: event.direction
        }
      })
      .subscribe(panData => this.panMove(panData))
  }


  swipeLeft(index: number, event: Event): void {
    this._swipe(index, event);
  }

  // @HostListener('swiperight', ['idx', '$event'])
  swipeRight(index: number, event: Event): void {
    this._swipe(index, event);
  }

  /**
   * Waits for the PAN_THRESHOLD variable to be met before transforming
   * the current card.
   * @param {number} index Which card is being acted on.
   * @param {Event} e Hammer event
   */
  panMove(panData) {
    this.panDistance = panData.deltaX * 0.25;

    // Update style with bypass safe
    this.transformStyle =
      this.sanitizer
        .bypassSecurityTrustStyle(`rotateZ(${this.panDistance}deg)`)
  }

  panEnd() {
    // TODO: Add card change functionality when past threshold
    if(this.panDistance < SwipeableCard.PAN_CANCEL_THRESHOLD) {
      this.transformStyle = this.sanitizer.bypassSecurityTrustStyle('rotate(0)')
    }
  }
  // [END] Pan events

  getTransformStyle() {
    return this.transformStyle;
  }
  /**
   * Fires when swipe event completes
   */
  private _swipe(currentIndex: number, event: Event) {
    if (currentIndex > this.cards.length || currentIndex < 0){
      return;
    }

    const action = event.type || SwipeableCard.SWIPE_ACTION.RIGHT;
    let nextIndex = 0;

    // next action
    if (action === SwipeableCard.SWIPE_ACTION.RIGHT) {
      const isLast = currentIndex === this.cards.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
    }

    if (action === SwipeableCard.SWIPE_ACTION.LEFT) {
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.cards.length - 1 : currentIndex - 1;
    }

    // toggle avatar visibility
    this.cards.forEach((x, i) => x.visible = (i === nextIndex));
  }
}

@Component({
  selector: 'swipeable-card-header',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <ng-content select="[swipeable-card-avatar]"></ng-content>
  <div class="swipeable-card-header-text">
    <ng-content select="swipeable-card-title, swipeable-card-subtitle"></ng-content>
  </div>
  <ng-content></ng-content>
  `
})
export class SwipeableCardHeader {}

@Component({
  selector: 'swipeable-card-title-group',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
  <div>
    <ng-content select="swipeable-card-title, swipeable-card-subtitle"></ng-content>
  </div>
  <ng-content select="img"></ng-content>
  <ng-content></ng-content>
  `
})
export class SwipeableCardTitleGroup {}

@Component({
  selector: '[swipeable-button]:not(a), [swipeable-raised-button]:not(a)',
  encapsulation: ViewEncapsulation.None,
  template:`
  <span class="swipeable-button-wrapper">
    <ng-content></ng-content>
  </span>
  `
})
export class SwipeableButton {

  isMouseDown: boolean = false;
  isKeyboardFocused: boolean = false;

  @HostListener('mousedown')
  onMousedown() {
    this.isMouseDown = true;
    setTimeout(() => {this.isMouseDown = false}, 100);
  }

  @HostListener('focus')
  onFocus() {
    this.isKeyboardFocused = !this.isMouseDown;
  }

  @HostListener('blur')
  onBlur() {
    this.isKeyboardFocused = false;
  }
}
