// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const config: Configuration = {
  auth: {
    clientId: 'f3be7ae5-f467-46b1-981f-0264833d2b39',
    authority: 'https://demoexample1.b2clogin.com/demoexample1.onmicrosoft.com/B2C_1_SignUpSignIn/',
    knownAuthorities: ['demoexample1.b2clogin.com'],
    redirectUri: '/',
    postLogoutRedirectUri: '/',
    navigateToLoginRequestUrl: true
  },
  cache: {
    cacheLocation: BrowserCacheLocation.SessionStorage
  },
  system: {
    loggerOptions: {
        loggerCallback(logLevel: LogLevel, message: string) {
            console.log(message);
        },
        logLevel: LogLevel.Verbose,
        piiLoggingEnabled: false
    }
  }
};


export const environment = {
  msalConfig: config,
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
