import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/authentication.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  submitted: boolean;
  constructor(public authenticationService: AuthenticationService) {}
  signOut() {
    this.authenticationService.SignOut();
  }   
  ngOnInit() {
    // (authenticationService.userData | async)? : ;
    // var  aut_info = this.authenticationService.user.email;
    // console.log(aut_info);
    var  aut_info = localStorage.getItem('userMail');
    var  aut_infos = sessionStorage.getItem('userMail');
    console.log(aut_info);
    console.log(aut_infos);
  }

}
