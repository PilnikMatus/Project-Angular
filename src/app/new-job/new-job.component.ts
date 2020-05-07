import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {JobService} from '../job.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Backup} from '../backup';
import {environment} from '../../environments/environment';
import {Source} from '../source';
import {Target} from '../target';
import {Time} from '../time';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
