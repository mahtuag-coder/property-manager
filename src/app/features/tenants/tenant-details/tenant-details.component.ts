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
  isCreateMode: boolean = false;
  tenant!: Tenant;
  submitted: boolean = false;

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
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      status: ['ACTIVE', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const tenantId = params.get('id')!;
      console.log(`Tenant ID ${tenantId}`)
      if (tenantId && this.isNumeric(tenantId)) {
        this.isCreateMode = false;
        this.isEditMode = false;
        this.loadTenantDetails(+tenantId);
      } else {
        this.isCreateMode = true;
        this.isEditMode = true;
        this.tenantForm.reset({
          status: 'ACTIVE'
        });
      }
    });
  }

  enableEdit(): void {
    this.isEditMode = true;
    this.tenantForm.enable();
  }

  loadTenantDetails(tenantId: number): void {
    this.tenantService.getTenantDetails(+tenantId).subscribe({
        next: (response) => {
          this.tenant = response;
          this.tenantForm.patchValue(response);
          this.tenantForm.disable();
        }
      }
    )
  }

  onSave(): void {
    this.submitted = true;
    if (this.tenantForm.invalid) {
      this.tenantForm.markAllAsTouched();
      return;
    }

      if (this.isCreateMode) {
        this.createTenant();
      } else {
        this.updateTenant();
      }
  }

  onCancel(): void {
    if (this.isCreateMode) {
      this.tenantForm.reset({ status: 'ACTIVE' });
    } else {
      this.tenantForm.reset(this.tenant);
      this.tenantForm.disable();
      this.isEditMode = false;
    }
  }


  updateTenant(): void {
    this.tenantService.updateTenant(this.tenant.id, this.tenantForm.value).subscribe({
      next: (response) => {
        this.tenant = response;
        this.tenantForm.disable();
        this.isEditMode = false;
        this.displaySuccessToast();
        this.navigateBackToTenants();
      }
    });
  }

  createTenant(): void {
    this.tenantService.createTenant(this.tenantForm.value).subscribe({
      next: (response) => {
        this.displaySuccessToast();
        this.navigateBackToTenants();
      },
      error: () => console.log('Failed to create tenant.')
    })
  }

  private isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
  }

  navigateBackToTenants(): void {
    this.router.navigate(['/tenants']);
  }

  displaySuccessToast() {
    this.messageService.add({
      severity: 'success',
      summary: this.isCreateMode? 'Tenant Created': 'Tenant Updated',
      detail: 'Tenant details saved successfully.'
    });
  }

}
