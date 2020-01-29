import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  banner: Object[];
  panelOpenState: boolean;
  constructor() {
    this.banner = [
      {
        nome: 'What´s AirSoccer ?',
        backgorund: './../../../../assets/images/bg__white.jpg',
        dead: 'Home',
        dead_link: '/home'
      }]
  }

  ngOnInit() {
  }

}
