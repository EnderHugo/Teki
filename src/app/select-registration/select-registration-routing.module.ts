import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRegistrationPage } from './select-registration.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRegistrationPageRoutingModule {}
