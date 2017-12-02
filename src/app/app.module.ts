import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdListItemComponent } from './ad-list-item/ad-list-item.component';
import { AdListViewComponent } from './ad-list-view/ad-list-view.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdDetailsComponent,
    AdListItemComponent,
    AdListViewComponent,
    LoginScreenComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
