import { Component, OnInit ,Output,Input, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-banner-pages',
  templateUrl: './banner-pages.component.html',
  styleUrls: ['./banner-pages.component.scss']
})

export class BannerPagesComponent implements OnInit {
  @Input() public banner;

  bkUrl = {};   


  constructor() { }

  ngOnInit() {  }
  getBkUrl() {
    return this.banner[0].backgorund;
  }
}
