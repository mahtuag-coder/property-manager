import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, of, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
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
    return this.http.get<TenantResponse>(`${this.baseUrl}/tenant`, {params}).pipe(
      catchError(err => {
        return throwError(() => err);
      }),
      catchError(() => {
        return of({
          content: [],
          totalElements: 0,
          totalPages: 0,
          number: 0,
          size
        });
      })
    );
  }
}
