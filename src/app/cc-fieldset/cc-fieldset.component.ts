import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cc-fieldset',
  templateUrl: './cc-fieldset.component.html',
  styleUrls: ['./cc-fieldset.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        overflow: 'auto',
        height: '*'
      })),
      state('out', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class CcFieldsetComponent implements OnInit {

  @Input() header: string = '';
  @Input() toggleable: boolean = false;
  @Input() collapsed: boolean = false;
  @Input() maxHeight?: number;

  visibilityState: string = 'out';

  constructor() { }

  ngOnInit() {
    this.visibilityState = this.collapsed === true ? 'out' : 'in';
  }

  toggleFieldset(): void {
    if (this.toggleable === true) {
      this.collapsed = !this.collapsed;
      this.visibilityState = this.collapsed === true ? 'out' : 'in';
    }
  }
}
