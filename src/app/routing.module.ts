import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import * as Sentry from '@sentry/angular';

import {
  AppReposPageComponent,
  AppGistsPageComponent,
  AppResumePageComponent
} from '@app/pages';

const routes: Routes = [
  {
    path: 'repos',
    component: AppReposPageComponent
  },
  {
    path: 'gists',
    component: AppGistsPageComponent
  },
  {
    path: 'resume',
    component: AppResumePageComponent
  },
  {
    path: '**',
    redirectTo: 'repos'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      enableTracing: true,
      useHash: false,
    }),
  ],
  providers: [
    {
      provide: Sentry.TraceService,
      deps:[Router]
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(trace: Sentry.TraceService) {}
}
