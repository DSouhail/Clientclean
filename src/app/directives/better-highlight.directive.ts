import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'blue'
    ); */
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /* this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'transparent'
    ); */
    this.backgroundColor = this.highlightColor;
  }
}
