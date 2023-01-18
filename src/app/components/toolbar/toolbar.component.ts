import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <button mat-icon-button (click)="toggleSideNav()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>{{title}}</span>
      <span class="spacer"></span>
      <app-copyright></app-copyright>
    </mat-toolbar-row>
  </mat-toolbar>
  `,
  styles: [`
  // .mdc-top-app-bar {
  //   color: $text-black;
  // }

  .spacer {
    flex: 1 1 auto;
  }
  `]
})
export class AppToolbarComponent {
  @Input()
  title?: string;

  @Output()
  toggleNav = new EventEmitter<boolean>();

  toggleSideNav() {
    this.toggleNav.emit(true);
  }
}
