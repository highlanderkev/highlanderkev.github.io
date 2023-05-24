import { Component, OnInit } from '@angular/core';
import { GistService } from '@app/services';
import { GithubGraphGistNode } from '@app/models';

@Component({
  selector: 'app-gists-page',
  template: `
  <app-loading *ngIf="loading"></app-loading>
  <section *ngIf="data" class="section-gists">
    <app-card *ngFor="let gist of data | gistsToCards" [data]="gist"></app-card>
  </section>
  `,
  styles: [`
  .section-gists {
    display: flex;
    flex-flow: row wrap;
    place-content: stretch center;
    align-items: stretch;
    box-sizing: border-box;
    margin-top: 1rem;
  }
    `]
})
export class AppGistsPageComponent implements OnInit {
  readonly title = 'Github Gists';
  loading = true;
  data?: GithubGraphGistNode[];

  constructor(private gistService: GistService) {}

  ngOnInit() {
    this.gistService.queryForGists().subscribe(({data, loading}) => {
      this.loading = loading;
      this.data = data.viewer.gists.nodes;
    });
  }
}
