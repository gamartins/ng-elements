import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-slot',
  template: `
    <div>
      <h1>This is the title</h1>
      <slot name="content"></slot>
    </div>
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloSlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
