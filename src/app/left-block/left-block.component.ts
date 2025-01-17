import { Component } from '@angular/core';
import { DateTodayComponent } from '../files-configuration/date-times/date-today/date-today.component';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { LeftBlockMenuComponent } from "../left-block-menu/left-block-menu.component";
import { ButtonDropdownComponent } from '../files-configuration/button-dropdown/button-dropdown.component';
import { HeaderWebComponent } from "../headers/header-web/header-web.component";

@Component({
  selector: 'app-left-block',
  standalone:true,
  imports: [FormsModule, DateTodayComponent, SelectModule, LeftBlockMenuComponent, ButtonDropdownComponent, HeaderWebComponent],
  templateUrl: './left-block.component.html',
  styleUrl: './left-block.component.scss'
})
export class LeftBlockComponent {







}
