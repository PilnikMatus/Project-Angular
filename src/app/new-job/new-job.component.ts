import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ServiceModelService} from '../service-model.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Backup} from '../backup';
import {environment} from '../../environments/environment';
import {Source} from '../source';
import {Target} from '../target';
import {Time} from '../time';
import {Client} from '../client';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit {
title = 'New job';
form: FormGroup;

  constructor(private service: ServiceModelService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      backup_type: new FormControl(),
      format_type: new FormControl(),
      active: new FormControl(),
      sourcePath: new FormControl(),
      targetPath: new FormControl(),
      repetation_unit: new FormControl(),
      repetation_number: new FormControl()
    });
  }

  onSubmit(): void{
    console.log('penis');
  }

}
