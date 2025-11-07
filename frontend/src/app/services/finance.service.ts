import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FinanceService {
  private apiUrl = 'http://127.0.0.1:5000/api/finance';

  constructor(private http: HttpClient) {}

  getInsights(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insights`, data);
  }
}
