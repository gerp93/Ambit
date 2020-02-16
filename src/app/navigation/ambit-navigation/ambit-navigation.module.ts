import { AmbitModule } from './../../ambit-components/ambit.module';
import { AmbitNavigationComponent } from './ambit-navigation.component';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './../../app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AmbitNavigationComponent],
  imports: [
    CommonModule,
    AmbitModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],

  exports: [
    AmbitNavigationComponent
  ]
})
export class AmbitNavigationModule { }
