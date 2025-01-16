import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-left-block-menu',
  imports: [CommonModule,RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './left-block-menu.component.html',
  styleUrl: './left-block-menu.component.scss',
  standalone:true,
})
export class LeftBlockMenuComponent {

}
