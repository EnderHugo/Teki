import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OKTA_CONFIG, OktaAuthModule, OktaAuthService } from '@okta/okta-angular';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ModalModule } from 'ngx-bootstrap/modal';

const oktaConfig = {
  issuer: 'https://dev-17101842.okta.com/oauth2/default',
  clientId: '0oa700dcioBDj94415d7',
  redirectUri: window.location.origin + '/callback'
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OktaAuthModule,
    ModalModule.forRoot()
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
