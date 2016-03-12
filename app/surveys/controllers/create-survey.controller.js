(function () {
    "use strict";
    angular
        .module("app.surveys.controllers")
        .controller("CreateSurveyController", CreateSurveyController);


    CreateSurveyController.$inject = ["$location", "Surveys"];

    function CreateSurveyController($location, Surveys) {
        let self = this;
        self.survey = {sections : []};
        self.createSurvey = createSurvey;

        function createSurvey() {
            Surveys.save(self.survey);
            $location.path("/home/surveys");
            
        }
    }
})();