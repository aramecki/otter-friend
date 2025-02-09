import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-red-message',
  template: `<div id="message-div" style="max-width: 100%; text-align: start;">
  <div style="margin-left: 2rem;">
    <h3 class="default">{{this.price}}€</h3><p class="default" style="margin-left: 0.5rem;"> al mese</p>
  </div>
    <p class="default" style="padding-left: 1rem;">Otterrai:</p>
    <ul>
      <li *ngFor="let el of benefit" style="margin: 0; padding: 0; max-width: inherit;">{{el}}</li>
    </ul>
    </div>`,
  styleUrls: ['./red-message.component.css']
})
export class RedMessageComponent implements OnChanges {
  @Input()
  message!: string;

  price: string;
  benefit: string[];

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['message'].currentValue === 'red') {
        this.price = "50,00";
        this.benefit = [this.magazine, this.alwaysVisit, this.peluche];
        return;
      } else if (changes['message'].currentValue === 'yellow') {
        this.price = "40,00";
        this.benefit = [this.magazine, this.oneVisit];
        return;
      } else {
        this.price = "25,00";
        this.benefit = [this.magazine];
        return;
      }
  }

  magazine = 'Rivista mensile sulle lontre e il loro ecosistema.';
  alwaysVisit = 'Visita gratuita qualsiasi giorno nella nostra sede.';
  oneVisit = 'Una visita gratuita nella nostra sede.';
  peluche = 'Il simpatico peluche plastic-free di "Otty", la nostra mascotte.';

}
