import { Pipe, PipeTransform } from '@angular/core';
import { ICardData, GithubGraphRepoNode } from '@app/models';

@Pipe({
  name: 'reposToCards'
})
export class ReposToCardsPipe implements PipeTransform {
  // transform(repos: IGithubRepo[]): ICardData[] {
  //   return this.convertReposToCardData(repos);
  // }

  // private convertReposToCardData(repos: IGithubRepo[]): ICardData[] {
  //   return repos.map((repo: IGithubRepo) => {
  //     return this.convertRepoToCardData(repo);
  //   });
  // }

  // private convertRepoToCardData(repo: IGithubRepo): ICardData {
  //   return {
  //       title: repo.name,
  //       subtitle: `${repo.language} | ${repo.html_url} | ${repo.ssh_url}`,
  //       text: repo.description,
  //       link: repo.html_url
  //   };
  // }

  transform(repos: GithubGraphRepoNode[]): ICardData[] {
    return this.convertReposToCardData(repos);
  }

  private convertReposToCardData(repos: GithubGraphRepoNode[]): ICardData[] {
    return repos.map((repo: GithubGraphRepoNode) => {
      return this.convertRepoToCardData(repo);
    });
  }

  private convertRepoToCardData(repo: GithubGraphRepoNode): ICardData {
    const languages = repo.languages.nodes.map((language) => language.name).reduce((acc, value) => acc + ' + ' + value);
    return {
        title: repo.name,
        subtitle: `${languages} | ${repo.url} | ${repo.sshUrl}`,
        text: repo.description,
        link: repo.url
    };
  }
}
