import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SelectableListComponent } from './shared/components/selectable-list/selectable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SelectableListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
