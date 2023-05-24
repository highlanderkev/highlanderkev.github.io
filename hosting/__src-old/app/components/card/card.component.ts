import { Component, Input } from '@angular/core';
import { ICardData } from '@app/models';

@Component({
  selector: 'app-card',
  template: `
  <mat-card>
    <mat-card-header>
      <mat-card-title>{{data?.title}}</mat-card-title>
      <mat-card-subtitle>{{data?.subtitle}}</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
      <p class="text-content">{{data?.text}}</p>
    </mat-card-content>
    <mat-card-actions class="mat-card-actions">
      <button mat-flat-button (click)="openClick()" color="primary">Open <mat-icon>open_in_new</mat-icon></button>
    </mat-card-actions>
  </mat-card>
  `,
  styleUrls: ['./card.component.scss']
})
export class AppCardComponent {
  @Input()
  data?: ICardData;

  openClick(): void {
    let opener = window?.open(this?.data?.link)
    if(opener) opener = null;
  }
}
