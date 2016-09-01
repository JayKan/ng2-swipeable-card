import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html'),
  styles:[
    require('./app.scss')
  ]
})
export class AppComponent {

  example1 = [
    {
      subTitle: '[1st] Subtitle',
      cardTitle: '[1st] Card with title',
      content: '[1st] Lmet, consectetur adipiscing elit, sed do temporem ipsum iscing elit. Praesent est neque, porta in ligula. Integer id velit sed tellus egestas viverra. Vestibulum magna mi, cursus at elementum ac, porta nec justo. Integer lorem massa, rhoncus quis malesuadaris quis nisi. Morbi in mi nisi. Curabitur at nisl eget nulla sollicitudin dictum. Nulla at est erat. Llaoreet auctor sodales eget, pellentesque ac risus. Nam orci purus, elementum eget turpiur.',
      visible: true
    },
    {
      subTitle: '[2nd] Subtile',
      cardTitle: '[2nd] Card with title',
      content: '[2nd] Vestibulum non massa tincidunt, ullamcorper mi non, gravida arcusque accumsan mauris at magna blandit, et tempus lectus bibendum. Aenean in elit in nisi scelerisque aliquet a ac ante. Etiam quis ante risus. Nunc accumsan eu felis sit amet aliquet. Vestibulum blandit erat vel ornare sodales. Aliquam porttitor suscipit nisi, at condimentum erat pharetra sed.',
      visible: false
    }
  ];
  example2 = [
    {
      name: 'Helen',
      image: 'http://semantic-ui.com/images/avatar/large/helen.jpg',
      visible: true,
      content: 'Helen: . Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      name: 'Elliot',
      image: 'http://semantic-ui.com/images/avatar/large/elliot.jpg',
      visible: false,
      content: 'Elliot: Lorem ipsum dolor sit amet, consectetur 3adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Joe',
      image: 'http://semantic-ui.com/images/avatar/large/joe.jpg',
      visible: false,
      content: 'Joe: Lorem ipsum dolor sit amet cing elit, sed do eiusmod tempor olore magna aliqua.'
    },
    {
      name: 'Laura',
      image: 'http://semantic-ui.com/images/avatar/large/laura.jpg',
      visible: false,
      content: 'Laura: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      name: 'chris',
      image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
      visible: false,
      content: 'Chris: Lorem ipsum dolor sit amet, consectetur 3adipiscing elit, sed do eiusmod tempor incididunt.'
    },
    {
      name: 'Jenny',
      image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
      visible: false,
      content: 'Jenny: Lorem ipsum dolor sit amet, consectetur 3adipiscing cididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Matt',
      image: 'http://semantic-ui.com/images/avatar/large/matt.jpg',
      visible: false,
      content: 'Matt: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  like(avatar) {
    console.log('Like this avatar: ', avatar.name);
  }

  share(avatar) {
    console.log('Share this avatar', avatar.name);
  }
}