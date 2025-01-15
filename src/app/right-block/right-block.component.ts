import { Component } from '@angular/core';
import { TimeNowComponent } from '../date-times/time-now/time-now.component';

@Component({
  selector: 'app-right-block',
  imports: [TimeNowComponent],
  templateUrl: './right-block.component.html',
  styleUrl: './right-block.component.scss'
})
export class RightBlockComponent {

}
