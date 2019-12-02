/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Angular 会在模板中定位每个拥有名叫 appHighlight 属性的元素，并且为这些元素加上本指令的逻辑。
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // 使用 ElementRef 来注入宿主 DOM 元素的引用，也就是你放置 appHighlight 的那个元素。
  constructor(private el: ElementRef) {}

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  // ElementRef通过其nativeElement属性给你了直接访问宿主DOM元素的能力
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/