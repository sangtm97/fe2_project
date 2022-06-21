import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ToppageComponent } from './toppage/toppage.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { AdProductComponent } from './ad-product/ad-product.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { AllproductComponent } from './allproduct/allproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    DetailComponent,
    ToppageComponent,
    PartnerComponent,
    FooterComponent,
    CategoryComponent,
    AdProductComponent,
    CardComponent,
    CartComponent,
    AllproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
