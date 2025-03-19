import { Component, OnInit } from '@angular/core';
//import { HomeComponent } from '../home/home.component'; 
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { DealsFeaturedComponent } from "./deals-featured/deals-featured.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shop',
  imports: [
    RouterModule,
    CommonModule,
    //HomeComponent,
    ShopSidebarComponent,
    DealsFeaturedComponent
],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent{
  
}
