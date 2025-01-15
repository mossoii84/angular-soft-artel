import { Component } from '@angular/core';
import { TaskComponent } from '../tasks-block/task.component';
import { DateTodayComponent } from '../date-times/date-today/date-today.component';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-left-block',
  imports: [TaskComponent, FormsModule, DateTodayComponent, SelectModule],
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.scss'
})
export class LeftBlockComponent {


  cities: any | undefined;

  selectedCity: string | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
      ];
  }
}
