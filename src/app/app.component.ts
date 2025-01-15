import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveConfComponent } from './responsive-conf/responsive-conf.component';
import { LeftBlockComponent } from './left-block/left-block.component';
import { RightBlockComponent } from './right-block/right-block.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ResponsiveConfComponent, LeftBlockComponent, RightBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-soft-artel';
}
