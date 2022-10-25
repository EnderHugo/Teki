import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRegistrationPageRoutingModule } from './select-registration-routing.module';

import { SelectRegistrationPage } from './select-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRegistrationPageRoutingModule
  ],
  declarations: [SelectRegistrationPage]
})
export class SelectRegistrationPageModule {}
