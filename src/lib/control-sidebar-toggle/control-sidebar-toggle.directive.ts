import { Directive, HostListener } from '@angular/core';

import { ControlSidebarService } from '../control-sidebar/control-sidebar.service';

@Directive({ selector: '[lteControlSidebarToggle]' })
export class ControlSidebarToggleDirective {
  private sidebarOpen: boolean;

  constructor(private controlSidebarService: ControlSidebarService) {
    this.controlSidebarService.sidebarOpenToggled$.subscribe(
      toggle => this.sidebarOpen = toggle
    );
  }

  @HostListener('click')
  onClick() {
    this.controlSidebarService.toggleSidebarOpen(!this.sidebarOpen);
  }
}
