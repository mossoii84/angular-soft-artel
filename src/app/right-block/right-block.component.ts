import { Component } from '@angular/core';
import { TimeNowComponent } from '../date-times/time-now/time-now.component';
import { AccordionModule } from 'primeng/accordion';
import { TaskAuthorComponent } from '../tasks-block/task-author/task-author.component';
import { TaskBreadcrumbsComponent } from '../tasks-block/task-breadcrumbs/task-breadcrumbs.component';
import { TaskStatusComponent } from '../tasks-block/task-status/task-status.component';
import { TaskTitleComponent } from '../tasks-block/task-title/task-title.component';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-right-block',
  imports: [TimeNowComponent, TaskAuthorComponent, TaskBreadcrumbsComponent, TaskStatusComponent, TaskTitleComponent, AvatarComponent],
  templateUrl: './right-block.component.html',
  styleUrl: './right-block.component.scss',
  standalone: true,
})
export class RightBlockComponent {

}
