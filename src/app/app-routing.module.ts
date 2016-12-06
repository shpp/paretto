import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParettoMainComponent } from './paretto-main/paretto-main.component.ts';
import { ParettoListComponent } from './paretto-list/paretto-list.component.ts';
import { ParettoEditComponent } from './paretto-edit/paretto-edit.component.ts';
import { ParettoAdminComponent } from './paretto-admin/paretto-admin.component.ts';

const routes: Routes = [
<<<<<<< HEAD
  { path: 'parreto',  component:  ParretoMainComponent},
  { path: 'parreto/list', component: ParretoListComponent},
  { path: 'parreto/edit/:id', component: ParretoEditComponent },
  { path: 'parreto/admin', component: ParretoAdminComponent },
  { path: '', redirectTo: '/parreto', pathMatch: 'full' },
  /*{ path: '**', component: NotFoundComponent }*/
=======
  { path: '', redirectTo: '/paretto', pathMatch: 'full' },
  { path: 'paretto',  component:  ParettoMainComponent},
  { path: 'paretto/list', component: ParettoListComponent},
  { path: 'paretto/edit/:id', component: ParettoEditComponent },
  { path: 'paretto/admin', component: ParettoAdminComponent }
>>>>>>> 25a5046a60d8a1de600d239fb149d6c1425d7ed1
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
