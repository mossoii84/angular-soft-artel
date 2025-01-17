import { Component } from '@angular/core';
import { TaskAuthorComponent } from '../tasks-block/task-author/task-author.component';
import { TaskBreadcrumbsComponent } from '../tasks-block/task-breadcrumbs/task-breadcrumbs.component';
import { TaskStatusComponent } from '../tasks-block/task-status/task-status.component';
import { TaskTitleComponent } from '../tasks-block/task-title/task-title.component';

@Component({
  selector: 'app-right-block',
  imports: [TaskAuthorComponent, TaskBreadcrumbsComponent, TaskStatusComponent, TaskTitleComponent],
  templateUrl: './right-block.component.html',
  styleUrl: './right-block.component.scss',
  standalone: true,
})
export class RightBlockComponent {

}
