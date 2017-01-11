angular.module("facilitiesApp")
.config(router);
router.$inject =['$routeProvider']
function router ($routeProvider) {
    $routeProvider
    .when("/people", {
        templateUrl : "/templates/api.html"
    })
    // .when("/red", {
    //     templateUrl : "red.htm"
    // })
    // .when("/green", {
    //     templateUrl : "green.htm"
    // })
    // .when("/blue", {
    //     templateUrl : "blue.htm"
    };
