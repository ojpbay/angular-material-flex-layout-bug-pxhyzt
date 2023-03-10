import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { OpenDialogComponent } from './open-dialog.component';
import { RandomDialog } from './random-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    CustomMaterialModule
  ],
  declarations: [
    AppComponent,
    OpenDialogComponent,
    RandomDialog,
  ],
  entryComponents: [
    RandomDialog
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
