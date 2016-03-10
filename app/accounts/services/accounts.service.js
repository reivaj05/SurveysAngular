(function () {
    "use strict";
    angular
        .module("app.accounts.services")
        .factory("Accounts", Accounts);

    // Users.$inject = ['$http'];
    function Accounts(){   
        var Accounts = {

        };

        return Accounts;
    // function Accounts($http) {
    //     var Users = {
    //         getUsers: getUsers,
    //         getUser: getUser,
    //         createUser: createUser,
    //         updateUser: updateUser,
    //         deleteUser: deleteUser
    //     }; 

    //     return Users;

    //     function getUsers() {
    //         return $http.get("http://localhost:8080/all/");
    //     }

    //     function getUser(id) {
    //         return $http.get("http://localhost:8080/user/"+id+"/edit/");
    //     }

    //     function createUser(user) {
    //         return $http.post("http://localhost:8080/users/create/", user);
    //     }

    //     function updateUser(user) {
    //         return $http.put("http://localhost:8080/users/update/", user);
    //     }

    //     function deleteUser(user) {
    //         return $http.post("http://localhost:8080/users/delete/", user);
    //     }
    }
})();