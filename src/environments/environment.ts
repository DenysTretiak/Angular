// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
      apiKey: 'AIzaSyBdasw97-AJ20khK9w34Y85Zakw0aXZAi0',
      authDomain: 'to-do-list-database.firebaseapp.com',
      databaseURL: 'https://to-do-list-database.firebaseio.com',
      projectId: 'to-do-list-database',
      storageBucket: 'to-do-list-database.appspot.com',
      messagingSenderId: '1097738405738'
  }
};
