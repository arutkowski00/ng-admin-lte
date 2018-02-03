import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { MainSidebarService } from '../main-sidebar/main-sidebar.service';

@Component({
  selector: 'lte-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnChanges, OnInit {
  private sidebarCollapse: boolean;
  private sidebarMini: boolean;
  private skinClass?: string;

  @Input() color: string;
  @Input() light: boolean;

  constructor(private mainSidebarService: MainSidebarService) {
    this.mainSidebarService.sidebarCollapseToggled$.subscribe(
      toggle => this.sidebarCollapse = toggle
    );

    this.mainSidebarService.miniSidebarToggled$.subscribe(
      toggle => this.sidebarMini = toggle
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color'] || changes['light']) {
      if (!this.color) {
        this.skinClass = undefined;
      } else {
        let result = `skin-${this.color}`;
        if (this.light) {
          result += '-light';
        }

        this.skinClass = result;
      }
    }
  }

  ngOnInit(): void {
    if (this.color === undefined) {
      throw new Error('Attribute \'color\' is required');
    }
  }
}
