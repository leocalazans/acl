import { Component, OnInit, ViewChild, EventEmitter, Output, AfterViewInit, Input, ElementRef, NgZone, } from '@angular/core';
import { Tournament } from './tournament';

import { Location} from '@angular/common';
import { CreateTournamentService } from './create-tournament.service';
import { FormBuilder,FormControl,FormGroup,FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import { MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';

// declare module 'googlemaps';

export interface city {
  value: string;
  viewValue: string;
}
export interface country {
  value: string;
  viewValue: string;
}
export interface mode {
  value: string;
  viewValue: string;
}
export interface players {
  value: string;
  viewValue: string;
}
export interface tables {
  value: string;
  viewValue: string;
}
export interface sets {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-creating-tournament',
  templateUrl: './creating-tournament.component.html',
  styleUrls: ['./creating-tournament.component.scss']
})


export class CreatingTournamentComponent implements OnInit {
  
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public val : string;
  public addressTournament : Object = {
    street_number: 'Street number',
    route: 'Route',
    locality: 'Locality',
    administrative_area_level_1: 'State',
    administrative_area_level_2: 'Count',
    country: 'country',
    postal_code: 'postal code',
    
  };
  
  @ViewChild("search", {static: false} ) public searchElementRef: ElementRef;
  
  minDate: Date;
  maxDate: Date;
  tournament: Tournament = new Tournament();
  
  events: string[] = [];
  
  constructor(
    private CreateTournamentService: CreateTournamentService,
    private _formBuilder: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) {
      // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
      const currentYear = new Date().getFullYear();
      this.minDate = new Date(currentYear - 20, 0, 1);
      this.maxDate = new Date(currentYear + 1, 11, 31);
    }
    
    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.events.push(`${type}: ${event.value}`);
      // console.log(event.value);
      this.tournament.championshipDate = event.value;
    }
    
    ngOnInit() {
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;
      this.searchControl = new FormControl();
      this.setCurrentPosition();
    }

    citis: city[] = [
      {value: 'sp', viewValue: 'Mogi'},
      {value: 'rj', viewValue: 'Arujá'},
      {value: 'mj', viewValue: 'São Paulo'}
    ];

    modes: mode[] = [
      {value: 'Single', viewValue: 'Single'},
      {value: 'Double', viewValue: 'Double'},
    ];

    players: players[] = [
      {value: '20', viewValue: '20'},
      {value: '30', viewValue: '30'},
      {value: '40', viewValue: '40'},
      {value: '50', viewValue: '50'},
      {value: '60', viewValue: '60'},
      {value: '70', viewValue: '70'},
      {value: '80', viewValue: '80'},
    ];

    sets: sets[] = [
      {value: '2', viewValue: '2'},
      {value: '4', viewValue: '4'},
    ];
    tables: tables[] = [
      {value: '4', viewValue: '4'},
    ];
    
    country: country[] = [
      {value: 'sp', viewValue: 'Mogi'},
      {value: 'rj', viewValue: 'Arujá'},
      {value: 'mj', viewValue: 'São Paulo'}
    ];
    
    saveMode(event){
      console.log(event.value);
      this.tournament.TournamentMode = event.value;
    }
    savePlayer(event){
      this.tournament.TournamentmaxPlayers = event.target.value;
      console.log(event.target.value);
      this.tables.forEach(element => {
        var obj = element;

        // element.value = event.target.value;
        element.viewValue = event.target.viewValue;
        if (event.target.value > 20 && event.target.value < 30) {
          element.value = '2';
          element.viewValue = '2';
        }
        if (event.target.value > 30 && event.target.value < 40) {
          element.value = '2';
          element.viewValue = '3';
        }
        console.log('element.value');
        console.log(element.value);
        console.log('element.viewValue');
        console.log(element.viewValue);
      });

      if(event.target.value <= 20){
        // alert('2 mesas');
        // this.tables.value = 2;
        
      }
      // if(event.target.value <= 40 && event.target.value >= 30){
      //   alert('3  mesas');
      // }
      // if(event.target.value <= 40 && event.target.value >= 40){
      //   alert(' 4  mesas');
      // }
      // if(event.target.value <= 50 && event.target.value >= 30){
      //   alert(' 5 mesas');
      // }
      // if(event.target.value <= 60 && event.target.value >= 30){
      //   alert(' 6 mesas');
      // }
      // if(event.target.value <= 70 && event.target.value >= 30){
      //   alert('7 mesas');
      // }
      // if(event.target.value <= 80 && event.target.value >= 30){
      //   alert('8 mesas');
      // }
    }
    saveTables(event){
      console.log(event.value);
      this.tournament.TournamentTables = event.value;
    }
    saveMaxSets(event){
      console.log(event.value);
      this.tournament.TournamentMaxSets = event.value;
    }
    
    private save() {
      this.tournament.addressTournament = this.addressTournament;
      this.CreateTournamentService.createCustomer(this.tournament);
      this.tournament  = new Tournament();
      alert('campeonato criado');
    }
    
    private loadPlacesAutocomplete(){
      
      this.addressTournament  = {
        street_number: 'long_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        administrative_area_level_2: 'long_name',
        country: 'long_name',
        postal_code: 'short_name',
      };

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["geocode"]
        });
        autocomplete.setFields(['address_component']);
        
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            
            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
            
            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
          
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(this.addressTournament);
          for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            
            if (this.addressTournament[addressType]) {
              this.val = (place.address_components[i][this.addressTournament[addressType][0]])?
               place.address_components[i][this.addressTournament[addressType][0]]:place.address_components[i][this.addressTournament[addressType]];
         
              this.addressTournament[addressType] = this.val;
            }
          }
        });
      });

      let searchCLik : HTMLElement = document.getElementById("searchLocation") as HTMLElement;
      this.simulateClick(searchCLik);
    }
    
    private simulateClick = function (elem) {
      // Create our event (with options)
      var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });

    };

    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }
  }
  