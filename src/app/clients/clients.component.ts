import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public arrClients = [];
  title = 'Clients';
  constructor(private clientService: ClientsService) {
  }

  ngOnInit(): void {
    this.getClient();
  }
  getClient(): void {
    this.clientService.getClient()
      .subscribe((response) => {
        console.log(response);
        this.arrClients = response;
      });
  }
}
