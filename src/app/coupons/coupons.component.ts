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
   

    this.couponService.getMyntraCoupons().subscribe(first => this.myntraCouponsDetails = first);

    this.couponService.getAjioCoupons().subscribe(second => this.ajioCouponsDetails = second);

    

    this.couponService.getFirstcryCoupons().subscribe(third => this.firstcryCouponsDetails = third);
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
