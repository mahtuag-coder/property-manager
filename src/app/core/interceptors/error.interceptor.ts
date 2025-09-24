import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {MessageService} from "primeng/api";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);

        // Generic message
        let detail = 'Something went wrong. Please try again later.';

        // Customize per status
        if (error.status === 0) {
          detail = 'Backend is unreachable. Check server or network connection.';
        } else if (error.status === 401) {
          detail = 'You are not authorized. Please login again.';
        } else if (error.status === 404) {
          detail = 'Requested resource not found.';
        } else if (error.status === 500) {
          detail = 'Internal server error occurred.';
        }

        // Show PrimeNG toast
        this.messageService.add({
          severity: 'error',
          summary: `Error ${error.status}`,
          detail
        });

        return throwError(() => error);

      })
    );
  }
}
