import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskStatus } from '../../enums/task-status.enum';

@Component({
  selector: 'app-task-status',
  imports: [CommonModule],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.scss'
})
export class TaskStatusComponent implements OnInit{
 
  enumStatus = TaskStatus;  // Экспортируем enum в шаблон

  statusArray:TaskStatus[] = [];

    ngOnInit(): void {
      if(this.statusArray.length <=4){
        this.statusArray.push(1);
        this.statusArray.push(2);
        this.statusArray.push(2);
        this.statusArray.push(0);
        console.log(this.statusArray)
      }
    }

    //myArray.pop();//удаляем посл эл
}
