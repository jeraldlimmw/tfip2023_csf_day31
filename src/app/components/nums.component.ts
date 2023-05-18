import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-nums',
  templateUrl: './nums.component.html',
  styleUrls: ['./nums.component.css']
})
export class NumsComponent {

  // Angular 16 - allows you to dictate that the input is a required field
  @Input({required: true})
  value: number=0

  //event
  @Output()
  onSelected = new Subject<number>()

  pressed() {
    console.info(`value is ${this.value}`)
    this.onSelected.next(this.value)
  }

  incValue(v = 1){
    this.value += v
  }
}
