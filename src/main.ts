import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//for rus date
import * as ru from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ru.default);



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
