# ng2-swipeable-card

[![Build Status][build-status-badge]][build-status]
[![Dependencies][dependencyci-badge]][dependencyci]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]
[![MIT License][license-badge]][license]

![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)
[![Angular 2 Style Guide][angular2-style-guide-badge]][style-guide]
[![PRs Welcome][prs-badge]][prs]

<!--[![Dependency Status][dependency-badge]][dependency]-->
<!--[![devDependency Status][devDependency-badge]][devDependency]-->

> A small standalone Angular2 plugin that allows your card component to either swipe left or right. To view the live demo, please visit <a href="https://ng2-swipeable-card.firebaseapp.com/" target="_blank">https://ng2-swipeable-card.firebaseapp.com/ (You can also try to open from your mobile device  🎉)!


## Installation
`npm install --save ng2-swipeable-card`

## Usage 
For webpack consumers, first, import `SwipeableCardModule` to your entry `AppModule` file,
```typescript
  // Root app module file
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { SwipeableCardModule } from 'ng2-swipeable-card';
  
  import { AppComponent } from './app/';
  
  @NgModule({
    imports: [
      BrowserModule,
      SwipeableCardModule
      ...
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  });
```
Then, import `ng2-swipeable-card` and `hammerjs` in your `vendor.ts` file,
```typescript
  // vendor.ts file
  import '@angular/common';
  import '@angular/core';
  ...
  
  import 'hammerjs';
  import 'ng2-swipeable-card';
```
Lastly, simply add your content between `swipeable-card` tags to consume swipeable-card styles like box-shadow and default padding. Example markup for a list of swipeable cards that you can swipe either left or right.
```typescript
  import { Component, ViewEncapsulation } from '@angular/core';
  
  @Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    template:`
    <div class="swipeable-card-container">
      <swipeable-card *ngFor="let card of cards; let idx = index;"
                      [cards]="cards"
                      [class.visible]="card.visible"
                      [class.hidden]="!card.visible"
      >
        <img swipeable-card-image src="{{ card.image }}">
        <swipeable-card-content>
          <swipeable-card-title>
            {{ record.name }}
            <small>{{ idx }}</small>
          </swipeable-card-title>
          <p>{{ record.content }}</p>
        </swipeable-card-content>
        
        <swipeable-card-actions>
          <button swipeable-button (click)="like(card)">LIKE</button>
          <button swipeable-button (click)="share(card)">SHARE</button>
        </swipeable-card-actions>
      </swipeable-card>
    </div>
    
    `,
  });
  export class AppComponent {
    // load any number of cards
    cards = [
      { name: 'Helen', image: 'http://semantic-ui.com/images/avatar/large/helen.jpg', visible: true, content: 'Helen: . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
      { name: 'Elliot', image: 'http://semantic-ui.com/images/avatar/large/elliot.jpg', visible: false, content: 'Elliot: Lorem ipsum dolor sit amet, consectetur 3adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { name: 'Matt', image: 'http://semantic-ui.com/images/avatar/large/matt.jpg', visible: false, content: 'Matt: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ];
    
    // click `like` action
    like(card): void {}
    
    // click `share` action
    share(card): void {}
  }
```

## Getting Started 
### Dependencies Prerequisites
**Make sure you have Node version >= 5.11 and NPM >= 3**
> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file). 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `typings` (`npm install --global typings`)

### Running Development
Once you have installed all prerequisites,

* `fork` this repo
* `clone` your fork
* `nvm use` use the node version from .nvmrc
* `npm install` to install all dependencies
* `npm run typings` to install all related typings
* `npm start` to run our demo app locally

> If you are having issues setting up your local development, try `rm -rf node_modules && npm cache clean`, and re-run `npm install`. If issues still persist, please file an [issue](https://github.com/JayKan/ng2-swipeable-card/issues). 

## Credits
* [Angular2 Material Card Component](https://github.com/angular/material2)  

## License
MIT © [Jay Kan](https://github.com/JayKan)


[angular2-style-guide-badge]: https://mgechev.github.io/angular2-style-guide/images/badge.svg
[style-guide]: https://github.com/mgechev/angular2-style-guide
[license-badge]: https://img.shields.io/npm/l/ng2-swipeable-card.svg?style=flat-square
[license]: https://github.com/JayKan/ng2-swipeable-card/blob/master/LICENSE
[dependency-badge]: https://david-dm.org/JayKan/ng2-swipeable-card/status.svg
[dependency]: https://david-dm.org/JayKan/ng2-swipeable-card
[devDependency-badge]: https://david-dm.org/JayKan/ng2-swipeable-card/dev-status.svg
[devDependency]: https://david-dm.org/JayKan/ng2-swipeable-card?type=dev
[downloads-badge]: https://img.shields.io/npm/dm/ng2-swipeable-card.svg?style=flat-square
[npm-stat]: https://npm-stat.com/charts.html?package=ng2-swipeable-card&from=2016-08-22&to=2016-09-14
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: https://github.com/JayKan/ng2-swipeable-card/pulls
[version-badge]: https://img.shields.io/npm/v/split-guide.svg?style=flat-square
[package]: https://www.npmjs.com/package/ng2-swipeable-card
[build-status-badge]: https://img.shields.io/travis/JayKan/ng2-swipeable-card.svg?style=flat-square
[build-status]: https://travis-ci.org/JayKan/ng2-swipeable-card
[dependencyci-badge]: https://dependencyci.com/github/JayKan/ng2-swipeable-card/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/JayKan/ng2-swipeable-card
