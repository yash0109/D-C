import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CouponsService {


  constructor(private http: HttpClient) { }

  myntraUri = "../../assets/all-coupons/myntra.json"
  ajioUri = "../../assets/all-coupons/ajio.json"

  firstcryUri = "../../assets/all-coupons/firstcry.json"


  
  getMyntraCoupons() {
    return this.http.get(this.myntraUri)
  }

  getAjioCoupons() {
    return this.http.get(this.ajioUri)
  }

  

  getFirstcryCoupons() {
    return this.http.get(this.firstcryUri)
  }



}



