import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
  <div class='section-title'>
    <h2>{{title}} <span>{{secTitle}}</span></h2>
  </div>
  `,
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input()
  title!: string;

  @Input()
  secTitle!: string;

}
