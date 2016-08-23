import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// global shared module
import { SwipeableCardModule } from '../../components';
import { AppComponent } from './app';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    SwipeableCardModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}