import { Component } from '@angular/core';
import { Tooltip } from './tooltip/tooltip.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bootstrap-check';

  tooltip1: Tooltip = {
    placement: 'bottom',
    delay: 500,
    text: 'Test',
  };
}
