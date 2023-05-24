import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '@app/services';
import { IPersonalData } from '@app/models';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ILink {
  external: boolean;
  isActive: boolean;
  name: string;
  url: string;
  icon: IconProp;
}

@Component({
  selector: 'app-nav',
  template: `
  <mat-nav-list>
    <a mat-list-item [href]="link.url" *ngFor="let link of internalLinks" [activated]="isLinkActive(link.url)">
      <fa-icon matListItemIcon [icon]="link.icon" [size]="'2x'"></fa-icon>
      <h4 matListItemTitle class="mat-mdc-list-item-title">{{link.name}}</h4>
    </a>
    <mat-divider></mat-divider>
    <a mat-list-item [href]="link.url" *ngFor="let link of externalLinks" [activated]="isLinkActive(link.url)" target="_blank">
      <fa-icon matListItemIcon [icon]="link.icon" [size]="'2x'" [style]="'color: white'"></fa-icon>
      <h4 matListItemTitle class="mat-mdc-list-item-title">{{link.name}}</h4>
      <p matListItemLine>External</p>
      <mat-icon matListItemMeta class="mat-icon">open_in_new</mat-icon>
    </a>
  </mat-nav-list>
  `,
  styles: [`
  .mat-icon {
    height: 100%;
  }

  .mat-mdc-list-item-title {
    font-weight: 400;
  }

  .mat-mdc-list-item-icon {
    color: white;
  }

  .mdc-list-item--activated {
    color: var(--mdc-theme-primary, #03a9f4)
  }
  `]
})
export class AppNavComponent implements OnInit {
  profile?: Observable<IPersonalData>;

  internalLinks: Array<ILink> = [
    {
      external: false,
      isActive: false,
      name: 'Github Repos',
      url: 'repos',
      icon: ['fab', 'github-square'],
    },
    {
      external: false,
      isActive: false,
      name: 'Github Gists',
      url: 'gists',
      icon: ['fab', 'github-alt'],
    },
    {
      external: false,
      isActive: false,
      name: 'Curriculum Vitae',
      url: 'resume',
      icon: ['fas', 'graduation-cap'],
    }
  ];

  externalLinks: Array<ILink> = [
    {
      external: true,
      isActive: false,
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/kevinpatrickwestropp',
      icon: ['fab', 'linkedin'],
    },
    {
      external: true,
      isActive: false,
      name: 'Github',
      url: 'http://github.com/highlanderkev',
      icon: ['fab', 'github'],
    },
    {
      external: true,
      isActive: false,
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/1701801/highlanderkev',
      icon: ['fab', 'stack-overflow'],
    },
    {
      external: true,
      isActive: false,
      name: 'CodePen',
      url: 'https://codepen.io/highlanderkev/',
      icon: ['fab', 'codepen']
    }
  ];

  constructor(
    private profileService: ProfileService,
    private router: Router) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }

  public onClick(url: string, external: boolean): void {
    // event?.preventDefault();
    // TODO: https://medium.com/@adrianfaciu/using-the-angular-router-to-navigate-to-external-links-15cc585b7b88
    if (external) {
      window.open(url);
    } else {
      this.router.navigate([url]);
    }
  }

  public isLinkActive(url: string) {
    return this.router.isActive(url, false);
  }
}
