
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usersite } from './usersite';
 
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  private dbPath = '/news-letter';
 
  customersRef: AngularFirestoreCollection<Usersite> = null;
 
  constructor(private db: AngularFirestore) {
    this.customersRef = db.collection(this.dbPath);
  }
 
  createCustomer(Usersite: Usersite): void {
    this.customersRef.add({...Usersite});
  }
 
  updateCustomer(key: string, value: any): Promise<void> {
    return this.customersRef.doc(key).update(value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.customersRef.doc(key).delete();
  }
 
  getCustomersList(): AngularFirestoreCollection<Usersite> {
    return this.customersRef;
  }
 
 
}