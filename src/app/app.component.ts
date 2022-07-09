import { Component } from '@angular/core';
import moment from 'moment';
import { Moment } from 'moment';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageLoaded: Moment;
  message: string;

  title = 'moment-example';
  constructor() {
    this.pageLoaded = moment(new Date());
    this.message = "";
  }
  ngOnInit(): void {


    interval(1000).pipe(map(
      (value) => moment(this.pageLoaded).fromNow(true)
    )).subscribe((value) =>
      this.message = value);

    console.log(this.message);
  }
}
