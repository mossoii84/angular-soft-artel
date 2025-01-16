import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HeaderWebComponent } from "../headers/header-web/header-web.component";
import { HeaderMobileComponent } from "../headers/header-mobile/header-mobile.component";
import { ConfService } from '../services/conf-service.service';
import { Conf } from '../enums/conf.enum';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-responsive-conf',
  standalone: true,
  imports: [CommonModule, HeaderWebComponent, HeaderMobileComponent],
  templateUrl: './responsive-conf.component.html',
  styleUrl: './responsive-conf.component.scss'
})
export class ResponsiveConfComponent {

  breakpointObserver= inject(BreakpointObserver)
  confService = inject(ConfService)
  activetesRoute= inject(ActivatedRoute)
  router = inject(Router)

  protected currentRange?: 'Handset' | 'Tablet' | 'Web';
  private subscription!: Subscription;



  ngOnInit() {
    this.getSreenSize();
  }

  getSreenSize(){
    this.subscription =
      this.breakpointObserver
        .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
        .subscribe(() => {
          if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
            this.confService.setRange(Conf.MOBILE)
            this.currentRange = 'Handset';
            console.log('Handset');
          }
          if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
            this.confService.setRange(Conf.TABLET)
            this.currentRange = 'Tablet';
            console.log('Tablet');
          }
          if (this.breakpointObserver.isMatched(Breakpoints.Web)) {
            this.confService.setRange(Conf.WEB)
            this.currentRange = 'Web';
            console.log('Web');
          }
        });
  }



  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
