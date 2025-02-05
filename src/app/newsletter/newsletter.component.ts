import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  imports: [],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit {
  permiteNewsLetter = false;
  textNewsLetter = "...e receba um cupom de 20% na primeira compra."

  ngOnInit() {
    setTimeout(() => {
      this.permiteNewsLetter = true;
    }, 5000);
  }

  onSubmitNewsLetter(){
    this.textNewsLetter = "E-mail enviado";

  }

}
