import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';

import { ControlSidebarToggleDirective } from './control-sidebar-toggle/control-sidebar-toggle.directive';
import { ControlSidebarComponent } from './control-sidebar/control-sidebar.component';
import { ControlSidebarService } from './control-sidebar/control-sidebar.service';
import { LogoComponent } from './logo/logo.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarToggleDirective } from './main-sidebar-toggle/main-sidebar-toggle.directive';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { MainSidebarService } from './main-sidebar/main-sidebar.service';
import { WrapperComponent } from './wrapper/wrapper.component';

const PUBLIC_DECLARATIONS: Array<Type<any> | any[]> = [
  ControlSidebarComponent,
  ControlSidebarToggleDirective,
  LogoComponent,
  MainHeaderComponent,
  MainSidebarComponent,
  MainSidebarToggleDirective,
  WrapperComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...PUBLIC_DECLARATIONS
  ],
  exports: [
    ...PUBLIC_DECLARATIONS
  ]
})
export class AdminLteModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdminLteModule,
      providers: [
        ControlSidebarService,
        MainSidebarService
      ]
    };
  }
}
