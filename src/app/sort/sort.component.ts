import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Input() arrayOfItemsToSort: any;
  public valuePrice = 0;
  maximumValue = 1000;
  isActive = 0;
  isActiveHigh = 0;
  isActiveDiscount = 0;
  constructor() { }

  ngOnInit() {

  }
  highToLow() {
    this.isActiveHigh = 1;
    this.isActive = 0;
    this.isActiveDiscount = 0;
    this.arrayOfItemsToSort.sort(( itemPriceHigh, itemPriceLow) => {
      return itemPriceHigh.discountedPrice - itemPriceLow.discountedPrice;
    });
    return this.arrayOfItemsToSort.reverse();
  }
  lowToHigh() {
    this.isActive = 1;
    this.isActiveHigh = 0;
    this.isActiveDiscount = 0;
    this.arrayOfItemsToSort.sort(( itemPriceHigh, itemPriceLow) => {
    return itemPriceHigh.discountedPrice - itemPriceLow.discountedPrice;
  });
  }
  sortbyDiscount() {
    this.isActiveDiscount = 1;
    this.isActiveHigh = 0;
    this.isActive = 0;
    this.arrayOfItemsToSort.sort(( lowDiscount , highDiscount) => {
      return lowDiscount.discount - highDiscount.discount;
    });
  }
  sliderEvent(event) {
    this.arrayOfItemsToSort.filter((itemPriceLow) => {
      return (itemPriceLow.discountedPrice <= event);
  });
  }
}
