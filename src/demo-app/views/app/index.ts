import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// global shared module
import { SwipeableCardModule } from '../../../lib';
import { AppComponent } from './app';

@NgModule({
  imports: [
    BrowserModule,
    SwipeableCardModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }