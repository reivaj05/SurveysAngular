(function () {
    "use strict";

    angular.module("app", [
        "app.surveys",
        "app.accounts",
        "app.router",
        "ngResource",
        "ngDialog"
    ])
    .config(config);

    config.$inject = ["$resourceProvider"];

    function config($resourceProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }
})();