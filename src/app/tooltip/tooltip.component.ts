import { Component, Input, OnInit } from '@angular/core';
import { Tooltip } from './tooltip.type';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input('tooltip') obj?: Tooltip;
  constructor() {}

  ngOnInit(): void {
    console.log(this.obj);
  }
}
