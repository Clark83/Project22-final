angular.module("facilitiesApp", ["ngRoute"])
.config(router);


router.$inject =['$routeProvider']
function router ($routeProvider) {
    $routeProvider
    .when("/people", {
        templateUrl : "/templates/api.html"
    })
     .when("/contacts", {
       templateUrl : "/templates/contacts.js"
     })
     .when("/plan", {
        templateUrl : "/templates/plan.html"
     })
    // .when("/blue", {
    //     templateUrl : "blue.htm"
    };
