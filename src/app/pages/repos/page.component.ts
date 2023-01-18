import { Component, OnInit } from '@angular/core';
import { GithubGraphRepoNode } from '@app/models';
import { RepoService } from '@app/services';

@Component({
  selector: 'app-repos-page',
  template: `
  <app-loading *ngIf="loading"></app-loading>
  <section *ngIf="data" class="section-repos">
    <app-card *ngFor="let repo of data | reposToCards" [data]="repo"></app-card>
  </section>
  `,
  styles: [`
    .section-repos {
      display: flex;
      flex-flow: row wrap;
      place-content: stretch center;
      align-items: stretch;
      box-sizing: border-box;
      margin-top: 1rem;
    }
  `]
})
export class AppReposPageComponent implements OnInit {
  readonly title = 'Github Repos';

  loading = true;

  data?: GithubGraphRepoNode[];

  constructor(private repoService: RepoService) {}

  ngOnInit() {
    this.repoService.queryForRepos().subscribe(({data, loading}: { data: any, loading: any}) => {
      this.loading = loading;
      this.data = data.viewer.repositories.nodes;
    });
  }
}
