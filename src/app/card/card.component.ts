import { Component, input } from '@angular/core';

@Component({
  selector: 'p-card[appCard]',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  heading = input<string>();
  content = input<string>();
}
