import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<{ produto: any[] }> {
    return this.http.get<{ produto: any[] }>(`${this.SERVER_URL}/produtos?t=${new Date().getTime()}`);
  }  
  
}
