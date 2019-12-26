import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList  } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { match } from './match';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})

export class matchService {

  constructor(public _db: AngularFireDatabase, public _store: AngularFireDatabase) { }

  insert(match: match) {
    this._db.list('match').push(match)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(match: match, key: string) {
    this._db.list('match').update(key, match)
      .catch((error: any) => {
        console.error(error);
      });
  }

  ngOnInit() {

  }
  getAll() {
    return this._db.list('match')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );

  }
  getDb() {
    return this._db.list('match').valueChanges().subscribe(console.log);
    // return this._db.list("match").valueChanges().subscribe( (data: any) => {
    //   data.forEach(match => {
    //     console.log("Lat: "+match)
    //   })
    // })
}



  

  delete(key: string) {
    this._db.object(`match/${key}`).remove();
  }
}