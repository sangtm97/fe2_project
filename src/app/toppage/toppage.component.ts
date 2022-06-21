import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css']
})
export class ToppageComponent implements OnInit {

  dateCate: any;
  cartItem:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.currentCart.subscribe(editCart => (this.cartItem = editCart));
    this.getLastCategory();
  }

  //lay toan bo db len
  getLastCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
      this.dateCate = res
    })
  }

}
