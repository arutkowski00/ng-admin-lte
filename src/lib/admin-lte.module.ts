import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HelloComponent
  ],
  exports: [
    HelloComponent
  ]
})
export class AdminLteModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdminLteModule,
      providers: []
    };
  }
}
