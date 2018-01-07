import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { MainSidebarService } from './main-sidebar.service';

@Component({
  selector: 'lte-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnChanges {
  @Input() collapsed: boolean;
  @Input() mini: boolean;

  constructor(private mainSidebarService: MainSidebarService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['collapsed']) {
      this.mainSidebarService.toggleSidebarCollapse(this.collapsed);
    }

    if (changes['mini']) {
      this.mainSidebarService.toggleMiniSidebar(this.mini);
    }
  }
}
