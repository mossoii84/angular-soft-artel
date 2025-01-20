import { Component } from '@angular/core';
import { Iconslist } from '../../files-configuration/icons/icons-list';

@Component({
  selector: 'app-task-buttons',
  imports: [],
  templateUrl: './task-buttons.component.html',
  styleUrl: './task-buttons.component.scss',
  standalone:true
})
export class TaskButtonsComponent {

  iconsList = Iconslist;


}
