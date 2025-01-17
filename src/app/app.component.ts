import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-soft-artel';



   tasks = [
    {
      taskName: 'Разработка главной страницы',
      author: 'Иван Иванов',
      taskId: 'TR-331',
      timeRequired: '5ч',
      status: 'Frontend',
      type: 'Frontend'
    },
    {
      taskName: 'API для авторизации пользователей',
      author: 'Мария Петрова',
      taskId: 'TR-332',
      timeRequired: '4ч',
      status: 'Backend',
      type: 'Backend'
    },
    {
      taskName: 'Тестирование функционала поиска',
      author: 'Дмитрий Сидоров',
      taskId: 'TR-333',
      timeRequired: '3ч',
      status: 'Testing',
      type: 'Testing'
    },
    {
      taskName: 'Дизайн главной страницы',
      author: 'Анна Смирнова',
      taskId: 'TR-334',
      timeRequired: '6ч',
      status: 'Design',
      type: 'Design'
    },
    {
      taskName: 'Анализ пользовательского поведения',
      author: 'Валерий Чернов',
      taskId: 'TR-335',
      timeRequired: '5ч',
      status: 'Analytics',
      type: 'Analytics'
    },
    {
      taskName: 'Исправление ошибок в адаптивности',
      author: 'Ольга Кузнецова',
      taskId: 'TR-336',
      timeRequired: '2ч',
      status: 'Frontend',
      type: 'Frontend'
    },
    {
      taskName: 'Настройка базы данных для проекта',
      author: 'Петр Васильев',
      taskId: 'TR-337',
      timeRequired: '7ч',
      status: 'Backend',
      type: 'Backend'
    },
    {
      taskName: 'Тестирование на различных устройствах',
      author: 'Светлана Алексеева',
      taskId: 'TR-338',
      timeRequired: '3ч',
      status: 'Testing',
      type: 'Testing'
    }
  ];
  
  
}
