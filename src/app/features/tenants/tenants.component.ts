import {Component, OnInit} from '@angular/core';
import {Tenant} from "../../models/tenant.model";
import {TenantService} from "../../core/services/tenant.service";
import {TenantStatus} from "../../models/tenantStatus";
import {LazyLoadEvent, MessageService} from "primeng/api";

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {
  tenants: Tenant[] = [];
  totalRecords: number = 0;
  loading = false;

  constructor(
    private tenantService: TenantService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  loadTenants(event: LazyLoadEvent) {
    this.loading = true;

    const page = event.first ? event.first / (event.rows ?? 5) : 0;
    const size = event.rows ?? 5;


    this.tenantService.getTenants(page, size).subscribe(response => {
      this.tenants = response.content;
      this.totalRecords = response.totalElements;
      this.loading = false;
    });
  }


}



