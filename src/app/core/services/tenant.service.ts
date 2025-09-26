import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Tenant, TenantResponse} from "../../models/tenant.model";

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private baseUrl = environment.propertyManagementApiBaseUrl;

  constructor(private http: HttpClient) {
  }

  getTenants(page: number, size: number): Observable<TenantResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<TenantResponse>(`${this.baseUrl}/tenants`, {params});
  }

  getTenantDetails(id: number): Observable<Tenant> {
    return this.http.get<Tenant>(`${this.baseUrl}/tenants/${id}`);
  }

  updateTenant(id: number, tenant: Tenant): Observable<Tenant> {
    return this.http.patch<Tenant>(`${this.baseUrl}/tenants/${id}`, tenant);
  }


}
