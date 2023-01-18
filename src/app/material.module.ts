import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  faCodepen,
  faGit,
  faGithub,
  faGithubSquare,
  faGithubAlt,
  faLinkedin,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [
    // @angular/material
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    // etc.
    FontAwesomeModule,
  ]
})
export class AppMaterialModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCodepen,
      faGraduationCap,
      faGit,
      faGithub,
      faGithubSquare,
      faGithubAlt,
      faLinkedin,
      faStackOverflow);
  }
}
