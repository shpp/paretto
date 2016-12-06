import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParretoMainComponent } from './parreto-main/parreto-main.component.ts';
import { ParretoListComponent } from './parreto-list/parreto-list.component.ts';
import { ParretoEditComponent } from './parreto-edit/parreto-edit.component.ts';
import { ParretoAdminComponent } from './parreto-admin/parreto-admin.component.ts';

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
