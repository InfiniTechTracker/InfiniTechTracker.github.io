import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TechnicalOverviewComponent } from './technical-overview/technical-overview.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'technical', component: TechnicalOverviewComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
