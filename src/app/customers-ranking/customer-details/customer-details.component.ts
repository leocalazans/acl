import { Component, OnInit, Input } from '@angular/core';
import { CustomerRankingService } from '../customer.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Customer } from '../customer';

// export interface  {
//   key: string;
//   Email: string;
//   userName: string;
//   points: number;
//   fullName: string;
//   country: string;
//   lost: number;
//   won: number;
//   position: number;
//   permision: number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})


export class CustomerDetailsComponent implements OnInit {
 
  @Input() customer: Customer;
  
  
  displayedColumns: string[] = ['position', 'userName', 'won', 'lost','points'];
  dataSource;

  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private CustomerRankingService: CustomerRankingService) {
    this.dataSource = this.CustomerRankingService
   .getCustomersList();
   }
 
  ngOnInit() {
    console.log(this.dataSource);

  }
 
  updateActive(isActive: boolean) {
    this.CustomerRankingService
      .updateCustomer(this.customer.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deleteCustomer() {
    this.CustomerRankingService
      .deleteCustomer(this.customer.key)
      .catch(err => console.log(err));
  }
 
}