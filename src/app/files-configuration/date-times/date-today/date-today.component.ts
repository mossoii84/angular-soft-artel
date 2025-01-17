import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-today',
  imports: [CommonModule],
  templateUrl: './date-today.component.html',
  styleUrl: './date-today.component.scss'
})
export class DateTodayComponent {

  today: any;

  constructor() {}

  ngOnInit(): void {
    this.today = Date.now();
  }

}
