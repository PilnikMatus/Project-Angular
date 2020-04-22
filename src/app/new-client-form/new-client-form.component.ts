import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ClientsService } from '../clients.service';
import {Client} from '../client';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.scss']
})
export class NewClientFormComponent implements OnInit {
   clientForm: FormGroup;
  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      name: new FormControl(),
      mac_address: new FormControl(),
      ip_address: new FormControl(),
      active: new FormControl()
    });
  }
  onSubmit(): void {
    console.log(this.clientForm.value);
    this.clientsService.postClient(this.clientForm.value);
  }

}
