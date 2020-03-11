import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Tournament } from './tournamet';
 
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
 
  private dbPath = '/championships';
 
  TournamentsRef: AngularFirestoreCollection<Tournament> = null;
 
  constructor(private db: AngularFirestore) {
    this.TournamentsRef = db.collection(this.dbPath);
  }
 

 
  updateTournament(key: string, value: any): Promise<void> {
    return this.TournamentsRef.doc(key).update(value);
  }
 
  deleteTournament(key: string): Promise<void> {
    return this.TournamentsRef.doc(key).delete();
  }
 
  getTournamentsList(): AngularFirestoreCollection<Tournament> {
    return this.TournamentsRef;
  }
 
  // deleteAll() {
  //   this.TournamentsRef.get().subscribe(
  //     querySnapshot => {
  //       querySnapshot.forEach((doc) => {
  //         doc.ref.delete();
  //       });
  //     },
  //     error => {
  //       console.log('Error: ', error);
  //     });
  // }
}