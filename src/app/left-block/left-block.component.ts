import { Component } from '@angular/core';
import { DateTodayComponent } from '../date-times/date-today/date-today.component';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { LeftBlockMenuComponent } from "../left-block-menu/left-block-menu.component";

@Component({
  selector: 'app-left-block',
  standalone:true,
  imports: [FormsModule, DateTodayComponent, SelectModule, LeftBlockMenuComponent],
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
