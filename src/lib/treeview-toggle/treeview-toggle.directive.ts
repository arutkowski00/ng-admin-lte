import { Directive, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Directive({
  selector: '[lteTreeviewToggle]'
})
export class TreeviewToggleDirective {
  private treeviewToggledSource = new Subject<void>();
  treeviewToggled$ = this.treeviewToggledSource.asObservable();

  @HostListener('click')
  toggleOpen() {
    this.treeviewToggledSource.next();
  }
}
