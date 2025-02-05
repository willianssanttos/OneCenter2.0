import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../../product/product-item/product-item.component';


@Component({
  selector: 'app-shop-content',
  standalone: true,
  templateUrl: './shop-content.component.html',
  styleUrl: './shop-content.component.css',
  imports: [CommonModule, ProductItemComponent], 
})
export class ShopContentComponent {
  qtdeProdutos = 200;
  produtos: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('Produtos recebidos:', data); 
        this.produtos = data.produto;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      },
    });
  }

  getQtdeProdutos(): number {
    return this.qtdeProdutos;
  }

}
