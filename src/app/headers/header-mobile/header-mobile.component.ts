import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent implements OnInit {



  userName$: Observable<any> | undefined;
  activeUserId: string | undefined | null;
  menuLiensActive = false;
  menuListActive = false;

  userAvatarName$: Observable<any> | undefined;
  activeUser: string | undefined;
  key:boolean | undefined;

  ngOnInit(): void {          
          this.key = document.cookie.split(';').length>1; // true
  }



  openClientLiens(): void { this.menuLiensActive = !this.menuLiensActive; }
  openClientList(): void { this.menuListActive = !this.menuListActive; }
  close() { this.menuListActive = false }








}
