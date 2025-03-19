import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-arrivals',
  imports: [RouterModule, CommonModule],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent implements OnInit{

produtos: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.produtos$.subscribe(
      produtos => this.produtos = produtos
    );
  }
}
