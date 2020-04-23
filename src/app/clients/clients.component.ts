import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientsService} from '../clients.service';
import {Client} from '../client';
import {EditClientComponent} from '../edit-client/edit-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public arrClients = [];
  title = 'Clients';
  editClient: EditClientComponent;
  constructor(private clientService: ClientsService) {
    this.editClient = new EditClientComponent(clientService);
  }

  ngOnInit(): void {
    this.getClient();
  }
  getClient(): void {
    this.clientService.getClient()
      .subscribe((response) => {console.log(response);
        this.arrClients = response;

      });
  }




}
