(function () {
    "use strict";
    angular
        .module("app.surveys.controllers")
        .controller("CreateSurveyController", CreateSurveyController);


    CreateSurveyController.$inject = ["$location", "Surveys", "QuestionTypes"];

    function CreateSurveyController($location, Surveys, QuestionTypes) {
        let self = this;
        self.survey = {sections : []};
        self.questionTypes = {};
        self.init = init;
        self.createSurvey = createSurvey;
        self.addSection = addSection;
        self.removeSection = removeSection;
        self.getQuestionTypes = getQuestionTypes;

        self.init();

        function init() {
            self.getQuestionTypes();
        }

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

        function getQuestionTypes() {
            self.questionTypes = QuestionTypes.query();
            console.log(self.questionTypes);
        }
    }
})();