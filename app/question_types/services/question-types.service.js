(function () {
    "use strict";
    angular
        .module("app.question-types.services")
        .factory("QuestionTypes", QuestionTypes);

    QuestionTypes.$inject = ["$resource"];

    function QuestionTypes($resource) {
        return $resource(constants.BASE_URL + "question-types/");
    }
})();