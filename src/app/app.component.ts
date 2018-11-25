import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <app-header></app-header>
   <app-imagen></app-imagen>
   <app-footer></app-footer>
  `,
 

})
export class AppComponent  { name = 'Adrian'; }
