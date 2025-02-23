import { ConvertcurrancyComponent } from './convertcurrancy/convertcurrancy.component';
import { CallusComponent } from './callus/callus.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HrComponent } from './hr/hr.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'callus',component:CallusComponent},
  {path:'convert',component:ConvertcurrancyComponent},
  {path:'hr',component:HrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
