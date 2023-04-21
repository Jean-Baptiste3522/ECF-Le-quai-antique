import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ContactComponent } from './Components/contact/contact.component';
import { AppComponent } from './app.component';
import { CarteComponent } from './Components/carte/carte.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MenusComponent } from './Components/menus/menus.component';
import { ReservationComponent } from './Components/reservation/reservation.component';
import { LoginComponent } from './Components/login/login.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'accueil', component: HomeComponent},
  { path: 'carte', component: CarteComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'menus', component: MenusComponent},
  { path: 'souscription', component: SignupComponent},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
