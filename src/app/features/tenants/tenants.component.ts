import {Component, OnInit} from '@angular/core';
import {Tenant} from "../../models/tenant.model";
import {TenantService} from "../../core/services/tenant.service";
import {LazyLoadEvent} from "primeng/api";
import {Router} from "@angular/router";

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
    private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
  }

  loadTenants(event: LazyLoadEvent) {
    const page = event.first ? event.first / (event.rows ?? 5) : 0;
    const size = event.rows ?? 5;

    this.tenantService.getTenants(page, size).subscribe({
      next: response => {
        this.tenants = response.content;
        this.totalRecords = response.totalElements;
        this.loading = false;
      },
      error: () => {
        this.tenants = [];
        this.totalRecords = 0;
        this.loading = false;
      }
    });
  }

  loadTenantDetailsPage(event: any): void {
    const tenant = event.data;
    void this.router.navigateByUrl(`/tenants/${tenant.id}`);
  }


}



