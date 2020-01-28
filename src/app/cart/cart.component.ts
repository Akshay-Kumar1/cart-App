import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any;
  cartArray: any = [];
  priceDetails = 'PRICE DETAILS';
  disCountPriceCart: any;
  id: any;
  removeCart = false;
  loading = false;
  cartLoading = false;
  cartMessage = 'Your cart seems empty !';
  addItemToCartButton = 'Add Items';
  constructor( private dataService: DataService , private router: Router) { }
  ngOnInit() {
    setTimeout(() => {
      this.cartLoading = false;
      }, 1500);
    this.cartLoading = true;
    this.dataService.currentMessage.subscribe(result => result);
    this.dataService.cartId.subscribe((cartId: any) => {
      this.cartItems = cartId;
      this.disCountPriceCart = this.cartItems.dicountAmount;
    });
    this.cartArray.push(this.cartItems);
  }
  removeItem(id) {
    this.removeCart = true;
    this.cartArray = [];

  }
  redirectToCatalogue() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigateByUrl('catalogue');
      }, 1500);
  }
}
