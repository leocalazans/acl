import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {
  banner: Object[];
  // @Input() banner: Object[];

  constructor() { 
    this.banner = [
      {
        nome: 'PartnerShip',
        backgorund: './../../../../assets/images/bg_partner.jpg',
        dead: 'home',
        dead_link: '/'
      }]
  }

  ngOnInit() {
  }

}
