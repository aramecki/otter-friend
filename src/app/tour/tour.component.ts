import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {
  tour = '/assets/images/tour-1.jpeg';
  @Input()
  tourObj!: {title: string, info: string, image: string, location: string, date: string, duration: number, price: number};
}
