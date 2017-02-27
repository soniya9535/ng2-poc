import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ScheduleComponent} from './schedule.component';
import {AgendaComponent} from './agenda.component';
import {Jan1Component} from './jan1.component';
import {Jan2Component} from './jan2.component';
import{FilteredJan1Component} from './filteredJan1.component';

import {PostService} from './services/posts.services';


import {HttpModule} from '@angular/http';
import {routing} from './routing/app.routing';

@NgModule({
  imports:      [ BrowserModule ,HttpModule,routing],
  declarations: [ AppComponent ,ScheduleComponent,AgendaComponent,Jan1Component,FilteredJan1Component,Jan2Component],
  providers:[PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
