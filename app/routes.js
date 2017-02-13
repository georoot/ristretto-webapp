module.exports = function(app) {
  app.config(function($routeProvider, $locationProvider,RestangularProvider) {
    $routeProvider
      .when("/",{
        templateUrl: "/templates/application.html"
      })
      .when("/login",{
        templateUrl: "/templates/login.html"
      })
      .when("/new",{
        templateUrl: "/templates/newRepo.html"
      });

    $locationProvider.html5Mode(true);
    RestangularProvider.setBaseUrl("http://localhost:3000");
  })
}
