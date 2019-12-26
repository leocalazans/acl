import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) {}
  signOut() {
    this.authenticationService.SignOut();
  }   
  ngOnInit() {
    // (authenticationService.userData | async)? : ;
  }

}
