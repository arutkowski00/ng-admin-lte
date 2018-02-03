import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[lteTreeviewMenu]'
})
export class TreeviewMenuDirective {
  @HostBinding('class.treeview-menu')
  readonly treeviewMenu = true;

  visible: boolean;
}
