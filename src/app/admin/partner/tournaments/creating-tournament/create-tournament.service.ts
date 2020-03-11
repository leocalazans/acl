import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Tournament } from './tournament';
@Injectable({
  providedIn: 'root'
})
export class CreateTournamentService {

  private dbPath = '/championships';
 
  customersRef: AngularFirestoreCollection<Tournament> = null;
 
  constructor(private db: AngularFirestore) {
    this.customersRef = db.collection(this.dbPath);
  }
 
  createCustomer(Tournament: Tournament): void {
    this.customersRef.add({...Tournament});
  }
 
  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.doc(key).update(value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.doc(key).delete();
  }
 
  getCustomersList(): AngularFirestoreCollection<Tournament> {
    return this.customersRef;
  }

}
