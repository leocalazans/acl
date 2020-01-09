import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'userName', 'won', 'lost','points'];
  dataSource;
  customers: any;
 
  constructor(private customerService: CustomerService) { }
 
  ngOnInit() {
    this.getCustomersList();
  }
 
  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
      console.log(this.customers);
      this.dataSource = this.customers;
    });
  }



 
  deleteCustomers() {
    this.customerService.deleteAll();
  }
 
}