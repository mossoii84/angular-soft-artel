import { Injectable } from "@angular/core";
import { Conf } from "../enums/conf.enum";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class ConfService {


    public currentRangeSubject = new BehaviorSubject<Conf>(Conf.DEFAULT);  // Инициализируем значением по умолчанию
    currentRange$: Observable<Conf>  = this.currentRangeSubject.asObservable();
  

    setRange(range: Conf) {
      this.currentRangeSubject.next(range);
    }
  

    getRange(): Observable<Conf>  {
      return this.currentRange$;
    }


}