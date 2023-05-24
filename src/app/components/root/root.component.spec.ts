import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/routing.module';
import { AppMaterialModule } from '@app/material.module';
import { FirebaseModule } from '@app/firebase.module';
import {
  AppRootComponent,
  AppCardComponent,
  AppCopyrightComponent,
  AppNavComponent,
  AppProfileComponent,
  AppToolbarComponent,
  AppLoadingComponent,
} from '@app/components';
import {
  AppGistsPageComponent,
  AppReposPageComponent,
  AppResumePageComponent,
} from '@app/pages';
import {
  GistsToCardsPipe,
  ReposToCardsPipe
} from '@app/pipes';
import { ProfileService } from '@app/services';

describe('AppRootComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FirebaseModule,
      ],
      declarations: [
        AppRootComponent,
        AppCardComponent,
        AppCopyrightComponent,
        AppLoadingComponent,
        AppNavComponent,
        AppProfileComponent,
        AppToolbarComponent,
        AppGistsPageComponent,
        AppReposPageComponent,
        AppResumePageComponent,
        GistsToCardsPipe,
        ReposToCardsPipe
      ],
      providers: [
        ProfileService,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppRootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
});
