import { NgModule } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { SWIPEABLE_CARD_DIRECTIVES } from './swipeable-card';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'swipe': { velocity: 0.4, threshold: 20 } // override default settings
  }
}

@NgModule({
  declarations: [SWIPEABLE_CARD_DIRECTIVES],
  exports: [SWIPEABLE_CARD_DIRECTIVES],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
  ]
})
export class SwipeableCardModule { }