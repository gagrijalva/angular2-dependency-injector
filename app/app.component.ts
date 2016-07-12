import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Logger } from './logger.service';
import { UserService } from './user.service';
import { APP_CONFIG } from './app-config';
import { HERO_DI_CONFIG } from './app-config';


@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
             <my-heroes></my-heroes>
  `, 
  directives: [HeroesComponent], 
  providers: [
    Logger,
    UserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ]
})
export class AppComponent { }
