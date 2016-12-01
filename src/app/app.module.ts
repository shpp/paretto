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
import { ParretoMainComponent } from './parreto-main/parreto-main.component';
import { ParretoListComponent } from './parreto-list/parreto-list.component';
import { ParretoEditComponent } from './parreto-edit/parreto-edit.component';
import { ParretoAdminComponent } from './parreto-admin/parreto-admin.component';

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
    ParretoMainComponent,
    ParretoListComponent,
    ParretoEditComponent,
    ParretoAdminComponent,
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
