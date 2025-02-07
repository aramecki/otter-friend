import { Component } from '@angular/core';
import { services } from 'src/assets/data/data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = services;
}
