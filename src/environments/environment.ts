// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  emailAPI: 'http://XXXXXX.com/contact-form.php',
  database: 'firebase',
  social: {
    role: 'Guest',
    fblink: 'https://www.facebook.com/georgebarretpandaraparambil',
    linkedin: 'https://www.linkedin.com/company/alanbarret/about/?viewAsMember=true',
    github: 'https://github.com/fallenangel2305/',
    emailid: 'alanbarret98@gmail.com'
  },
  socialAuthEnabled: true,
  firebaseConfig: {
    apiKey: "AIzaSyDk3mSzph2vPDKqOdBUH5xIZ3kdKSdkL1c",
    authDomain: "code-online-1a827.firebaseapp.com",
    databaseURL: "https://code-online-1a827.firebaseio.com",
    projectId: "code-online-1a827",
    storageBucket: "",
    messagingSenderId: "766514974867",
    appId: "1:766514974867:web:d8eb92f8e8e430c5"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
