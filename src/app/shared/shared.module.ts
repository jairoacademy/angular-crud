import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [ // use to components
    ErrorDialogComponent
  ],
  imports: [ // use to modules
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent
  ]
})

export class SharedModule { }
