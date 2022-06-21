import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-ad-product',
  templateUrl: './ad-product.component.html',
  styleUrls: ['./ad-product.component.css']
})
export class AdProductComponent implements OnInit {

  dataProduct: any;
  checkAction = false;
  objProduct = {
    id: '',
    proName: '',
    price: '',
    catId: '',
    image: '',
    desc: '',
  }
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  addNewProduct(formValue:any){
    console.log(formValue);
    this.commonService.createProduct(formValue).subscribe((res)=>{
      console.log("Them thanh cong");
      this.getAllProduct();
    });
  }

  //lay toan bo db len
  getAllProduct(){
    this.commonService.listAllProduct().subscribe((res)=>{
      this.dataProduct = res
    })
  }

  //lay de sua du lieu
  editProduct(itemCat: any){
    this.checkAction = true;
    this.objProduct = itemCat;
  }

  updateProduct(itemCat: any){
    this.checkAction = false;
    console.log(itemCat);
    this.commonService.updateProduct(itemCat).subscribe((res)=>{
      this.getAllProduct();
    })
  }

  deleteProduct(itemCat: any){
    this.commonService.deleteProduct(itemCat).subscribe((res)=>{
      this.getAllProduct();
    })
  }

}
