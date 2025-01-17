import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Iconslist } from '../../icons/icons-list';

@Component({
  selector: 'app-time-now',
  imports: [CommonModule],
  templateUrl: './time-now.component.html',
  styleUrl: './time-now.component.scss'
})
export class TimeNowComponent {

  iconsList = Iconslist;
  
  times: any;
  constructor() {}

  ngOnInit(): void {
    this.times = Date.now();
  }
}
