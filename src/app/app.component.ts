import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ 
   RouterOutlet
  ]
})
export class AppComponent implements OnInit{
  title = 'OneCenter2.0';

  constructor(private productService: ProductService){}

  ngOnInit() {
      this.productService.getProducts().subscribe();
  }
}
