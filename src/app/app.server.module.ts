import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from '@app/app.module';
import { AppRootComponent } from '@app/components';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppRootComponent],
})
export class AppServerModule {}
