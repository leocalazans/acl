import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-menu-site',
  templateUrl: './menu-site.component.html',
  styleUrls: ['./menu-site.component.scss']
})
export class MenuSiteComponent implements OnInit {

  constructor(){}


  ngOnInit() {
   let test =  window.innerWidth;
   //  document.readyState === "complete"
   
   window.onload = () => {
    let wrap_drawer = document.querySelector('.js_drawer');
    // let menu_drawer = document.querySelector('#menuBtn');
    // console.log(wrap_drawer);
    // menu_drawer.addEventListener('click', ()=>{document.querySelector('.js_drawer').toggle();  });

    // let menuDesk = document.querySelector('.menuToolbal');
    // let hideEl = el => el.remove();
    // (test <= 425) ? hideEl(menuDesk) :null ;
    };
  }

}
