import { Injectable } from "@angular/core";
import { Conf } from "../files-configuration/enums/conf.enum";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
export class ConfService {


    public currentRangeSubject = new BehaviorSubject<Conf>(Conf.DEFAULT);  
    currentRange$: Observable<Conf>  = this.currentRangeSubject.asObservable();
  

    setRange(range: Conf) {
      this.currentRangeSubject.next(range);
    }
  

    getRange(): Observable<Conf>  {
      return this.currentRange$;
    }


}