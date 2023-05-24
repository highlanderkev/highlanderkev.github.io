import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';

@Injectable()
export class GraphService {

  constructor(private apollo: Apollo) {}

  public get language() {
    return this.query(`{
        repository(owner:"highlanderkev", name:"snippets.scala") {
          languages(first: 1){
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }`);
  }

  private stringToQuery(queryString: string): DocumentNode {
    return gql`${queryString}`;
  }

  public query<T>(query: string): Observable<ApolloQueryResult<T>> {
    return this.apollo.query<T>({
      query: this.stringToQuery(query)
    });
  }

  public watchQuery<T>(query: string): QueryRef<T> {
    return this.apollo.watchQuery<T>({
      query: this.stringToQuery(query)
    });
  }
}
