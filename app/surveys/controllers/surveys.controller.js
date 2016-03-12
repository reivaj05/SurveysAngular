(function () {
    "use strict";
    angular
        .module("app.surveys.controllers")
        .controller("SurveysController", SurveysController);

    SurveysController.$inject = ["$scope", "ngDialog", "Surveys"];

    function SurveysController($scope, ngDialog, Surveys) {
        let self = this;
        self.surveys = null;
        
        self.init = init;
        self.getAll = getAll;
        self.changeStatusSurvey = changeStatusSurvey;
        self.showModalDeleteSurvey = showModalDeleteSurvey;
        $scope.deleteSurvey = deleteSurvey;
        self.numberOfSections = numberOfSections;
        self.numberOfQuestions = numberOfQuestions;

        self.init();

        function init() {
            self.getAll();
        }

        function getAll() {
            self.surveys = Surveys.query();
        }


        function changeStatusSurvey(survey) {
            survey.active = !survey.active;
        }

        function showModalDeleteSurvey(index, surveyId) {
            ngDialog.open({
                template: "templates/surveys/delete-survey.html",
                scope: $scope, 
                data: {
                    index, surveyId
                },
                className: 'ngdialog-theme-default'
            });
        }


        function deleteSurvey(index, surveyId) {
            Surveys.remove({surveyId});
            self.surveys.splice(index, 1);
        }

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
    }
})();
