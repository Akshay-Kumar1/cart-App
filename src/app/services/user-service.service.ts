import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpServiceService , private httpClient: HttpClient) { }

  getItems(): Observable<CartModel> {
    return this.httpClient.get<CartModel>('https://api.myjson.com/bins/qzuzi');
  }
}
