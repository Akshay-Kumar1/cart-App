import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getItems() {
    let products =
      [
        {
          "id": 1,
          "img_url": "./assets/kurkure.jpg",
          "price": 20,
          "discount": 5,
          "name":"Kurkure"
        },
      {
          "id": 2,
          "img_url": './assets/kitkat.jpg',
          "price": 10,
          "discount": 0,
          "name":"Kitkat"
        },
        {
          "id": 3,
          "img_url": './assets/celebrations.jpg',
          "price": 450,
          "discount": 10,
          "name":"Cadbury Celebrations"
        },
          {
          "id": 4,
          "img_url": './assets/maggi.jpg',
          "price": 60,
          "discount": 0,
          "name":"Maggi"
        },
            {
          "id": 5,
          "img_url": './assets/iphone.jpg',
          "price": 350,
          "discount": 20,
          "name":"iPhone 13 Pro Max 128GB"
        },
      ]
    return products
  }
}
