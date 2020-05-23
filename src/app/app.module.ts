import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavyblueComponent } from './navyblue/navyblue.component';
import { RedComponent } from './red/red.component';
import { WhiteComponent } from './white/white.component';
import { YellowComponent } from './yellow/yellow.component';
import { GreenComponent } from './green/green.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import { Location } from '@angular/common';




const appRoutes:Routes = [
{
  path:'navyblue',
  component : NavyblueComponent 
},
  {
    path: 'dashboard',
    component: DashboardComponent
  },
   {
     path:'red',
     component : RedComponent
   },
   {
     path:'white',
     component : WhiteComponent
   },
   {
     path:'green',
     component : GreenComponent
   },
   {
     path:'yellow',
     component:YellowComponent
   }
]

@NgModule({
  declarations: [
    AppComponent,
    NavyblueComponent,
    RedComponent,
    WhiteComponent,
    YellowComponent,
    GreenComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
