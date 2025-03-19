import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageMenuComponent } from '../header/page-menu/page-menu.component';
import { HeaderMainComponent } from '../header/header-main/header-main.component';
import { MainNavigationComponent } from '../header/main-navigation/main-navigation.component';

@Component({
  selector: 'app-header',
  imports: [
    TopBarComponent,
    PageMenuComponent,
    HeaderMainComponent,
    MainNavigationComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
