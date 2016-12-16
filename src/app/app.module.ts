import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { FilterComponent } from './subheader/filter/filter.component';
import { SearchComponent } from './subheader/search/search.component';
import { PaletteListComponent } from './palettes/palette-list/palette-list.component';
import { PaletteDetailComponent } from './palettes/palette-detail/palette-detail.component';
import { PaletteItemComponent } from './palettes/palette-list/palette-item.component';
import { ParettoMainComponent } from './paretto-main/paretto-main.component';
import { ParettoListComponent } from './paretto-list/paretto-list.component';
import { ParettoEditComponent } from './paretto-edit/paretto-edit.component';
import { ParettoAdminComponent } from './paretto-admin/paretto-admin.component';

import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './authentication/auth.guard';
import { SigninComponent } from './authentication/signin/signin.component';
import { SingupComponent } from './authentication/singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    FilterComponent,
    SearchComponent,
    PaletteListComponent,
    PaletteDetailComponent,
    PaletteItemComponent,
    ParettoMainComponent,
    ParettoListComponent,
    ParettoEditComponent,
    ParettoAdminComponent,
    SigninComponent,
    SingupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
