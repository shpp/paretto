import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
