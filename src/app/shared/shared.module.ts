import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
    imports: [
        AppMaterialModule,
        CommonModule, // use to components
        ErrorDialogComponent, CategoryPipe, ConfirmationDialogComponent
    ],
    exports: [
        ErrorDialogComponent,
        CategoryPipe,
        ConfirmationDialogComponent
    ]
})

export class SharedModule { }
