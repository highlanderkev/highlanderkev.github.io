import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable } from 'rxjs';
import { BrowserStorageService, GraphService } from '@app/services';
import { IGithubRepo } from '@app/models';
import gql from 'graphql-tag';

const queryRepos = `
query Repos {
  viewer {
    repositories(first: 50, privacy: PUBLIC, orderBy: { direction: ASC, field: NAME }){
      nodes {
        name
        url
        sshUrl
        description
        languages(first:5) {
          nodes {
            name
          }
        }
      }
    }
  }
}
`;

@Injectable()
export class RepoService {
  private readonly FUNCTION_NAME = 'github-getRepos';

  constructor(
    private functions: AngularFireFunctions,
    private localStorageService: BrowserStorageService,
    private graphService: GraphService) {}

  private get storageKey(): string {
    return 'repos';
  }

  public queryForRepos(): any {
    return this.graphService.watchQuery<any>(queryRepos).valueChanges;
  }

  public getReposFromLocalStorage(): any {
    return this.localStorageService.getItem(this.storageKey);
  }

  public setReposInLocalStorage(repos: IGithubRepo[]): void {
    this.localStorageService.setItem(this.storageKey, repos);
  }

  public getReposFromFirebase(): Observable<IGithubRepo[]> {
    const callable = this.functions.httpsCallable(this.FUNCTION_NAME);
    return callable({ name: this.FUNCTION_NAME });
  }
}
