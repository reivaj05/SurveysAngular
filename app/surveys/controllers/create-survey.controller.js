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
        self.addSection = addSection;
        self.removeSection = removeSection;

        function createSurvey() {
            Surveys.save(self.survey, success, error);
            
            function success(data) {
                $location.path("/home/surveys");
                toastr.success("Survey created", "YAY!!!");
            }

            function error() {
                toastr.error("There was an error", "Nooooo!");
            }
        }

        function addSection() {
            self.survey.sections.push({});
            console.log(self.survey.sections);
        }

        function removeSection(index) {
            self.survey.sections.splice(index, 1)
        }
    }
})();