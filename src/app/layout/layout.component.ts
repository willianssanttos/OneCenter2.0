import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component'; 
import { ViewedComponent } from '../viewed/viewed.component'; 
import { HeaderComponent } from '../header/header.component'; 
import { BrandsComponent } from '../brands/brands.component'; 
import { CopyrightComponent } from '../copyright/copyright.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
//import { HomeComponent } from '../home/home.component';



@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    CommonModule,
    //HomeComponent,
    HeaderComponent, 
    ViewedComponent, 
    BrandsComponent,
    FooterComponent,
    CopyrightComponent,
    NewsletterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
