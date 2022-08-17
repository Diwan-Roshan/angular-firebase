import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path : 'signin',component: SigninComponent},
  { path : '',component : CardsComponent},
  { path : 'details', component : DetailsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
