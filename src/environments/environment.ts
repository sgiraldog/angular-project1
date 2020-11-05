// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://pokeapi.co/api/v2',
  SPRITES_URL: 'https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/',
  POKEMON_LIST_OFFSET: 20,
  POKEMON_FAVORITE_LIMIT: 5
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
