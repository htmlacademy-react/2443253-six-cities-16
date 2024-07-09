const setting = {
  offersCount : 312,
};


enum AppRoute {
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
  Main = '/main',
  Favorite = '/favorite',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export {setting, AppRoute, AuthorizationStatus};
