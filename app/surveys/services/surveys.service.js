(function () {
    "use strict";
    angular
        .module("app.surveys.services")
        .factory("Surveys", Surveys);

    Surveys.$inject = ["$resource"];

    function Surveys($resource) {
        return $resource(constants.BASE_URL + "surveys/:surveyId", {surveyId: "@surveyId"});
    }
})();