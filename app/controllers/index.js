const angular = require('angular');
var app = angular.module('application');

app.controller("authCtrl",require('./auth'));
app.controller("repoCtrl",require('./repo'));
