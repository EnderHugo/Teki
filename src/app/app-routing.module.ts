import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterUserComponent } from './register-user/register-user.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'chat-messages',
    loadChildren: () => import('./chat-messages/chat-messages.module').then( m => m.ChatMessagesPageModule)
  },
  {
    path: 'select-registration',
    loadChildren: () => import('./select-registration/select-registration.module').then( m => m.SelectRegistrationPageModule)
  },
  {
    path: 'timeline',
    component: RegisterUserComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'callback', component: OktaCallbackComponent
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
