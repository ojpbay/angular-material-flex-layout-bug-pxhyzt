import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
    <div fxLayout fxLayoutAlign="center start">
      <div fxFlex="100" fxFlex.gt-xs="95%" fxFlex.gt-sm="800px">
        <app-open-dialog></app-open-dialog>
      </div>
    </div>
  `
})
export class AppComponent  { }
