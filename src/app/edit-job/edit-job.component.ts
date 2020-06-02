import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';
import {JobService} from '../job.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Backup} from '../backup';
import {environment} from '../../environments/environment';
import {Source} from '../source';
import {Target} from '../target';
import {Time} from '../time';
import {BackupForm} from '../backup-form';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {
  title = 'Edit Job';
  backup: Backup;
  backupForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');
  arrClients = [];
  backupObject: BackupForm;
  arrSource = [];
  arrTarget = [];
  arrTime = [];

  constructor(private service: JobService, private route: ActivatedRoute, private router: Router) { }

  backupUrl = environment.serverName + 'backup';

  ngOnInit(): void {
    this.backupForm = new FormGroup({
      name: new FormControl(),
      backup_type: new FormControl(),
      format_type: new FormControl(),
      active: new FormControl(),
      sourcePath: new FormControl(),
      targets: new FormArray([])
    });


    this.service.getItemById(this.backupUrl, Number(this.id)).subscribe(response  => {
      console.log(response);
      const info = response as BackupForm;
      this.backupObject = info;
      console.log(info.backup_target[0].path);

      this.backupForm.patchValue({
        name: info.name,
        backup_type: info.backup_type,
        format_type: info.format_type,
        active: info.active
      });

      for (const source of info.backup_source ){
        this.arrSource.push(source);
        this.backupForm.patchValue({
          sourcePath: source.path
        });
        console.log('source:' + source.path);
        }

      for (const target of info.backup_target) {
        this.arrTarget.push(target);
        this.backupForm.patchValue({
          targetPath: target.path
          });
        }

      for (const time of info.backup_time) {
        const repNum = 'repetation_unit_' + time.repetation_unit + time.repetation_number;
        const repUnit = 'repetation_number_' + time.repetation_unit + time.repetation_number;
        this.arrTime.push(time);
        this.backupForm.patchValue({
          repetation_unit: time.repetation_unit,
          repetation_number: time.repetation_number
        });
        }

      }
    );

  }

  onSubmit(): void{
    console.log(this.arrTime);
    //this.setVaules();
    //this.service.putItem<Backup>(this.backupUrl + '/' + this.backup.id, this.backup).subscribe();
  }

  setVaules(): void{
    console.log(this.backupObject);
    this.backupObject.name = this.backupForm.value.name;
    this.backupObject.backup_type = this.backupForm.value.backup_type;
    this.backupObject.format_type = this.backupForm.value.format_type;
    this.backupObject.active = this.backupForm.value.active;
    this.backupObject.backup_source[0].path = this.backupForm.value.sourcePath;
  }
}
