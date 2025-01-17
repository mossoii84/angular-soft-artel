import { Component } from '@angular/core';
import { Iconslist } from '../../files-configuration/icons/icons-list';

@Component({
  selector: 'app-task-breadcrumbs',
  imports: [],
  templateUrl: './task-breadcrumbs.component.html',
  styleUrl: './task-breadcrumbs.component.scss'
})
export class TaskBreadcrumbsComponent {

  iconsList = Iconslist;
  
}
