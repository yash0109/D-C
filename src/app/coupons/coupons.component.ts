import { Component, OnInit } from '@angular/core';
import { CouponsService } from '../service/coupons.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {



  
  myntraCouponsDetails: any;
  ajioCouponsDetails: any;
  
  firstcryCouponsDetails: any;

  constructor(private couponService: CouponsService) { }

  ngOnInit(): void {
   

    this.couponService.getMyntraCoupons().subscribe(flight => this.myntraCouponsDetails = flight);

    this.couponService.getAjioCoupons().subscribe(train => this.ajioCouponsDetails = train);

    

    this.couponService.getFirstcryCoupons().subscribe(fashion => this.firstcryCouponsDetails = fashion);
  }

  Coupon: any = [];

  // constructor(private couponService: CouponsService) { 

  //   this.readCoupon();
  // }

  // ngOnInit() {}


  // readCoupon(){
  //   this.couponService.getCoupons().subscribe((data) => {
  //    this.Coupon = data;
  //   })    
  // }

  // removeUser(coupon, index) {
  //   if(window.confirm('Are you sure?')) {
  //       this.couponService.deleteCoupon(coupon._id).subscribe((data) => {
  //         this.Coupon.splice(index, 1);
  //       }
  //     )    
  //   }
  // }



}
