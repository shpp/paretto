import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParettoMainComponent } from './paretto-main/paretto-main.component.ts';
import { ParettoListComponent } from './paretto-list/paretto-list.component.ts';
import { ParettoEditComponent } from './paretto-edit/paretto-edit.component.ts';
import { ParettoAdminComponent } from './paretto-admin/paretto-admin.component.ts';
import { SigninComponent } from './authentication/signin/signin.component.ts';
import { SingupComponent } from './authentication/singup/singup.component.ts';

const routes: Routes = [
  { path: 'paretto',  component:  ParettoMainComponent},
  { path: 'paretto/list', component: ParettoListComponent},
  { path: 'paretto/edit/:id', component: ParettoEditComponent },
  { path: 'paretto/admin', component: ParettoAdminComponent },
  { path: 'paretto/signin', component: SigninComponent},
  { path: 'paretto/signup', component: SingupComponent },
  { path: '', redirectTo: 'paretto', pathMatch: 'full' },
  /*{ path: '**', component: NotFoundComponent }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
