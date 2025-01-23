import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TaskStatus } from '../../files-configuration/enums/task-status.enum';

@Component({
  selector: 'app-task-status',
  imports: [CommonModule],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.scss'
})
export class TaskStatusComponent implements OnInit{
  @Input() statusList:any;
  enumStatus = TaskStatus;  



    ngOnInit(): void {

    }


}
