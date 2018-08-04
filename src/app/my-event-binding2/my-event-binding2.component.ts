import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-binding2',
  templateUrl: './my-event-binding2.component.html',
  styleUrls: ['./my-event-binding2.component.css']
})
export class MyEventBinding2Component implements OnInit {
  onKey(value) {
    console.log(`Input value: ${value}`);
}
  constructor() { }

  ngOnInit() {
  }

}
