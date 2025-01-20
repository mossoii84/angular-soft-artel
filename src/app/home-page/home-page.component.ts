import { Component, inject, OnInit } from '@angular/core';
import { LeftBlockComponent } from "../left-block/left-block.component";
import { RightBlockComponent } from "../right-block/right-block.component";
import { ConfService } from '../services/conf-service.service';
import { Conf } from '../files-configuration/enums/conf.enum';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ResponsiveConfComponent } from '../files-configuration/responsive-conf/responsive-conf.component';
import { RightBlockMenuComponent } from "../right-block-menu/right-block-menu.component";
import { HeaderWebComponent } from "../headers/header-web/header-web.component";
import { LeftBlockMenuComponent } from "../left-block-menu/left-block-menu.component";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-home-page',
  imports: [CommonModule, LeftBlockComponent, RightBlockComponent, ResponsiveConfComponent, RightBlockMenuComponent, HeaderWebComponent, LeftBlockMenuComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

    confService = inject(ConfService);
    subscription!: Subscription;

    conf = Conf;
    versionCurrentRange: string | undefined;
    constructor(){
      this.subscription = this.confService.getRange()
      .pipe(takeUntilDestroyed())
      .subscribe(
        data => { this.versionCurrentRange=data
       console.log(this.versionCurrentRange)
      });
    }


}
