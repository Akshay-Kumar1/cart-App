import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { CartViewModel } from '../models/view-model/cart.view-model';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})

export class CatalogueComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  arrayOfItems: any;
  itemLength: any;
  discountPrice: any;
  buttonName = 'Add to Cart';
  id: string;
  catalogueLoading = false;
  message: any;
  noFilteredItems = false;
  public vm: CartViewModel = new CartViewModel();
  constructor(private userService: UserServiceService , private dataService: DataService , private router: Router) { }

  ngOnInit() {
    this.getCatalogueItems();
    setTimeout(() => {
      this.catalogueLoading = false;
      }, 1500);
    this.catalogueLoading = true;
  }
 public getCatalogueItems() {
  this.userService.getItems()
  .pipe(takeUntil(this.destroy$))
    .subscribe((data: any) => {
      this.arrayOfItems = data;
      this.dataService.changeMessage(this.arrayOfItems);
      this.itemLength = Object.keys(data).length;
      for (let i = 0 ; i <  this.itemLength; i++) {
        this.discountPrice = (data[i].discount * data[i].price) / 100;
        // tslint:disable-next-line:no-string-literal
        data[i]['discountedPrice'] = data[i].price - Math.ceil(this.discountPrice);
        data[i]['discountAmount'] = data[i].price - data[i].discountedPrice;
      }
    },
  error => {
    alert(error);
  });
  }
  addToCart(id) {
      this.arrayOfItems.forEach(element => {
        // tslint:disable-next-line:no-conditional-assignment
        if (element.id === id) {
          this.dataService.changeCart(element);
          this.router.navigateByUrl('cart');
        }
      });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  receiveMessage(event) {
    setTimeout(() => {
      this.catalogueLoading = false;
    }, 1500);
    this.arrayOfItems = event;
    this.catalogueLoading = true;
  }
  filterStatus(event) {
    this.noFilteredItems = event;
  }
}
