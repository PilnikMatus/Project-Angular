import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {JobService} from '../job.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Backup} from '../backup';
import {environment} from '../../environments/environment';
import {Source} from '../source';
import {Target} from '../target';
import {Time} from '../time';
import {Client} from '../client';

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
  time: Time;
  backupForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  arrClients = [];

  constructor(private service: JobService, private route: ActivatedRoute, private router: Router) { }

  backupUrl = environment.serverName + 'backup';
  sourceUrl = environment.serverName + 'backup_source';
  targetUrl = environment.serverName + 'backup_target';
  timeUrl = environment.serverName + 'backup_time';
  clientUrl = environment.serverName + 'client';

  ngOnInit(): void {
    this.backupForm = new FormGroup({
      name: new FormControl(),
      backup_type: new FormControl(),
      format_type: new FormControl(),
      active: new FormControl(),
      sourcePath: new FormControl(),
      targetPath: new FormControl(),
      repetation_unit: new FormControl(),
      repetation_number: new FormControl()
    });
    console.log('id is: ' + this.id);
    this.getBackup();
    // this.getSource();
    // this.getTarget();
    // this.getTime();
    // this.getClient();

  }

  onSubmit(): void{
    this.setVaules();
    this.service.putItem<Backup>(this.backupUrl + '/' + this.backup.id, this.backup).subscribe();
    this.service.putItem<Source>(this.sourceUrl + '/' + this.source.id, this.source).subscribe();
    this.service.putItem<Target>(this.targetUrl + '/' + this.target.id, this.target).subscribe();
    this.service.putItem<Time>(this.timeUrl + '/' + this.time.id, this.time).subscribe( () => this.router.navigate(['jobs']));
  }

  getBackup(): void{
    this.service.getItemById<Backup>(this.backupUrl, Number(this.id)).subscribe(b => {
      this.backup = b;
      console.log(this.backup);

    });
  }

  getClient(): void{
    this.service.getItem<Client>(this.clientUrl).subscribe( data => {this.arrClients = data; console.log(this.arrClients); });
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
  getTime(): void{
    let arrTime = [];
    this.service.getItem<Time>(this.timeUrl).subscribe(response => {
      arrTime = response;
      for (const entry of arrTime){
        if (entry.id_backup === Number(this.id)){
          this.time = entry;
          console.log(entry);
        }
      }
      this.importToForm();
    });

  }
  setVaules(): void{
    this.backup.name = this.backupForm.value.name;
    this.backup.backup_type = this.backupForm.value.backup_type;
    this.backup.format_type = this.backupForm.value.format_type;
    this.backup.active = this.backupForm.value.active;
    this.source.path = this.backupForm.value.sourcePath;
    this.target.config = this.backupForm.value.targetPath;
    this.time.repetation_unit = this.backupForm.value.repetation_unit;
    this.time.repetation_number = this.backupForm.value.repetation_number;
  }


  importToForm(): void{
    this.backupForm.patchValue({
      name: this.backup.name,
      backup_type: this.backup.backup_type,
      format_type: this.backup.format_type,
      active: this.backup.active
      //sourcePath: this.source.path,
      //targetPath: this.target.config,
      //repetation_number: this.time.repetation_number,
      //repetation_unit: this.time.repetation_unit
  /*
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
          sourcePath: this.source.path,
          targetPath: this.target.config
      });
   */
    });
  }
}
