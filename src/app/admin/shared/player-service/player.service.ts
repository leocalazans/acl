import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Player } from './player';
 
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  private dbPath = '/users';
 
  playersRef: AngularFirestoreCollection<Player> = null;
 
  constructor(private db: AngularFirestore) {
    this.playersRef = db.collection(this.dbPath);
  }
 
  createCustomer(player: Player): void {
    this.playersRef.add({...player});
  }
 
  updateCustomer(key: string, value: any): Promise<void> {
    return this.playersRef.doc(key).update(value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.playersRef.doc(key).delete();
  }
 
  getPlayersList(): AngularFirestoreCollection<Player> {
    return this.playersRef;
  }
 
  deleteAll() {
    this.playersRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}