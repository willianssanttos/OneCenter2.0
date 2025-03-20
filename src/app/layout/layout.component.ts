import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CopyrightComponent } from '../copyright/copyright.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';



@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    NewsletterComponent
],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}
