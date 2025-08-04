import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://20430dedf951eccb34dddafeb759b6ce@o4509788027027456.ingest.de.sentry.io/4509788038234192",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
