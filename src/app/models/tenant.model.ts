import {TenantStatus} from "./tenantStatus";

export interface Tenant {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: TenantStatus;
}

export interface TenantResponse {
  content: Tenant[];
  totalElements: number;
  totalPages: number;
  number: number;  // current page number
  size: number;    // page size
}
