import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import { AdListItemComponent } from './components/ad-list-item/ad-list-item.component';
import { AdListViewComponent } from './components/ad-list-view/ad-list-view.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthenticateService } from './services/authenticate.service';
import { AdsService } from './services/ads.service';
<<<<<<< HEAD
import { AddAdvertisementComponent } from './components/add-advertisement/add-advertisement.component';
=======
import { SignUpComponent } from './components/sign-up/sign-up.component';
>>>>>>> fecf78111222cd8a311e76eda8e837f873941f65


@NgModule({
  declarations: [
    AppComponent,
    AdDetailsComponent,
    AdListItemComponent,
    AdListViewComponent,
    LoginScreenComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
<<<<<<< HEAD
    AddAdvertisementComponent
=======
    SignUpComponent
>>>>>>> fecf78111222cd8a311e76eda8e837f873941f65
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthenticateService, AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
