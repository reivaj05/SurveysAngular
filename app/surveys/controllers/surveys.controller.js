(function () {
    "use strict";
    angular
        .module("app.surveys.controllers")
        .controller("SurveysController", SurveysController);

    SurveysController.$inject = ["Surveys"];

    function SurveysController(Surveys) {
        let self = this;
        self.surveys = null;
        
        self.getAll = getAll;
        self.init = init;
        self.changeStatusSurvey = changeStatusSurvey;
        self.deleteSurvey = deleteSurvey;
        self.numberOfSections = numberOfSections;
        self.numberOfQuestions = numberOfQuestions;

        function numberOfSections(survey) {
            return survey.sections.length;
        }

        function numberOfQuestions(sections) {
            let countQuestions = 0;
            for(let section of sections){
                countQuestions += section.questions.length;
            }
            return countQuestions;
        }

        self.init();

        function getAll() {
            self.surveys = Surveys.query();
        }

        function init() {
            self.getAll();
        }

        function changeStatusSurvey(survey) {
            survey.active = !survey.active;
        }

        function deleteSurvey(index, surveyId) {
            Surveys.remove({surveyId});
            self.surveys.splice(index, 1);
        }
    }
})();