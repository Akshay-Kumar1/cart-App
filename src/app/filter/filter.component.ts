import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

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
  minimumValue = 0;
  maximumValue = 1000;
  filterItemLoad = false;
  constructor( private dataService: DataService) { }

  ngOnInit() {

  }
  sliderEvent(event) {
    this.arrayOfItemsToSort = this.arrayOfItemsToSort.filter(item => item.discountedPrice >= event);
  }
  filterItems() {
      this.messageEvent.emit(this.arrayOfItemsToSort);
      this.filterEvent.emit(this.filterItemLoad);
  }

}
