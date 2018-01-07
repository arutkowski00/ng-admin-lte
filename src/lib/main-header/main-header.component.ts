import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MainSidebarService } from '../main-sidebar/main-sidebar.service';

@Component({
  selector: 'lte-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  ngOnInit() {
  }
}
