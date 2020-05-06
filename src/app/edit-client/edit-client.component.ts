import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ClientsService } from '../clients.service';
import { Client} from '../client';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  title = 'Edit client';
  clientForm: FormGroup;
  public client: Client;
  test: Client;

  constructor(private service: ClientsService, private router: ActivatedRoute, private routerRouter: Router) {
    this.getClient();
  }
  ngOnInit(): void {
    this.getClient();
    console.log(this.client);
    this.clientForm = new FormGroup({
      name: new FormControl(),
      mac_address: new FormControl(),
      ip_address: new FormControl(),
      active: new FormControl()
    }
    );
  }
  getClient(): void{
    const id = this.router.snapshot.paramMap.get('id');
    this.service.getClientById(id)
      .subscribe(c  => {
        this.client = c as Client;
        console.log(c);
        this.ImportToForm();
      });
  }
  onSubmit(): void{
    this.setValues();
    this.service.putClient(this.client).subscribe(
      () => this.routerRouter.navigate(['clients']),
      (err: any) => console.log(err)
    );
  }
  setValues(): void{
    console.log(this.client);
    this.client.name = this.clientForm.value.name;
    this.client.mac_address = this.clientForm.value.mac_address;
    this.client.ip_address = this.clientForm.value.ip_address;
    this.client.active = this.clientForm.value.active as boolean;
    console.log(this.client);
  }
  ImportToForm(): void {
    this.clientForm.patchValue({
      name: this.client.name,
      mac_address: this.client.mac_address,
      ip_address: this.client.ip_address,
      active: this.client.active
    });
  }
}
