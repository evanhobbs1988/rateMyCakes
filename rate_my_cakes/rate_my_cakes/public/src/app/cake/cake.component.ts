import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  @Input() currentCake: any;
  @Input() showCakePressed: boolean;
  @Input() cakeAvg: number;

  comments = [];
  rate_count = 0;

  constructor() { }

  ngOnInit() {
  }

}
