import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { SplitButton } from 'primeng/splitbutton';


@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, SelectModule],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.scss'
})
export class HeaderWebComponent  implements OnInit {


  cities: any | undefined;
  selectedCity: string | undefined;
  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
      ];
      console.log("header")
  }

    
  // всплывюещее меню Select круг
  activeItemR: boolean = false;
  public openListItemsR(): void {
    this.activeItemR = !this.activeItemR;
  }
  

    
    


}
