import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Listings', icon: 'pi pi-list', routerLink: '/listings'},
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Messages', icon: 'pi pi-inbox' }
    ];
  }

}
