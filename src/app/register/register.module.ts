import { ElementRef, NgModule, ViewChild, Component } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RegisterUserComponent } from '../register-user/register-user.component';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage, RegisterUserComponent]
})
export class RegisterPageModule {
}
