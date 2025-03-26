import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  imports:[CommonModule ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  produto: any = null;
  imagemSelecionada: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.productService.getProductById(Number(id)).subscribe(
        (produto) => {
          this.produto = produto;
          this.imagemSelecionada = produto.produto_imagem;
        },
        (erro) => console.error('Erro ao carregar produto', erro)
      );
    }
  }

  selecionarImagem(imagem: string) {
    this.imagemSelecionada = imagem;
  }
}
