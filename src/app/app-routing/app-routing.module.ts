import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ShopContentComponent } from '../shop/shop-content/shop-content.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
 {path: '', redirectTo: 'shop', pathMatch: 'full'},
 {
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'shop', component: ShopContentComponent},
    { path: 'product', component: ProductComponent}
  ]
 }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
