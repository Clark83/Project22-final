angular.module("facilitiesApp")
    .controller('authController', Auth)

Auth.$inject = ['$http'];

function Auth($http) { // window.Auth
    console.info('Auth controller loaded!');

    var auth = this;

    auth.payloads = {
        login: {},
        register: {}
    };

    auth.login = {
        // happens when the user clicks submit on the login form
        submit: function($event) { // click-event
            console.info('auth.login.submit', $event);

            $http.post('login', auth.payloads.login)
                .then(auth.login.success, auth.login.error);
                // brandon reminds you, that a wiffle bat will strike you if you forget your error callback!
        },
        success: function(res) { // server response callback
            // when login is successful, redirect them into the homepage
            console.info('auth.login.success', res.data);
            location.href = '/home.html';
        },
        error: function(err) {
            console.error('Login.error', err);

            // user feedback stuffs, sets up the alert box on error
            auth.login.message = ( err.data && err.data.message ) || 'Login failed, contact us!';
        }
    };

    auth.register = {
        submit: function () {
          console.log (auth.payloads.register)  // happens when the user clicks submit on the register form
            $http.post('/register', auth.payloads.register)
                .then(auth.register.success, auth.register.error);
        },
        success: function(res) {
            // when register is successful, just redirect them into the homepage(already logged in)
            console.info('auth.register.success', res.data);
            location.href = "/home.html";
        },
        error: function(err) {
            console.error('auth.register.error', err);
            // user feedback stuffs, sets up the alert box on error
            auth.register.message = ( err.data && err.data.message ) || 'Register failed, contact us!';
        }
    };
}
