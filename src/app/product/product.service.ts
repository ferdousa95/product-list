import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';    

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'assets/projects.json';
  private products: Product[] = []

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    product.id = Date.now();
    return this.http.post<Product>(this.productUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  }
}
