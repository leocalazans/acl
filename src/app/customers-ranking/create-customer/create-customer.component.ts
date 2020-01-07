import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { Customer } from '../customer';
import { CustomerRankingService } from '../customer.service';
 
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
 
  customer: Customer = new Customer();
  submitted = false;
 
  constructor(private CustomerRankingService: CustomerRankingService) { }
 
  ngOnInit() {
  }
 
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }
 
  save() {
    this.CustomerRankingService.createCustomer(this.customer);
    this.customer = new Customer();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
 
}