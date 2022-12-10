import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  getHello() {
    return this.http.get<{ message: string }>('/api/v1/hello');
  }
}
