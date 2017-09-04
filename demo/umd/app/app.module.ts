import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgAdminLteModule } from 'ng-admin-lte';

@NgModule({
  imports: [ BrowserModule, NgAdminLteModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
