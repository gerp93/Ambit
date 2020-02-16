import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AmbitWorkflowComponent } from './ambit-workflow/ambit-workflow.component';
import { AmbitPoiComponent } from './ambit-workflow/ambit-poi/ambit-poi.component';
import { AmbitDomicileComponent } from './ambit-workflow/ambit-domicile/ambit-domicile.component';
import { AmbitAboutComponent } from './ambit-about/ambit-about.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [AmbitAboutComponent, AmbitDomicileComponent, AmbitWorkflowComponent, AmbitPoiComponent],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSlideToggleModule,
    SharedModule,
    CommonModule

  ],
  exports: [
    AmbitAboutComponent,
    AmbitWorkflowComponent
  ]
})
export class AmbitModule { }
