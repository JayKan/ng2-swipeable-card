import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostListener, Input } from '@angular/core';

@Component({
  selector: 'swipeable-card',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template:`
    <ng-content></ng-content>
  `,
  styleUrls: ['./swipeable-card.css']
})
export class SwipeableCard {
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  @Input() cards: any[];

  @HostListener('swipeleft', ['idx','$event.type'])
  swipeLeft(index: number, action: string): void {
    this._swipe(index, action);
  }

  @HostListener('swiperight', ['idx', '$event.type'])
  swipeRight(index: number, action: string): void {
    this._swipe(index, action);
  }

  private _swipe(currentIndex: number, action: string = this.SWIPE_ACTION.RIGHT) {

    if (currentIndex > this.cards.length || currentIndex < 0) return;

    let nextIndex = 0;

    // next action
    if (action === this.SWIPE_ACTION.RIGHT) {
      const isLast = currentIndex === this.cards.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
    }

    if (action === this.SWIPE_ACTION.LEFT) {
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


