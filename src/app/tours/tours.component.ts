import { Component } from '@angular/core';
import { tours } from 'src/assets/data/data';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {
  tours = tours;
}
