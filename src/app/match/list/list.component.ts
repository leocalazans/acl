import { match } from './../shared/match';
import { Component, OnInit } from '@angular/core';
import { matchService } from '../shared/match.service';
import { Observable } from 'rxjs';
import { matchDataService } from '../shared/match-data.service';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-match-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  matchs: Observable<any>;

  constructor(private matchService: matchService, private matchDataService: matchDataService,private afs: AngularFirestoreModule) { }

  ngOnInit() {
    this.matchs = this.matchService.getAll();
    console.log('Read Service');
    this.matchService.getDb();
  }

  delete(key: string) {
    this.matchService.delete(key);
  }

  edit(match: match, key: string) {
    this.matchDataService.changematch(match, key);
  }
}