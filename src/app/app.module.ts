import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    BannerComponent,
    CardsComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
