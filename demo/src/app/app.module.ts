import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgAdminLteModule } from '../../../dist';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAdminLteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
