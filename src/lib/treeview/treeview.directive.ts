import { Directive, HostListener, Input, ElementRef, HostBinding, ContentChild, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TreeviewMenuDirective } from '../treeview-menu/treeview-menu.directive';
import { TreeviewToggleDirective } from '../treeview-toggle/treeview-toggle.directive';

@Directive({
  selector: '[lteTreeview]',

})
export class TreeviewDirective implements OnChanges, OnInit {
  @HostBinding('class.menu-open') @Input()
  open = false;

  @HostBinding('class.treeview')
  readonly treeview = true;

  @ContentChild(TreeviewMenuDirective)
  private treeviewMenu?: TreeviewMenuDirective;

  @ContentChild(TreeviewToggleDirective)
  private treeviewToggle?: TreeviewToggleDirective;

  ngOnChanges(changes: SimpleChanges): void {
    const openChange = changes['open'];
    if (openChange && openChange.currentValue && openChange.currentValue !== openChange.previousValue) {
      this.toggleOpen(openChange.currentValue);
    }
  }

  ngOnInit(): void {
    if (this.treeviewToggle) {
      this.treeviewToggle.treeviewToggled$.subscribe(() => this.toggleOpen());
    }
  }

  toggleOpen(value?: boolean) {
    value = value || !this.open;
    this.open = value;

    if (this.treeviewMenu) {
      this.treeviewMenu.visible = value;
    }
  }
}
