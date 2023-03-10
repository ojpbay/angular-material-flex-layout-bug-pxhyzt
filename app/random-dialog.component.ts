import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  template: `
  <h1 mat-dialig-title>randon dialog</h1>
  <mat-dialog-content>
      <div fxLayout="column" fxLayout.gt-sm="row" fxShow.gt-sm fxLayoutGap="10px">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      
  </mat-dialog-content>

  <mat-dialog-actions>
    <button mat-button (click)="dialogRef.close()">
      Close
    </button>
  </mat-dialog-actions>
  `,
})
export class RandomDialog {
  constructor(public dialogRef: MatDialogRef<RandomDialog>) { }
}
