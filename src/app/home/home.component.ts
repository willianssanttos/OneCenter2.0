import { Component } from '@angular/core';
import { ShopHomeComponent } from "./shop-home/shop-home.component";

@Component({
  selector: 'app-home',
  imports: [ShopHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
