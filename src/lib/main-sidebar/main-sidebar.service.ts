import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MainSidebarService {
  private sidebarCollapseToggledSource = new Subject<boolean>();
  private miniSidebarToggledSource = new Subject<boolean>();

  sidebarCollapseToggled$ = this.sidebarCollapseToggledSource.asObservable();
  miniSidebarToggled$ = this.miniSidebarToggledSource.asObservable();

  toggleMiniSidebar(toggle: boolean) {
    this.miniSidebarToggledSource.next(toggle);
  }

  toggleSidebarCollapse(toggle: boolean) {
    this.sidebarCollapseToggledSource.next(toggle);
  }
}
