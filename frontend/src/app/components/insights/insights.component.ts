import { Component } from '@angular/core';
import { FinanceService } from '../../services/finance.service';

@Component({
  selector: 'app-insights',
  template: `
    <h2>AI-Generated Budget Insights</h2>
    <button (click)="getInsights()">Generate Insights</button>
    <ul>
      <li *ngFor="let tip of insights">{{ tip }}</li>
    </ul>
  `
})
export class InsightsComponent {
  insights: string[] = [];

  constructor(private financeService: FinanceService) {}

  getInsights() {
    const userData = { spending: [1000, 800, 1200], category: "Essentials" };
    this.financeService.getInsights(userData).subscribe((res: any) => {
      this.insights = res.insights;
    });
  }
}
