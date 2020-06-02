import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ClientsComponent } from './clients/clients.component';
import { JobsComponent } from './jobs/jobs.component';
import { AdminsComponent } from './admins/admins.component';
import { LogsComponent } from './logs/logs.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewClientFormComponent } from './new-client-form/new-client-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditClientComponent } from './edit-client/edit-client.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { SourceComponent } from './source/source.component';
import { TargetComponent } from './target/target.component';
import { TimeComponent } from './time/time.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewJobComponent } from './new-job/new-job.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ClientsComponent,
    JobsComponent,
    AdminsComponent,
    LogsComponent,
    HomeComponent,
    NewClientFormComponent,
    EditClientComponent,
    NewAdminComponent,
    EditJobComponent,
    SourceComponent,
    TargetComponent,
    TimeComponent,
    LoginFormComponent,
    NewJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
