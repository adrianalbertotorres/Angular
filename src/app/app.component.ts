import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello Adrian</h1>
  <app-header></app-header>,
  <app-footer></app-footer>,
  `
 

})
export class AppComponent  { name = 'Adrian'; }
