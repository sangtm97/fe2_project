import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  dateCate: any;
  checkAction = false;
  objCat = {
    catName:'',
    id: ''
  }
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getLatCategory();
  }

  addNewCategory(formValue:any){
    console.log(formValue);
    this.commonService.createCategory(formValue).subscribe((res)=>{
      console.log("Them thanh cong");
      this.getLatCategory();
    });
  }

  //lay toan bo db len
  getLatCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
      this.dateCate = res
    })
  }

  //lay de sua du lieu
  editCat(itemCat: any){
    this.checkAction = true;
    this.objCat = itemCat;
  }

  updateCategory(itemCat: any){
    this.checkAction = false;
    console.log(itemCat);
    this.commonService.updateCategory(itemCat).subscribe((res)=>{
      this.getLatCategory();
    })
  }

  deleteCategory(itemCat: any){
    this.commonService.deleteCategory(itemCat).subscribe((res)=>{
      this.getLatCategory();
    })
  }

}
