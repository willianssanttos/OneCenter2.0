import { Component } from '@angular/core';
//import { HomeComponent } from '../home/home.component'; 
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';
import { ShopContentComponent } from '../shop/shop-content/shop-content.component';

@Component({
  selector: 'app-shop',
  imports: [
    //HomeComponent,
    ShopContentComponent,
    ShopSidebarComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
