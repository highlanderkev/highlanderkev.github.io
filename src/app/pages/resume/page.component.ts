import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResumeService } from '@app/services';

@Component({
  selector: 'app-resume',
  template: `
  <section *ngIf="resumeUrl | async as resumeUrl; else loading" class="section-resume">
    <mat-card>
      <mat-card-header>
        <mat-card-title>Resume PDF</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <pdf-viewer class="pdf-viewer" [src]="resumeUrl" [render-text]="true" [original-size]="false" [fit-to-page]="true" [show-all]="true" [autoresize]="true"></pdf-viewer>
      </mat-card-content>
      <mat-card-actions>
        <a mat-flat-button color="accent" download="resume.pdf" href="{{resumeUrl}}" target="_blank">Download PDF <mat-icon>picture_as_pdf</mat-icon></a>
      </mat-card-actions>
    </mat-card>
  </section>
  <ng-template #loading><app-loading></app-loading></ng-template>
  `,
  styleUrls: ['./page.component.scss']
})
export class AppResumePageComponent implements OnInit {
  readonly title = 'Curriculum Vitae (Résumé)';

  resumeUrl?: Observable<any>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeUrl = this.resumeService.getResume();
  }
}
