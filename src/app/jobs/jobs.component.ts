import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  constructor(private service: JobService) { }
  title = 'Jobs';
  public arrJobs = [];

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void{
    this.service.getBackup().subscribe(response => {
      this.arrJobs = response;
      console.log(this.arrJobs);
    });
  }

}
