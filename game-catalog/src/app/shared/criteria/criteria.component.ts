import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges, 
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styles: [],
})
export class CriteriaComponent implements OnInit, AfterViewInit, OnChanges {
  // listFilter!: string;
  @ViewChild('filterElement', { static: false })
  filterElementRef!: ElementRef<HTMLInputElement>;
  @Input() displayDetail!: boolean;
  @Input() hitCount = 0;
  hitMessage = '';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _listFilter!: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChange.emit(value);
  }

  
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = 'No matches found'
    } else {
      this.hitMessage = `Hits: ${this.hitCount}`;
    }
  }
  

  ngAfterViewInit(): void {
    this.filterElementRef.nativeElement.focus();
  }

  ngOnInit(): void {}
}

// event / listener
// 'my event' -> (fn) // [fn1, fn2, fn3, ....]
// trigger -> forEach (fn...) 
