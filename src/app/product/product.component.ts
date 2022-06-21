import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any;
  catId:any;
  constructor(private commonService:CommonService,private activatedRoute: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.catId = params.get('id');
      console.log(this.catId);
    });
    this.getProductByCategoryId(this.catId);
  }

   //lay toan bo db len
   getProductByCategoryId(id:any){
    this.commonService.listProductByCategory(id).subscribe((res)=>{
      this.products = res
    })
  }

}
