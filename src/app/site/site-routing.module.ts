import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ListComponent } from './match/list/list.component';
// import { RegisterSitetesteSiteComponent } from './register-siteteste-site/register-siteteste-site.component';

// import { LoginSiteComponent } from './pages/login-site/login-site.component';
// import { RegisterSiteComponent } from './pages/register-site/register-site.component';
// import { RankingComponent } from './pages/ranking/ranking.component';
// import { HomeContentComponent } from './pages/home-content/home-content.component';

import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
// import { DashboardComponent } from './admin/dashboard/dashboard.component';
// import { AdminModule } from './admin/'
// login routes
// import { UserRegisterComponent } from './pages/register-site/users/user/user.component';
// import { PlayersRegisterComponent } from './pages/register-site/players/players/players.component';

const routes: Routes = [
  // { path: '',  
  //   pathMatch: 'full',  
  //   component: HomeContentComponent,
  // },
  
  // { path: 'login',    component: LoginSiteComponent },

  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/add', component: CreateCustomerComponent },

  // { path: 'dashboard', 
  //   component: DashboardComponent,  
  //   outlet: 'adm' 
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
