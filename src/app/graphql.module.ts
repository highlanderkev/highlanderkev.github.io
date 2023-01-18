import {NgModule} from '@angular/core';
import {Apollo, ApolloModule} from 'apollo-angular';
import {createHttpLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

import { environment } from '@environments/environment';

declare const GH_ACCESS_TOKEN: string;

@NgModule({
  imports: [ApolloModule],
  exports: [ApolloModule],
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
  ) {
    apollo.create({
      link: this.apolloLink,
      cache: this.apolloCache,
    });
  }

  private get apolloCache() {
    return new InMemoryCache();
  }

  private get apolloLink() {
    return this.authLink.concat(this.httpLink);
  }

  private get httpLink() {
    return createHttpLink({
      uri: environment.github.api.graphURL
    });
  }

  private get authLink() {
    return setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${GH_ACCESS_TOKEN}`,
        }
      };
    });
  }
}
