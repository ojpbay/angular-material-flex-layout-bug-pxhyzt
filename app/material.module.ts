import {NgModule} from '@angular/core';

import {
  MatRippleModule,
  MatButtonModule,
  MatDialogModule,
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [
    MatRippleModule,
    ObserversModule,
    PlatformModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class CustomMaterialModule {}
