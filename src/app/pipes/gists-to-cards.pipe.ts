import { Pipe, PipeTransform } from '@angular/core';
import { ICardData, GithubGraphGistNode } from '@app/models';

@Pipe({
  name: 'gistsToCards'
})
export class GistsToCardsPipe implements PipeTransform {
  // transform(gists: IGithubGist[]): ICardData[] {
  //   return this.convertGistsToCardData(gists);
  // }

  // private convertGistsToCardData(gists: IGithubGist[]): ICardData[] {
  //   return gists.map((gist: IGithubGist) => this.convertGistToCardData(gist));
  // }

  // private convertGistToCardData(gist: IGithubGist): ICardData {
  //   return {
  //     title: gist.description,
  //     subtitle: `${gist.html_url} | ${gist.git_pull_url}`,
  //     text: Object.keys(gist.files).join(' | '),
  //     link: gist.html_url
  //   };
  // }

  transform(gists: GithubGraphGistNode[]): ICardData[] {
    return this.convertGistsToCardData(gists);
  }

  private convertGistsToCardData(gists: GithubGraphGistNode[]): ICardData[] {
    return gists.map((gist: GithubGraphGistNode) => this.convertGistToCardData(gist));
  }

  private convertGistToCardData(gist: GithubGraphGistNode): ICardData {
    const textFiles = gist.files.map((file) => file.name).reduce((acc, val) => acc + ' | ' + val);
    const languages = gist.files.map((file) => file.language.name).reduce((acc, val) => acc + ' + ' + val);
    return {
      title: gist.description,
      subtitle: `${languages} | ${gist.url}`,
      text: textFiles,
      link: gist.url
    };
  }
}
