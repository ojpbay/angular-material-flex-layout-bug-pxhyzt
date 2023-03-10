import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RandomDialog } from './random-dialog.component';

@Component({
  selector: 'app-open-dialog',   
  template: `
    <fieldset>
      <ol>
        <li>Make sure you are on a screen size that's gt-sm. (So that <code>fxFlex.gt-sm="800px"</code> from the app.component takes effect.)</li>
        <li>Press "Open dialog" button</li>
        <li>Observe that fieldset in the back of the dialog is occupying 100% width even though it should only take up 800px as per templte of AppComponent.</li>
        <li>The issue goes away if you (1) delete <code>fxLayout.gt-xs="row"</code> or (2) replace <code>fxLayout.gt-xs="row"</code> with <code>fxLayout.xs="row" fxLayout.gt-sm="row"</code> from the random-dialog.component</li>
      </ol>
      <button mat-raised-button (click)="openDialog()">
        Open dialog
      </button>
    </fieldset>
  `
})
export class OpenDialogComponent {  
  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(RandomDialog);
  }
}