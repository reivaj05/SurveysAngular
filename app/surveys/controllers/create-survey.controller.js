(function () {
    "use strict";
    angular
        .module("app.surveys.controllers")
        .controller("CreateSurveyController", CreateSurveyController);


    CreateSurveyController.$inject = ["Surveys"];

    function CreateSurveyController(Surveys) {
        let self = this;
        self.survey = {};
        self.createSurvey = createSurvey;

        function createSurvey() {
            
        }
    }
})();