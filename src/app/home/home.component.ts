import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartItem: any;
  products:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.currentCart.subscribe(editCart => (this.cartItem = editCart));
    this.getLastProduct();
  }

  //lay toan bo db len
  getLastProduct(){
    this.commonService.listAllProduct().subscribe((res)=>{
      this.products = res;
    })
  }
  addToCart(qty:any,product:any){
    this.cartItem.products.push(product);
    this.cartItem.cart = this.cartItem.cart + qty;
    //Set value as default for test
    this.commonService.updateCart(this.cartItem);
    console.log('This.cart--', this.cartItem);
  }
}
