import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ShopComponent } from '../shop/shop.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ProductComponent } from '../product/product.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
{path: '', redirectTo: 'shop', pathMatch: 'full'},
 {
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'shop', component: ShopComponent},
    { path: 'cart', component: CartComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'product/:id', component: ProductComponent }
  ]
 }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
