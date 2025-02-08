import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-red-message',
  template: `<div style="max-width: 100%; text-align: start;">
    <p>{{this.price}}€ al mese</p>
    <ul>
      <li *ngFor="let el of benefit" style="margin: 0; padding: 0; max-width: inherit;">{{el}}</li>
    </ul>
    </div>`,
  styleUrls: ['./red-message.component.css']
})
export class RedMessageComponent implements OnChanges {
  @Input()
  message!: string;

  price: number;
  benefit: string[];

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['message'].currentValue === 'red') {
        this.price = 50;
        this.benefit = this.redBenefits;
        return;
      }
  }


  redBenefits = [
    'Rivista mensile sulle lontre e il loro ecosistema.',
    'Visita gratuita qualsiasi giorno nella nostra sede.',
    'Il simpatico peluche plastic-free di "Otty", la nostra mascotte.'
  ]
  
}
