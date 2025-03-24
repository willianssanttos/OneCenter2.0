import { Component } from '@angular/core';
import { TrendsComponent } from '../../trends/trends.component';
import { ViewedComponent } from '../../viewed/viewed.component';
import { BrandsComponent } from '../../brands/brands.component';
import { BannerComponent } from '../../banner/banner.component';
import { AdvertsComponent } from '../../adverts/adverts.component';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { NewArrivalsComponent } from '../../new-arrivals/new-arrivals.component';
import { BestSellersComponent } from '../../best-sellers/best-sellers.component';
import { ShopSidebarComponent } from '../../shop/shop-sidebar/shop-sidebar.component';
import { ShopProductComponent } from "../../shop/shop-product/shop-product.component";

@Component({
  selector: 'app-shop-home',
  imports: [
    TrendsComponent,
    ViewedComponent,
    BrandsComponent,
    BannerComponent,
    AdvertsComponent,
    ReviewsComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    ShopSidebarComponent,
    ShopProductComponent
],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.css'
})
export class ShopHomeComponent {

}
