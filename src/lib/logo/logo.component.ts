import { Component, Input } from '@angular/core';

import { MainSidebarService } from '../main-sidebar/main-sidebar.service';

@Component({
  selector: 'lte-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  private sidebarCollapsed: boolean;
  private sidebarMini: boolean;

  @Input() type: 'mini' | 'large';

  get isVisible(): boolean {
    return (this.type === 'large' && !this.isSidebarMiniCollapsed) ||
      (this.type === 'mini' && this.isSidebarMiniCollapsed);
  }

  get isSidebarMiniCollapsed(): boolean {
    return this.sidebarCollapsed && this.sidebarMini;
  }

  get logoClassName(): string {
    switch (this.type) {
      case 'large':
        return 'logo-lg';
      case 'mini':
        return 'logo-mini';
    }
    return '';
  }

  constructor(private mainSidebarService: MainSidebarService) {
    mainSidebarService.miniSidebarToggled$.subscribe(
      toggle => this.sidebarMini = toggle
    );

    mainSidebarService.sidebarCollapseToggled$.subscribe(
      toggle => this.sidebarCollapsed = toggle
    );
  }
}
