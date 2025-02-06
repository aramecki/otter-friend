import { Component } from '@angular/core';
import { pageLinks } from 'src/assets/data/data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logo = '/assets/images/logo.svg';
  pageLinks = pageLinks;
}
