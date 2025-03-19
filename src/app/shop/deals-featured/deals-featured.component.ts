import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-deals-featured',
  imports: [CommonModule, RouterLink],
  templateUrl: './deals-featured.component.html',
  styleUrl: './deals-featured.component.css'
})
export class DealsFeaturedComponent implements OnInit{
  produtos: any[] = [];
  
  constructor(private productService: ProductService) {}
  
  ngOnInit() {
    this.productService.produtos$.subscribe(
      produtos => this.produtos = produtos
    );
  }
}
