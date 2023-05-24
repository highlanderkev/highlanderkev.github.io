import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Observable } from 'rxjs';
import { BrowserStorageService, GraphService } from '@app/services';
import { IGithubGist } from '@app/models';
import gql from 'graphql-tag';

const queryGists = `
query Gists {
  viewer {
    gists(first: 50, privacy: PUBLIC) {
      nodes {
        name
        description
        url
        files(limit: 10) {
          name
          language {
            name
          }
        }
      }
    }
  }
}
`;

@Injectable()
export class GistService {
  private readonly FUNCTION_NAME = 'github-getGists';

  constructor(
    private functions: AngularFireFunctions,
    private localStorageService: BrowserStorageService,
    private graphService: GraphService
  ) {}

  private get storageKey() {
    return 'gists';
  }

  public queryForGists() {
    return this.graphService.watchQuery<any>(queryGists).valueChanges;
  }

  public getGistsFromLocalStorage(): any {
    return this.localStorageService.getItem(this.storageKey);
  }

  public setGistsInLocalStorage(gists: IGithubGist[]): void {
    this.localStorageService.setItem(this.storageKey, gists);
  }

  public getGistsFromFirebase(): Observable<IGithubGist[]> {
    const callable = this.functions.httpsCallable(this.FUNCTION_NAME);
    return callable({ name: this.FUNCTION_NAME });
  }
}
