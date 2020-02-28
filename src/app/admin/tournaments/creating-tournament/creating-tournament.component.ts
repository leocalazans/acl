import { Component, OnInit } from '@angular/core';
import { Tournament } from './tournament';
import { FormsModule }   from '@angular/forms';
import { Location} from '@angular/common';
import { CreateTournamentService } from './create-tournament.service';
import { FormBuilder,FormControl,FormGroup,FormGroupDirective, NgForm, Validators, } from '@angular/forms';

export interface city {
  value: string;
  viewValue: string;
}
export interface country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-creating-tournament',
  templateUrl: './creating-tournament.component.html',
  styleUrls: ['./creating-tournament.component.scss']
})


export class CreatingTournamentComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  tournament: Tournament = new Tournament();

  constructor(
    private CreateTournamentService: CreateTournamentService,
    private _formBuilder: FormBuilder
  ) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  
  ngOnInit() {
  }

    citis: city[] = [
      {value: 'sp', viewValue: 'Mogi'},
      {value: 'rj', viewValue: 'Arujá'},
      {value: 'mj', viewValue: 'São Paulo'}
    ];

    country: country[] = [
      {value: 'sp', viewValue: 'Mogi'},
      {value: 'rj', viewValue: 'Arujá'},
      {value: 'mj', viewValue: 'São Paulo'}
    ];
  saveCountry(event){
      console.log(event.value);
      this.tournament.championshipCountry = event.value;
    }
    saveState(event){
      console.log(event.value);
      this.tournament.championshipState = event.value;
    }
  
  save() {
      this.CreateTournamentService.createCustomer(this.tournament);
      this.tournament  = new Tournament();
    }
}
