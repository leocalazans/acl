
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usersite } from './usersite';
 
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  private dbPath = '/users';
 
  customersRef: AngularFirestoreCollection<Usersite> = null;
  locations: Array<any>;
  UsersiteCollection: AngularFirestoreCollection<Usersite>;

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
  getCustomers() {
    this.UsersiteCollection = this.db.collection('/users', ref => ref.where('Email', '==', 'leeonardo.alves@hotmail.com'));
    return this.UsersiteCollection;
  }
  
 
 
}