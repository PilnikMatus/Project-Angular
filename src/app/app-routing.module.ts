import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { JobsComponent } from './jobs/jobs.component';
import { AdminsComponent } from './admins/admins.component';
import { LogsComponent } from './logs/logs.component';
import { HomeComponent } from './home/home.component';
import { NewClientFormComponent} from './new-client-form/new-client-form.component';
import {EditClientComponent} from './edit-client/edit-client.component';
import {NewAdminComponent} from './new-admin/new-admin.component';


const routes: Routes = [
  {path: 'clients', component: ClientsComponent },
  {path: 'jobs', component: JobsComponent},
  {path: 'admins', component: AdminsComponent},
  {path: 'logs', component: LogsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'new-client', component: NewClientFormComponent},
  {path: 'edit-client', component: EditClientComponent},
  {path: 'new-admin', component: NewAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
