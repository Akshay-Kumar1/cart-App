import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  obj = {};

  private cartInfo = new BehaviorSubject(this.obj);
  cartId = this.cartInfo.asObservable();

  constructor() { }
  changeMessage(data: any) {
    this.messageSource.next(data);
  }
  changeCart(cartData: any) {
    this.cartInfo.next(cartData);
  }
}
