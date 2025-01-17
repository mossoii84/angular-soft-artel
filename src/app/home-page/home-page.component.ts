import { Component, inject, OnInit } from '@angular/core';
import { LeftBlockComponent } from "../left-block/left-block.component";
import { RightBlockComponent } from "../right-block/right-block.component";
import { ConfService } from '../services/conf-service.service';
import { Conf } from '../files-configuration/enums/conf.enum';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ResponsiveConfComponent } from '../files-configuration/responsive-conf/responsive-conf.component';
import { RightBlockMenuComponent } from "../right-block-menu/right-block-menu.component";

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, LeftBlockComponent, RightBlockComponent, ResponsiveConfComponent, RightBlockMenuComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

    confService = inject(ConfService);
    subscription!: Subscription;

    conf = Conf;
    versionCurrentRange: string | undefined;
    constructor(){
      this.subscription = this.confService.getRange().subscribe(
        data => { this.versionCurrentRange=data
       console.log(this.versionCurrentRange)
      });
    }

    ngOnInit(): void {
      
    }



    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
