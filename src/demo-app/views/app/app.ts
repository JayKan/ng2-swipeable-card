import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template:`  
    <h4 class="ui header medium center aligned margin-top-20">
      Swipe Avatars with HammerJS
      <span class="sub header">(swipe left or right)</span>
    </h4>
     
    <div class="card-container">              
      <swipeable-card *ngFor="let record of avatars; let idx = index;"
        [cards]="avatars"        
        [class.visible]="record.visible"
        [class.hidden]="!record.visible"
      >
        <img swipeable-card-image src="{{ record.image }}">
        <swipeable-card-content>
          <swipeable-card-title>
            {{ record.name }} <small>{{ idx }}</small>
          </swipeable-card-title>
          <p>{{ record.content }}</p>
        </swipeable-card-content>
          
        <swipeable-card-actions>
          <button swipeable-button (click)="like(record)">LIKE</button>
          <button swipeable-button (click)="share(record)">SHARE</button>
        </swipeable-card-actions>
      </swipeable-card>
    </div>   
  `,
  styles: [`
    swipeable-card {       
      margin: 15px auto auto auto;
      width: 290px;               
    }
    
    @media (max-width: 340px) {
      swipeable-card {
        margin: 15px 5px;
        width:  250px;        
      }
    }
    
    @media (max-width: 280px) {
      swipeable-card {
        margin: 15px 5px;
        width:  220px;          
      }
    }
    
    .card-container {
      display: flex;
      flex-direction: column;
    }    
  `]
})
export class AppComponent {

  avatars = [
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