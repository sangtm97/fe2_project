import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdProductComponent } from './ad-product/ad-product.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'product/:id', component: ProductComponent},
    {path: 'product', component: AllproductComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'cart', component: CartComponent},
    {path: 'admin/category', component: CategoryComponent},
    {path: 'admin/category/:id', component: CategoryComponent},
    {path: 'admin/product', component: AdProductComponent},
    {path: 'admin/product/:id', component: AdProductComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

