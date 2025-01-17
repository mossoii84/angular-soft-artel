import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent implements OnInit{
  @Input() avatarWidth: string ='';
  @Input() avatarHeight: string ='';

  ngOnInit(): void {

  }


}
