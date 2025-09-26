import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TenantService} from "../../../core/services/tenant.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tenant} from "../../../models/tenant.model";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.css']
})
export class TenantDetailsComponent implements OnInit {
  tenantForm!: FormGroup;
  isEditMode: boolean = false;
  tenant!: Tenant;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tenantService: TenantService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.tenantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.required],
      status: ['', Validators.required]
    });
    this.loadTenantDetails();
  }

  enableEdit(): void {
    this.isEditMode = true;
    this.tenantForm.enable();
  }

  loadTenantDetails(): void {
    this.route.paramMap.subscribe(params => {
      const tenantId = params.get('id')!;
      console.log(`Tenant ID ${tenantId}`);
      if (tenantId) {
        this.tenantService.getTenantDetails(+tenantId).subscribe({
            next: (response) => {
              this.tenant = response;
              this.tenantForm.patchValue(response);
              this.tenantForm.disable();
            }
          }
        )
      }
    });
  }

  onSave(): void {
    if(this.tenantForm.valid) {
      this.tenantService.updateTenant(this.tenant.id, this.tenantForm.value).subscribe({
        next: (response) => {
          this.tenant = response;
          this.tenantForm.disable();
          this.isEditMode = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Tenant Updated',
            detail: 'Tenant details saved successfully.'
          });

          this.router.navigate(['/tenants']);
        }
      });
    } else {
      this.tenantForm.markAllAsTouched();
    }

  }

  onCancel(): void {
    this.tenantForm.reset(this.tenant);
    this.tenantForm.disable();
    this.isEditMode = false;
  }

}
