import { Component } from '@angular/core';
import { TimeNowComponent } from '../files-configuration/date-times/time-now/time-now.component';
import { AvatarComponent } from '../files-configuration/avatar/avatar.component';

@Component({
  selector: 'app-right-block-menu',
  imports: [TimeNowComponent, AvatarComponent ],
  templateUrl: './right-block-menu.component.html',
  styleUrl: './right-block-menu.component.scss'
})
export class RightBlockMenuComponent {

}
