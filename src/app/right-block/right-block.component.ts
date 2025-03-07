import { Component } from '@angular/core';
import { TaskAuthorComponent } from '../tasks-block/task-author/task-author.component';
import { TaskBreadcrumbsComponent } from '../tasks-block/task-breadcrumbs/task-breadcrumbs.component';
import { TaskStatusComponent } from '../tasks-block/task-status/task-status.component';
import { TaskTitleComponent } from '../tasks-block/task-title/task-title.component';
import { CommonModule } from '@angular/common';
import { Iconslist } from '../files-configuration/icons/icons-list';

@Component({
  selector: 'app-right-block',
  imports: [CommonModule, TaskAuthorComponent, TaskBreadcrumbsComponent, TaskStatusComponent, TaskTitleComponent],
  templateUrl: './right-block.component.html',
  styleUrl: './right-block.component.scss',
  standalone: true,
})
export class RightBlockComponent {
  iconsList = Iconslist;

  tasksList = [
    {
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
    {
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
    {
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
    {
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
    {
      taskName: 'Анализ пользовательского поведения',
      author: 'Валерий Чернов',
      taskId: 'TR-335',
      timeRequired: '5ч',
      status: [
        { title: 'Frontend'},
        { title: 'Backend'},
        { title: 'Testing'},
        { title: 'NoStatus'}
      ],
      type: 'Analytics'
    },
    {
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


  ];
}
