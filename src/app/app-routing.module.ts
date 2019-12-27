import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './match/list/list.component';
import { LoginSiteComponent } from './login-site/login-site.component';
import { RegisterSiteComponent } from './register-site/register-site.component';
import { RegisterSitetesteSiteComponent } from './register-siteteste-site/register-siteteste-site.component';
import { RankingComponent } from './ranking/ranking.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// login routes
import { UserRegisterComponent } from './register-site/users/user/user.component';
import { PlayersRegisterComponent } from './register-site/players/players/players.component';

const routes: Routes = [
  { path: '',    component: HomeContentComponent, },
  { path: 'match',    component: ListComponent, },
  { path: 'login',    component: LoginSiteComponent, },
  { path: 'register',    component: RegisterSiteComponent, },
  { path: 'teste',    component: RegisterSitetesteSiteComponent, },
  { path: 'ranking',    component: RankingComponent, },
  // register
  { path: 'register/user',    component: UserRegisterComponent, },
  { path: 'register/player',    component: PlayersRegisterComponent, },
    // { path: 'register/player',    
  //   loadChildren: ()=> import('./register-site/players/players/players.component').then(c => c.PlayersRegisterComponent)
  // },
  
  { path: 'customers', component: CustomersListComponent },
  { path: 'customers/add', component: CreateCustomerComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
