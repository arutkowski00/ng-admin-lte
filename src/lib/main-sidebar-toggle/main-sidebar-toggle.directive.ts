import { Directive, HostListener } from '@angular/core';

import { MainSidebarService } from '../main-sidebar/main-sidebar.service';

@Directive({
  selector: '[lteMainSidebarToggle]',
})
export class MainSidebarToggleDirective {
  private sidebarCollapsed: boolean;

  constructor(private mainSidebarService: MainSidebarService) {
    this.mainSidebarService.sidebarCollapseToggled$.subscribe(
      toggle => this.sidebarCollapsed = toggle
    );
  }

  @HostListener('click')
  onClick() {
    this.mainSidebarService.toggleSidebarCollapse(!this.sidebarCollapsed);
  }
}
