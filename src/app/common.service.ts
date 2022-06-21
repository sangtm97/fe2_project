import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  createCategory(dataCat:any){
    //luu vao db
    return this.http.post("http://localhost:3000/category", dataCat);
  }

  listAllCategory(){
    return this.http.get("http://localhost:3000/category");
  }

  updateCategory(dataCat:any){
    return this.http.put("http://localhost:3000/category"+dataCat.id, dataCat);
  }
  
  deleteCategory(dataCat:any){
    return this.http.delete("http://localhost:3000/category/"+dataCat.id);
  }

  listAllProduct(){
    return this.http.get("http://localhost:3000/product");
  }
  listAllbestProduct(best:any){
    return this.http.get("http://localhost:3000/product");
  }

  listProductByCategory(catId:any){
    // console.log(catId);
    return this.http.get("http://localhost:3000/product/"+catId);
  }

  createProduct(dataPro:any){
    //luu vao db
    return this.http.post("http://localhost:3000/product", dataPro);
  }

  updateProduct(dataPro:any){
    return this.http.put("http://localhost:3000/product"+dataPro.id, dataPro);
  }
  
  deleteProduct(dataPro:any){
    return this.http.delete("http://localhost:3000/product/"+dataPro.id);
  }

  getProductById(id:any){
    return this.http.get("http://localhost:3000/product/"+id);
  }

  //new for add product
  public editCart: any = {cart: 0, products: [], subTotal:0, grandTotal:0};
  public subject = new Subject<any>();

  private cartSource = new BehaviorSubject(this.editCart);
  currentCart = this.cartSource.asObservable();
  updateCart(item:any){
    this.cartSource.next(item);
  }
}
