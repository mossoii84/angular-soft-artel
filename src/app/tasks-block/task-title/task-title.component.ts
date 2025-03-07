import { Component, Input, OnInit } from '@angular/core';
import { TaskType } from '../../files-configuration/enums/task-type.enum';
import { CommonModule } from '@angular/common';
import { Iconslist } from '../../files-configuration/icons/icons-list';

@Component({
  selector: 'app-task-title',
  imports: [CommonModule],
  templateUrl: './task-title.component.html',
  styleUrl: './task-title.component.scss'
})
export class TaskTitleComponent implements OnInit {
  @Input() taskName="";
  @Input() taskId="";
  

  enumType = TaskType;  
  iconsList = Iconslist;


    ngOnInit(): void {
      
    }

}
