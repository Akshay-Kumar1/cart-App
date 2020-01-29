import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { setPreviousOrParentTNode } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() arrayOfItemsToSort: any;
  @Output() messageEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();
  public valuePrice = 0;
  step = 200;
  minimumValue = 0;
  maximumValue = 1000;
  filterItemLoad = false;
  noFilteredItems = false;
  constructor( private dataService: DataService) { }

  ngOnInit() {

  }
  sliderEvent(event) {
    this.arrayOfItemsToSort = this.arrayOfItemsToSort.filter(item => item.discountedPrice >= event);
  }
  filterItems() {
      this.messageEvent.emit(this.arrayOfItemsToSort);
      if (this.arrayOfItemsToSort.length === 0) {
        this.noFilteredItems = true;
        this.filterEvent.emit( this.noFilteredItems);
      }
  }
}
