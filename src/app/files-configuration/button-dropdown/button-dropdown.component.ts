import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-dropdown',
  imports: [CommonModule],
  templateUrl: './button-dropdown.component.html',
  styleUrl: './button-dropdown.component.scss'
})
export class ButtonDropdownComponent {
  @Input() btnTitle: string = "";
  @Input() listTitle: string = "";
  @Input() items: string[] = []; 
  @Input() btnWidth:string="100px";
  @Input() textColor:string="black";
  @Input() borderColor:string="white";


  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


}
