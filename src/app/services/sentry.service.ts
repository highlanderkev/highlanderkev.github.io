import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';

import { environment } from '@environments/environment';

Sentry.init({
  dsn: environment.sentry.dsn,
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: ["localhost", "https://kevinpatrickwestropp.com", "https://highlanderkev-github-io.web.app/"],
      routingInstrumentation: Sentry.routingInstrumentation,
    })
  ],
  tracesSampleRate: 1.0,
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {

  handleError(error: any) {
    if (this.isTrueError(error)) {
      return this.handleTrueError(error as Error);
    }

    const err = error.originalError || error;
    if (environment.production) {
      Sentry.captureException(err);
    } else {
      console.error(err);
    }
    throw new Error(err);
  }

  private isTrueError(error: any): boolean {
    return (error instanceof Error);
  }

  handleTrueError(error: Error): void {
    if (environment.production) {
      Sentry.captureException(error);
    } else {
      console.error(error.message);
    }
    throw error;
  }
}
