import { Component, OnInit } from '@angular/core';
import { SimplelibComponentBase } from './simplelib.component.base';

@Component({
  selector: 'lib-simplelib',
  template: `<lib-label1></lib-label1>`,
  styles: []
})
export class SimplelibComponent extends SimplelibComponentBase implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

  public someFunction() {
    console.log("123...");
  }
}
