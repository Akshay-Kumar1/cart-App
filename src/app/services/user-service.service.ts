import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpServiceService , private httpClient: HttpClient) { }

  getItems(): Observable<CartModel> {
    return this.httpClient.get<CartModel>(environment.mainUrl);
  }
}
