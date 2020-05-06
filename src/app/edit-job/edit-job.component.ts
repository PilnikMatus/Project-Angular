import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {JobService} from '../job.service';
import {ActivatedRoute} from '@angular/router';
import {Backup} from '../backup';
import {environment} from '../../environments/environment';
import {Source} from '../source';
import {Target} from '../target';
import {Time} from '../time';
import {variable} from '@angular/compiler/src/output/output_ast';
import {of} from 'rxjs';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {
  title = 'Edit Job';
  backup: Backup;
  source: Source;
  target: Target;
  backupForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private service: JobService, private route: ActivatedRoute) { }

  backupUrl = environment.serverName + 'backup';
  sourceUrl = environment.serverName + 'backup_source';
  targetUrl = environment.serverName + 'backup_target';
  timeUrl = environment.serverName + 'backup_time';

  ngOnInit(): void {
    console.log('id is: ' + this.id);
    this.getBackup();
    this.getSource();
    this.getTarget();
    this.backupForm = new FormGroup({
      name: new FormControl(),
      backup_type: new FormControl(),
      format_type: new FormControl(),
      active: new FormControl(),
      sourcePath: new FormControl()
    });
  }
  getBackup(): void{
    this.service.getItemById<Backup>(this.backupUrl, Number(this.id)).subscribe(b => {
      this.backup = b;
      console.log(this.backup);
      this.importToForm();
    });
  }


  getSource(): void{
    let arrSource = [];
    this.service.getItem<Source>(this.sourceUrl).subscribe(response => {
      arrSource = response;
      for (const entry of arrSource){
        if (entry.id_backup === Number(this.id)){
          this.source = entry;
          console.log(entry);
        }
      }
    });
  }
  getTarget(): void{
    let arrTarget = [];
    this.service.getItem<Target>(this.targetUrl).subscribe(response => {
      arrTarget = response;
      for (const entry of arrTarget){
        if (entry.id_backup === Number(this.id)){
          this.target = entry;
          console.log(entry);
        }
      }
    });

  }

  onSubmit(): void{

  }

  importToForm(): void{

    if (this.source == null) {
      this.backupForm.patchValue({
        name: this.backup.name,
        backup_type: this.backup.backup_type,
        format_type: this.backup.format_type,
        active: this.backup.active
      });
    }
    else {this.backupForm.patchValue({
          name: this.backup.name,
          backup_type: this.backup.backup_type,
          format_type: this.backup.format_type,
          active: this.backup.active,
          sourcePath: this.source.path
      });
    }
  }
}
