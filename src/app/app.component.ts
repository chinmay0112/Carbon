import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'carbonProject';
  card: any[] = [];
  ngOnInit(): void {
    this.card = [
      {
        title: 'Regulatory Compliance and Reporting',
        text: 'Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements',
      },
      {
        title: 'Meeting Sustainability Goals and Net-Zero Targets',
        text: 'Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements',
      },
      {
        title: 'Cost Savings and Operational Efficiency',
        text: 'Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements',
      },
      {
        title: 'Investor and Consumer Expectations',
        text: 'Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements',
      },
      {
        title: 'Climate Risk Management',
        text: 'Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements',
      },
      {
        title: 'Strengthening Brand Reputation and Market Leadership',
        text: 'Governments and regulatory bodies worldwide are implementing stricter climate policies and carbon reporting requirements',
      },
    ];
  }
}
