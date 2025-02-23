import {NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CallusComponent } from './callus/callus.component';
import { AccountComponent } from './account/account.component';
import { HrComponent } from './hr/hr.component';
import { ConvertcurrancyComponent } from './convertcurrancy/convertcurrancy.component';
import{FormsModule}from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    CallusComponent,
    AccountComponent,
    HrComponent,
    ConvertcurrancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
