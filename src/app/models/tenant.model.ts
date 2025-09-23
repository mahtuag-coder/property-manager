import {TenantStatus} from "./tenantStatus";

export interface Tenant {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  status: TenantStatus;
}
