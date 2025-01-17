import { Component } from '@angular/core';
import { AvatarComponent } from '../../files-configuration/avatar/avatar.component';
import { Iconslist } from '../../files-configuration/icons/icons-list';

@Component({
  selector: 'app-task-author',
  imports: [AvatarComponent],
  templateUrl: './task-author.component.html',
  styleUrl: './task-author.component.scss'
})
export class TaskAuthorComponent {


  iconsList = Iconslist;
}
