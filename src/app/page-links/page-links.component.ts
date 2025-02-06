import { Component, Input } from '@angular/core';
import { pageLinks } from 'src/assets/data/data';

@Component({
  selector: 'app-page-links',
  template: `
    <ul [class]="parentClass">
      <app-page-link 
        *ngFor="let link of pageLinks"
        [link]="link"
        [itemClass]="itemClass">
      </app-page-link>
    </ul>
  `,
  styleUrls: ['./page-links.component.css']
})
export class PageLinksComponent {
  @Input()
  parentClass: string = '';

  @Input()
  itemClass: string = '';
  
  pageLinks = pageLinks;
}
