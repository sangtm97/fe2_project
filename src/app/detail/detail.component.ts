import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:any;
  itemProduct: any;
  cartItem: any;
  products:any;
  constructor(private commonService:CommonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.commonService.currentCart.subscribe(editCart => (this.cartItem = editCart));
    this.getProductById(this.id);
    
  }
  getProductById(id:any){
    this.commonService.getProductById(id).subscribe((res)=>{
      this.itemProduct = res
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
