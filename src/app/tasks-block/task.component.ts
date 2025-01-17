import { Component } from '@angular/core';
import { TaskAuthorComponent } from './task-author/task-author.component';
import { TaskBreadcrumbsComponent } from './task-breadcrumbs/task-breadcrumbs.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { TaskTitleComponent } from './task-title/task-title.component';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { Iconslist } from '../files-configuration/icons/icons-list';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskAuthorComponent, TaskBreadcrumbsComponent,TaskStatusComponent, TaskTitleComponent, AccordionModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  iconsList = Iconslist;

  isOpen:boolean=true;
  isOpen2:boolean=true;
  openClose(){
    this.isOpen = !this.isOpen;
  }
  openClose2(){
    this.isOpen2 = !this.isOpen2;
  }
}
