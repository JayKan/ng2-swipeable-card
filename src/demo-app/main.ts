import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// enable prod for faster renders
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

// import common styles
import './views/common/styles.scss';

// import app module
import { AppModule } from './views/app';

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
