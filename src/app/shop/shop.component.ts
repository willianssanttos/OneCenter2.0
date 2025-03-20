import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';

@Component({
  selector: 'app-shop',
  imports: [
    RouterModule,
    CommonModule,
    HomeComponent,
    ShopSidebarComponent
],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent{
  
}
