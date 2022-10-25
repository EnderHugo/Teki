import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxTimelineModule } from 'ngx-timeline';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginPageRoutingModule,
    IonicModule,
    NgxTimelineModule,
    ModalModule.forRoot(),
    OktaAuthModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
