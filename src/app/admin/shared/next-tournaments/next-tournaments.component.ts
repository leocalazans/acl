import { Component, OnInit } from '@angular/core';
import { TournamentService } from './tournamet.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-next-tournaments',
  templateUrl: './next-tournaments.component.html',
  styleUrls: ['./next-tournaments.component.scss']
})


export class NextTournamentsComponent implements OnInit {
  tournament: any;

  constructor(
    private TournamentService:TournamentService,
  ) { }

  ngOnInit() {
    this.getCustomersList();
    

    
    console.log(this.tournament);




  }

  getCustomersList() {
    this.TournamentService.getTournamentsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(tournament => {
      this.tournament = tournament;
      console.log(this.tournament);

    });
  }
  

}
