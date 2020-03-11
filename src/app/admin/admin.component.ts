import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../shared/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
