import { Component } from '@angular/core';
import { TaskAuthorComponent } from './task-author/task-author.component';
import { TaskBreadcrumbsComponent } from './task-breadcrumbs/task-breadcrumbs.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { TaskTitleComponent } from './task-title/task-title.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskAuthorComponent, TaskBreadcrumbsComponent,TaskStatusComponent, TaskTitleComponent, AccordionModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

}
