(function () {
    "use strict";
    angular
        .module("app.surveys.controllers")
        .controller("SurveysController", SurveysController);

    SurveysController.$inject = ["Surveys"];

    function SurveysController(Surveys) {
        var self = this;
        self.surveys = null;
        
        self.getAll = getAll;
        self.init = init;

        self.init();

        function init() {
            self.getAll();
        }

        function getAll() {
            self.surveys = Surveys.query();
            console.log(self.surveys);
        }

    }
})();