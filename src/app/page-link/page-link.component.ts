import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-link',
  template: `
    <li [class]="itemClass">
      <a [href]="link.href">{{ link.text }}</a>
    </li>
  `,
  styleUrls: ['./page-link.component.css'],
})
export class PageLinkComponent {
  @Input() link!: { id: number; text: string; href: string };
  @Input() itemClass: string = '';

  ngOnInit() {
    console.log('ItemClass ricevuto:', this.itemClass);
  }
}
