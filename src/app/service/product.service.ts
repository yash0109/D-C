import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../model/product';

@Injectable()
export class ProductService {
  public serviceUrl: string = "../../assets/productdb.json";

  constructor(private http: HttpClient) { }
 
  getItems(): Observable<Item[]> {

    return this.http.get<Item[]>(this.serviceUrl);

  }
}