import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  banner: Object[];
  // @Input() banner: Object[];
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/bg__blur.jpg', '../assets/images/bg__blur.jpg', '../assets/images/bg__blur.jpg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 

  constructor() { 
    this.banner = [
      {
        nome: 'Tournaments',
        backgorund: './../../../../assets/images/bg_partner.jpg',
        dead: 'home',
        dead_link: '/'
      }]
  }

  ngOnInit() {
  }
  
}
