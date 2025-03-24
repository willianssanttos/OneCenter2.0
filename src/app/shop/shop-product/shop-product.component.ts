import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shop-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './shop-product.component.html',
  styleUrl: './shop-product.component.css'
})
export class ShopProductComponent implements OnInit{
  produtos: any[] = [];
  
  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.productService.produtos$.subscribe(
      produtos => this.produtos = produtos
    );
  }
}
