import { Component } from '@angular/core';
import { TaskType } from '../../files-configuration/enums/task-type.enum';
import { Iconslist } from '../../files-configuration/icons/icons-list';

@Component({
  selector: 'app-task-breadcrumbs',
  imports: [],
  templateUrl: './task-breadcrumbs.component.html',
  styleUrl: './task-breadcrumbs.component.scss'
})
export class TaskBreadcrumbsComponent {

  enumType = TaskType;  // Экспортируем enum в шаблон
  iconsList = Iconslist;
  
}
