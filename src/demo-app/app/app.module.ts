import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminLteModule } from 'ng-admin-lte';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminLteModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
