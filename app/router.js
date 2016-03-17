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
        .state("home", {
            url: "/home",
            templateUrl:"templates/home.html",
        })
        .state("surveys", {
          url: "/home/surveys",
          templateUrl: "templates/surveys/surveys.html",
          controller: "SurveysController",
          controllerAs: "vm"
        })
        .state("createSurvey", {
          url: "/home/surveys/create",
          templateUrl: "templates/surveys/create-survey.html",
          controller: "CreateSurveyController",
          controllerAs: "vm"
        })
        .state("signup", {
          url: "/accounts/signup",
          templateUrl: "templates/accounts/signup.html",
          controller: "SignupController",
          controllerAs: "vm"
        })
        .state("signin", {
          url: "/accounts/signin",
          templateUrl: "templates/accounts/signin.html",
          controller: "SigninController",
          controllerAs: "vm"
        });
    }
})();