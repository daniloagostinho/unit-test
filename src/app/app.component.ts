import { Component } from '@angular/core';

@Component({
  selector: 'unit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  points = 1;

  plus1() {
    this.points++;
  }
}
