import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-tabs',
  imports: [TabsModule, CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  activeTabId = '01';

  sections = [
    {
      id: '01',
      title: 'Track and manage your Net Zero Pathway',
      content:
        'Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.',
    },
    {
      id: '02',
      title: 'Track and manage your Net Zero Pathway',
      content:
        'Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.',
    },
    {
      id: '03',
      title: 'Track and manage your Net Zero Pathway',
      content:
        'Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.',
    },
  ];

  setActiveTab(tabId: string): void {
    this.activeTabId = tabId;
  }

  isActive(tabId: string): boolean {
    return this.activeTabId === tabId;
  }
}
