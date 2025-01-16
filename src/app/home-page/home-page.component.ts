import { Component, inject, OnInit } from '@angular/core';
import { ResponsiveConfComponent } from "../responsive-conf/responsive-conf.component";
import { LeftBlockComponent } from "../left-block/left-block.component";
import { RightBlockComponent } from "../right-block/right-block.component";
import { ConfService } from '../services/conf-service.service';
import { Conf } from '../enums/conf.enum';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule,ResponsiveConfComponent, LeftBlockComponent, RightBlockComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

    confService = inject(ConfService);
    subscription!: Subscription;

    conf = Conf;
    versionCurrentRange: string | undefined;

    ngOnInit(): void {
      this.subscription = this.confService.getRange().subscribe(
        data => { this.versionCurrentRange=data});
       console.log("this====",this.versionCurrentRange)
    }



    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
