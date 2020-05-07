import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service';
import {Backup} from '../backup';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  backupUrl = environment.serverName + 'backup';
  sourceUrl = environment.serverName + 'backup_source';
  targetUrl = environment.serverName + 'backup_target';
  timeUrl = environment.serverName + 'backup_time';
  constructor(private service: JobService) { }
  title = 'Jobs';
  public arrJobs = [];

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void{
    this.service.getItem<Backup>(this.backupUrl).subscribe(response => {
      this.arrJobs = response;
      console.log(this.arrJobs);
    });
  }
}
