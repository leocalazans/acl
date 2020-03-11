import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from './shared/authentication.service'
import { RegisterService } from './user.service';
import { Usersite } from './usersite';
import {TranslateService} from '@ngx-translate/core';
import {FormBuilder,FormControl,FormGroup,FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  email: string;
  received: string;
  constructor(
    public authenticationService: AuthenticationService, 
    private RegisterService: RegisterService,
  ) { }

  ngOnInit() {
  }

  usersite: Usersite = new Usersite();

  save() {
    this.RegisterService.createCustomer(this.usersite);
    this.usersite = new Usersite();
    this.received = "We receive your email we will notify you when everything is ready.";
  }
}
