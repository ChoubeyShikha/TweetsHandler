import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewService {
 public handelesData = new BehaviorSubject({});
 getHandleData = this.handelesData.asObservable();

  constructor() {
   }

  setData(data: any){
    this.handelesData.next(data);
  }
}
