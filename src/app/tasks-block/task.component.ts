import { Component, OnInit } from '@angular/core';
import { TaskAuthorComponent } from './task-author/task-author.component';
import { TaskBreadcrumbsComponent } from './task-breadcrumbs/task-breadcrumbs.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { TaskTitleComponent } from './task-title/task-title.component';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { Iconslist } from '../files-configuration/icons/icons-list';
import { TaskButtonsComponent } from "./task-buttons/task-buttons.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskAuthorComponent, TaskBreadcrumbsComponent, TaskStatusComponent, TaskTitleComponent, AccordionModule, TaskButtonsComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  iconsList = Iconslist;

  isOpen:boolean=true;
  isOpenNotReseived:boolean=true;


  breadcrumbs:boolean = false;
  taskNumber:number | undefined;  
  timeoutBreadcrumbs: any = null;

  footerBtn=true;
  timeoutFooterBtn: any = null;
  taskNumberFooterBtn:number | undefined;

 


  openClose(){
    this.isOpen = !this.isOpen;
  }
  openCloseNotReseived() {
    this.isOpenNotReseived = !this.isOpenNotReseived;
  }
  
  showBreadcrumbs(id:number) {
    this.timeoutBreadcrumbs = setTimeout(() => {
      if(!this.breadcrumbs){
        this.breadcrumbs = true;
        this.taskNumber=id;
      }
    }, 600);   
  }

  hideBreadcrumbs() {
    clearTimeout(this.timeoutBreadcrumbs);
    setTimeout(() => {
      if(this.breadcrumbs){
        this.breadcrumbs = false;
      }
    }, 600); 
  }



  showFooterBtn(id:number){
        this.footerBtn=!this.footerBtn;
        this.taskNumberFooterBtn=id;
  }












  tasksList = [
    { id:1,
      taskName: 'Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный'+ 
      'делитель. Первый аргумент - это массив чисел, а второй - делитель. Завершите функцию которая принимает два аргумента и возвращает все числа,'+ 
      'которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.',
      author: 'Иван Иванов',
      taskId: 'TR-331',
      timeRequired: '5ч',
      status: [
        { title: 'Frontend'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'Design'}
      ],
      type: 'Frontend'
    },
    {  id:2,
      taskName: 'Задача, которая была популярна в своё время на собеседованиях в Amazon. Мы русифицировали её,' +
      'но смысл остался тот же. Вам нужно продолжить последовательность.',
      author: 'Мария Петрова',
      taskId: 'TR-332',
      timeRequired: '4ч',
      status: [
        { title: 'Analytics'},
        { title: 'Backend'},
        { title: 'NoStatus'},
        { title: 'Design'}
      ],
      type: 'Backend'
    },
    {  id:3,
      taskName: 'Вопрос по С++. Что за ошибка «pure virtual function call»? '+
       'какой ситуации она может быть сгенерирована? Предоставьте минимальный код, приводящий к ней.',
      author: 'Дмитрий Сидоров',
      taskId: 'TR-333',
      timeRequired: '3ч',
      status: [
        { title: 'Frontend'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Testing'
    },
    {  id:4,
      taskName: 'Дизайн главной страницы',
      author: 'Анна Смирнова',
      taskId: 'TR-334',
      timeRequired: '6ч',
      status: [
        { title: 'Frontend'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Design'
    },
    {  id:5,
      taskName: 'Как и в случае планирования, подход в Agile к выполнению задач также является итеративным и фокусируется на завершении отдельных функций и задач — причем эти функции и задачи должны быть направлены на то, чтобы',
      author: 'Валерий Чернов',
      taskId: 'TR-335',
      timeRequired: '5ч',
      status: [
        { title: 'NoStatus'},
        { title: 'Analytics'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Analytics'
    },
    {  id:6,
      taskName: 'Исправление ошибок в адаптивности',
      author: 'Ольга Кузнецова',
      taskId: 'TR-336',
      timeRequired: '2ч',
      status: [
        { title: 'Frontend'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Frontend'
    },

    {  id:7,
      taskName: 'Как и в случае планирования, подход в Agile к выполнению задач также является итеративным и фокусируется на завершении отдельных функций и задач — причем эти функции и задачи должны быть направлены на то, чтобыИсправление ошибок в адаптивности',
      author: 'Ольга Кузнецова',
      taskId: 'TR-337',
      timeRequired: '2ч',
      status: [
        { title: 'Testing'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Frontend'
    },
    {  id:8,
      taskName: 'Фермер должен переправить через реку трёх своих "пассажиров": волка, козу и капусту.'+
      'У фермера есть лодка, но в ней он может перевозить только одного пассажира за раз. Есть несколько ограничений:',
      author: 'Ольга Кузнецова',
      taskId: 'TR-338',
      timeRequired: '2ч',
      status: [
        { title: 'Analytics'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Frontend'
    },
    {  id:9,
      taskName: 'Исправление ошибок в адаптивности',
      author: 'Ольга Кузнецова',
      taskId: 'TR-339',
      timeRequired: '2ч',
      status: [
        { title: 'Frontend'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Frontend'
    },
    {  id:10,
      taskName: 'Как и в случае планирования, подход в Agile к выполнению задач также является итеративным и фокусируется на завершении отдельных функций и задач — причем эти функции и задачи должны быть направлены на то, чтобы',
      author: 'Ольга Кузнецова',
      taskId: 'TR-340',
      timeRequired: '2ч',
      status: [
        { title: 'Analytics'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Frontend'
    },

  ];





}
