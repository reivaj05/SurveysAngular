(function () {
    "use strict";
    angular
        .module("app.accounts.services")
        .factory("Accounts", Accounts);

    Accounts.$inject = ["$resource"];

    function Accounts(){   
        return $resource(constants.BASE_URL + "surveys/:surveyId", {surveyId: "@surveyId"});
    }
})();