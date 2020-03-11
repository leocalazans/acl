import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  current_route: string;
  constructor() { }

  ngOnInit() {
    this.current_route = window.location.pathname;
    console.log(this.current_route);
  }

}
