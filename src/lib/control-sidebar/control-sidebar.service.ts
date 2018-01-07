import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ControlSidebarService {
  private sidebarOpenToggleSource = new Subject<boolean>();

  sidebarOpenToggled$ = this.sidebarOpenToggleSource.asObservable();

  toggleSidebarOpen(toggle: boolean) {
    this.sidebarOpenToggleSource.next(toggle);
  }
}
