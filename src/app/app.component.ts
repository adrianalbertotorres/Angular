import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <app-header></app-header>
   <app-left></app-left>   
   <app-right></app-right>    
   <app-footer></app-footer>
  `,
 

})
export class AppComponent  { name = 'Adrian'; }
