import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/authentication.service';
import { auth } from 'firebase/app';
import { dashboardService } from './dashboard.service';
import { Usersite } from './usersite'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  submitted: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private dashboardService:dashboardService
    ) {}
  signOut() {
    window.location.reload();
    this.authenticationService.SignOut();
    sessionStorage.setItem('reloadPage', 'reloader' );

  }  
  usersite: Usersite = new Usersite();
 
  ngOnInit() {
    // let relowd  = sessionStorage.getItem('reloadPage');
    // (authenticationService.userData | async)? : ;
    // var  aut_info = this.authenticationService.user.email;
    // console.log(aut_info);
    var  aut_info = localStorage.getItem('userMail');
    var  aut_infos = sessionStorage.getItem('userMail');
    console.log(aut_info);
    console.log(aut_infos);
    var text = false;


    // if (relowd = 'reloader'){
    //   sessionStorage.setItem('reloadPage', '   ' );

    //   window.location.reload();
    // }
    this.usersite.Email = 'leeonardo.alves@hotmail.com';
    this.dashboardService.getCustomersList();
 
  }

  // ngAfterViewInit(){
  //   this.ngOnInit();

  // }
}
