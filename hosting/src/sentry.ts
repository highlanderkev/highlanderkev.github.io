import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';

class SentryInstance {
  get SentryApp() {
    Sentry.init({
      dsn: import.meta.env.PUBLIC_SENTRY_DSN || '',
      release: `${import.meta.env.SITE}`,
      integrations: [
        new BrowserTracing({
          tracePropagationTargets: ["localhost", "https://kevinpatrickwestropp.com", "https://highlanderkev-github-io.web.app/"],
          // routingInstrumentation: Sentry.routingInstrumentation,
        })
      ],
      tracesSampleRate: 1.0,
    });
    return Sentry;
  }

  logError(error: Error | string) {
    if(error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}

export default new SentryInstance();
