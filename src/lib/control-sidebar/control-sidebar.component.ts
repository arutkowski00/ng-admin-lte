import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ControlSidebarService } from '../control-sidebar/control-sidebar.service';

@Component({
  selector: 'lte-control-sidebar',
  templateUrl: 'control-sidebar.component.html'
})

export class ControlSidebarComponent implements OnChanges {
  @Input() light = false;
  @Input() open: boolean;

  constructor(private controlSidebarService: ControlSidebarService) {
    this.controlSidebarService.sidebarOpenToggled$.subscribe(
      toggle => this.open = toggle
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      this.controlSidebarService.toggleSidebarOpen(this.open);
    }
  }
}
