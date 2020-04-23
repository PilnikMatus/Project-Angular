import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ClientsService } from '../clients.service';
import {ClientsComponent} from '../clients/clients.component';
import {Client} from '../client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  title = 'Edit client';
  clientForm: FormGroup;
  client: Client;
  router: Router;
  clientComponent: ClientsComponent;

  constructor(private service: ClientsService) {}
  ngOnInit(): void {
    this.clientForm = new FormGroup({
      name: new FormControl(),
      mac_address: new FormControl(),
      ip_address: new FormControl(),
      active: new FormControl()
    }

    );
  }
  getClientById(id: number){
    this.service.getClientById(id).subscribe(
      (client: Client) => {
        this.editClient(client);
        this.client = client;
      }
    );
  }
  editClient(client: Client){
    this.clientForm.patchValue({
      name: client.name,
      mac_address: client.mac_address,
      ip_address: client.ip_address,
      active: client.active
    });
  }

  onSubmit(): void {
    //this.copyInfo();
    this.client = this.clientForm.value as Client;
    this.service.putClient(this.client).subscribe(
      () => this.router.navigate(['client']),
      (error: any) => console.log(error)
    );
  }
  /*
  copyInfo() {
    this.client.name = this.clientForm.value.name;
    this.client.mac_address = this.clientForm.value.mac_address;
    this.client.ip_address = this.clientForm.value.ip_address;
    this.client.active = this.clientForm.value.active;
  }
  */
  myFunc(client: Client) {
    this.client = client;
    this.clientForm = new FormGroup({
      name: new FormControl(),
      mac_address: new FormControl(),
      ip_address: new FormControl(),
      active: new FormControl()
    });
    console.log(client);
    this.loadData(client);
  }
  loadData(client: Client){
    console.log('loading');
    this.clientForm.setValue({
      name: client.name,
      mac_address: client.mac_address,
      ip_address: client.ip_address,
      active: client.active
    });
    console.log(this.clientForm.value);
  }
}
