import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <header #header>
      <app-toolbar #toolbar [title]="title" (toggleNav)="sidenav.toggle()"></app-toolbar>
    </header>
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #sidenav mode="over">
        <aside #aside>
          <app-profile></app-profile>
          <app-nav (click)="sidenav.toggle()"></app-nav>
        </aside>
      </mat-sidenav>
      <mat-sidenav-content>
        <main #main class="main container--row" role="main">
          <router-outlet (activate)="onActivate($event)"></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
  `,
  styles: [`
  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .container--column {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .container--row {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .header {
    position: fixed;
    z-index: 2;
  }

  .sidenav-container {
    flex: 1;
  }

  .main {
    justify-content: center;
    min-height: 800px;
  }
  `]
})
export class AppRootComponent implements OnInit {
  title = 'Highlanderkev';

  constructor() {}

  ngOnInit() {}

  onActivate(component: any) {
    this.title = component.title;
  }
}
