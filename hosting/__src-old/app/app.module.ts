import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './routing.module';
import { GraphQLModule } from './graphql.module';
import { AppMaterialModule } from './material.module';
import { FirebaseModule } from './firebase.module';

import {
  AppCardComponent,
  AppCopyrightComponent,
  AppLoadingComponent,
  AppNavComponent,
  AppProfileComponent,
  AppRootComponent,
  AppToolbarComponent,
} from '@app/components';
import { AppGistsPageComponent, AppReposPageComponent, AppResumePageComponent } from '@app/pages';
import { GistsToCardsPipe, ReposToCardsPipe } from '@app/pipes';
import {
  ApiService,
  BrowserStorageService,
  GistService,
  GraphService,
  ProfileService,
  RepoService,
  ResumeService,
  SentryErrorHandler
} from '@app/services';

import { environment } from '@environments/environment';

@NgModule({
  declarations: [
    // AppComponent,
    AppCardComponent,
    AppCopyrightComponent,
    AppLoadingComponent,
    AppNavComponent,
    AppProfileComponent,
    AppRootComponent,
    AppToolbarComponent,
    // Pages
    AppGistsPageComponent,
    AppReposPageComponent,
    AppResumePageComponent,
    // Pipes
    GistsToCardsPipe,
    ReposToCardsPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    AppMaterialModule,
    FirebaseModule,
    // PdfViewerModule,
  ],
  providers: [
    ApiService,
    BrowserStorageService,
    GistService,
    GraphService,
    ProfileService,
    RepoService,
    ResumeService,
    {
      provide: ErrorHandler,
      useClass: SentryErrorHandler
    },
  ],
  bootstrap: [
    AppRootComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor() {
    console.log(environment);
  }
}
