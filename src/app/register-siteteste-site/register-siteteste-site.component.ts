import { Component, OnInit } from '@angular/core';

import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { AngularFirestore
} from 'angularfire2/firestore';
import {  AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { match } from './../match/shared/match';
import { matchService } from '../match/shared/match.service';
import { matchDataService } from '../match/shared/match-data.service';
// import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-register-siteteste-site',
  templateUrl: './register-siteteste-site.component.html',
  styleUrls: ['./register-siteteste-site.component.scss']
})

export class RegisterSitetesteSiteComponent implements OnInit {
  matchs: Observable<any>;

  constructor(private matchService: matchService, private matchDataService: matchDataService,private afs: AngularFirestoreModule) { }

  ngOnInit() {
    this.matchs = this.matchService.getAll();
    console.log('Read Service');
    this.matchService.getDb();
  }


}