import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdListItemComponent } from './ad-list-item/ad-list-item.component';
import { AdListViewComponent } from './ad-list-view/ad-list-view.component';


@NgModule({
  declarations: [
    AppComponent,
    AdDetailsComponent,
    AdListItemComponent,
    AdListViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
