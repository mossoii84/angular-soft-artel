import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.scss'
})
export class HeaderWebComponent  implements OnInit {


  ngOnInit(): void {
     console.log("header")
  }

    
    


}
