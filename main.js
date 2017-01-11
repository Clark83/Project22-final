angular.module('facilitiesApp', ['ngRoute'])
    .controller('facilitiesController' , facCtrl);

facCtrl.$inject = ['$http']

function facCtrl($http){

    var fCtrl = this;

    fCtrl.getFacilities= function() {
        console.log('Making http request')
         $http.get('')
           .then(function(res, err) {
               console.log(res.data)


            })
    }







}
