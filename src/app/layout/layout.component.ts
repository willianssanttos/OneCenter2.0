import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component'; 
import { ViewedComponent } from '../viewed/viewed.component'; 
import { HeaderComponent } from '../header/header.component'; 
import { BrandsComponent } from '../brands/brands.component'; 
import { CopyrightComponent } from '../copyright/copyright.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { BannerComponent } from "../banner/banner.component";
import { NewArrivalsComponent } from "../new-arrivals/new-arrivals.component";
//import { HomeComponent } from '../home/home.component';
import { BestSellersComponent } from '../best-sellers/best-sellers.component';
import { AdvertsComponent } from '../adverts/adverts.component';
import { ReviewsComponent } from '../reviews/reviews.component';


@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    //HomeComponent,
    AdvertsComponent,
    HeaderComponent,
    ViewedComponent,
    BrandsComponent,
    FooterComponent,
    CopyrightComponent,
    NewsletterComponent,
    BannerComponent,
    NewArrivalsComponent,
    BestSellersComponent,
    ReviewsComponent
],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  

}
