import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { Options , LabelType} from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() arrayOfItemsToSort: any;
  @Output() messageEvent = new EventEmitter();
  @Output() filterEvent = new EventEmitter();
  filterItemLoad = false;
  noFilteredItems = false;
  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 600,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<span>Min price:</span> \u20B9' + value;
        default:
          return '\u20B9' + value;
      }
    }
  };
  constructor( private dataService: DataService) { }

  ngOnInit() {

  }

  sliderEvent(value) {
    this.arrayOfItemsToSort = this.arrayOfItemsToSort.filter(item => item.discountedPrice >= value);
  }
  filterItems() {
      this.messageEvent.emit(this.arrayOfItemsToSort);
      if (this.arrayOfItemsToSort.length === 0) {
        this.noFilteredItems = true;
        this.filterEvent.emit( this.noFilteredItems);
      }
  }
}
