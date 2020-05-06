import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ClientsService } from '../clients.service';
import {ClientsComponent} from '../clients/clients.component';
import {Client} from '../client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  title = 'Edit client';
  clientForm: FormGroup;
  client: Client;
  clientComponent: ClientsComponent;

  constructor(private service: ClientsService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.getClient();
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
      .subscribe(c => this.client = c);
  }
  onSubmit(): void{

  }
}
