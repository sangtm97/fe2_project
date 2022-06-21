import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  cart: any;
  cartItem:any[] = [];
  constructor(private commonService:CommonService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.commonService.currentCart.subscribe(editCart => (this.cart = editCart));
    console.log('ngonit this cart: ', this.cart);
    if(this.cart){
      this.cartList(this.cart);
    }
  }

  cartList(items:any){
    this.cartItem = [];
    console.log('This--:',items.products);

    items.products.forEach( (item:any, index:any) => {
      if(index <= 0){
        //first loop
        // add new
        let tmpData = {
          id: item.id,
          qty:1,
          price: item.price, 
          data: item
        };
        this.cartItem.push(tmpData);
      }
      else{
        //after first loop check same pId and add pQty
        if(this.cartItem[this.cartItem.findIndex(obj => obj.id === item.id)]){
          let currentData = this.cartItem[this.cartItem.findIndex(obj => obj.id === item.id)];
          //update qty
          currentData.qty = currentData.qty+1;
        }
        else{
          let tmpData = {
            id: item.id,
            qty:1,
            price: item.price, 
            data: item
          };
          this.cartItem.push(tmpData);
        }
      }
    });
    //see value
    console.log('cartItem::::',this.cartItem);
  }


  minus(product:any){
    //add new item
    this.add2cart('minus', product);
    //reload this
    this.ngOnInit();
  }
  plus(product:any){
    //add new item
    this.add2cart('plus', product);
    //reload this
    this.ngOnInit();
  }

  add2cart(type:any, product:any){
    if(type === 'plus'){
      this.cart.products.push(product);
      this.cart.cart = this.cart.cart + 1;

      //set in data services
      let _price = product.price;
      this.cart.subTotal = this.cart.subTotal + _price;
      this.cart.grandTotal = this.cart.subTotal;
    }
    else{
      //minus
      //remove from cart
      if(this.cart.products.findIndex((obj: { id: any; }) => obj.id === product.id) >= 0){
        let tmpIndex = this.cart.products.findIndex((obj: { id: any; }) => obj.id === product.id);

        this.cart.products.splice(tmpIndex, 1);
        this.cart.cart = this.cart.cart - 1;

        //set in data services
        //set in data services
      let _price = product.price;
      this.cart.subTotal = this.cart.subTotal - _price;
      this.cart.grandTotal = this.cart.subTotal;
      }
    }
    this.commonService.updateCart(this.cart);
    console.log('this.cart: ', this.cart  )
  }

  removeCart(id:any){
    this.cartItem.forEach( (item:any, index:any)=>{
      if(item.id === id){
        let n = 0;
        for(n; n < item.qty; n++){
          this.add2cart('minus', item.data)
        }
        this.cartItem.splice(index, 1)//xoa 1 pt
      }
    })
  }


}
