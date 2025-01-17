import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { ButtonDropdownComponent } from "../../files-configuration/button-dropdown/button-dropdown.component";


@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, SelectModule, ButtonDropdownComponent],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.scss'
})
export class HeaderWebComponent  implements OnInit {



  ngOnInit() {

  }



    
    


}
