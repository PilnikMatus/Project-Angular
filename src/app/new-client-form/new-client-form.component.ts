import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ClientsService } from '../clients.service';
import {ClientsComponent} from '../clients/clients.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-new-client-form',
  templateUrl: './new-client-form.component.html',
  styleUrls: ['./new-client-form.component.scss']
})
export class NewClientFormComponent implements OnInit {
   clientForm: FormGroup;
  constructor(private clientsService: ClientsService) { }
  private clientsComponent: ClientsComponent;
  private router: Router;

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      name: new FormControl(),
      mac_address: new FormControl(),
      ip_address: new FormControl(),
      active: new FormControl(),
    });
  }
  onSubmit(): void {
    this.clientsComponent = new ClientsComponent(this.clientsService);
    console.log(this.clientForm.value);
    this.clientsService.postClient(this.clientForm.value)
      .subscribe(data => this.clientsComponent.arrClients.push(data));
    console.log(this.clientForm.value);
  }
}
