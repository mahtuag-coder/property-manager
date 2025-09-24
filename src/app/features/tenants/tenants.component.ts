import { Component, OnInit } from '@angular/core';
import {Tenant} from "../../models/tenant.model";
import {TenantStatus} from "../../models/tenantStatus";

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {
  tenants: Tenant[];

  constructor() { }

  ngOnInit(): void {
    this.tenants = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        status: TenantStatus.ACTIVE
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        phone: '234-567-8901',
        status: TenantStatus.INACTIVE
      },
      {
        firstName: 'Michael',
        lastName: 'Brown',
        email: 'michael.brown@example.com',
        phone: '345-678-9012',
        status: TenantStatus.ACTIVE
      },
      {
        firstName: 'Emily',
        lastName: 'Johnson',
        email: 'emily.johnson@example.com',
        phone: '456-789-0123',
        status: TenantStatus.BLACKLISTED
      },
      {
        firstName: 'David',
        lastName: 'Wilson',
        email: 'david.wilson@example.com',
        phone: '567-890-1234',
        status: TenantStatus.ACTIVE
      },
      {
        firstName: 'Sarah',
        lastName: 'Miller',
        email: 'sarah.miller@example.com',
        phone: '678-901-2345',
        status: TenantStatus.INACTIVE
      },
      {
        firstName: 'Robert',
        lastName: 'Taylor',
        email: 'robert.taylor@example.com',
        phone: '789-012-3456',
        status: TenantStatus.ACTIVE
      },
      {
        firstName: 'Linda',
        lastName: 'Anderson',
        email: 'linda.anderson@example.com',
        phone: '890-123-4567',
        status: TenantStatus.BLACKLISTED
      },
      {
        firstName: 'James',
        lastName: 'Thomas',
        email: 'james.thomas@example.com',
        phone: '901-234-5678',
        status: TenantStatus.ACTIVE
      },
      {
        firstName: 'Patricia',
        lastName: 'Martinez',
        email: 'patricia.martinez@example.com',
        phone: '012-345-6789',
        status: TenantStatus.INACTIVE
      }
    ];

  }

}
