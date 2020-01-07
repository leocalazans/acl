import { Component, OnInit } from '@angular/core';
import { CustomerRankingService } from '../customer.service';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
 
  customers: any;
 
  constructor(private CustomerRankingService: CustomerRankingService) { }
 
  ngOnInit() {
    this.getCustomersList();
  }
 
  getCustomersList() {
    this.CustomerRankingService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }
 
  deleteCustomers() {
    this.CustomerRankingService.deleteAll();
  }
 
}