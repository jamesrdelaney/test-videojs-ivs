import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';
import { HttpClientModule } from '@angular/common/http';
// import {
//   VideoJSQualityPlugin,
//   VideoJSIVSTech,
//   registerIVSQualityPlugin,
//   registerIVSTech,
//   VideoJSEvents,
// } from 'amazon-ivs-player';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    VjsPlayerComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
