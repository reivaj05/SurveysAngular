(function () {
    "use strict";

    angular
        .module("app.router", [
            "ui.router"
        ])
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];
    
    function config($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state("all", {
          url: "/all",
          templateUrl: "app/templates/users/users.html",
          controller: "UsersController",
          controllerAs: "vm"
        })
        .state("userEdit", {
          url: "/user/{userId:[0-9]+}/edit",
          templateUrl: "app/templates/users/user-edit.html",
          controller: "UserEditController",
          controllerAs: "vm"
        })
        .state("home", {
            url: "/home",
            templateUrl:"templates/home.html"
        });
    }
})();