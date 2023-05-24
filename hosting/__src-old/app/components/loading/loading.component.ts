import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
  <section class="loading">
    <mat-spinner></mat-spinner>
  </section>
  `,
  styles: [`
    .loading {
      text-align: center;
      vertical-align: middle;
      margin-top: 40px;
      color: white;
      font-size: 20px;
      font-weight: 600;
      color: white;
    }
  `]
})
export class AppLoadingComponent {}
