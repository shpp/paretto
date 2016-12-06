import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParettoMainComponent } from './paretto-main/paretto-main.component.ts';
import { ParettoListComponent } from './paretto-list/paretto-list.component.ts';
import { ParettoEditComponent } from './paretto-edit/paretto-edit.component.ts';
import { ParettoAdminComponent } from './paretto-admin/paretto-admin.component.ts';

const routes: Routes = [
  { path: 'parreto',  component:  ParretoMainComponent},
  { path: 'parreto/list', component: ParretoListComponent},
  { path: 'parreto/edit/:id', component: ParretoEditComponent },
  { path: 'parreto/admin', component: ParretoAdminComponent },
  { path: '', redirectTo: '/parreto', pathMatch: 'full' },
  /*{ path: '**', component: NotFoundComponent }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
