var angular = require('angular');
var ngRoute = require('angular-route');
var restangular = require('restangular');
require('ngstorage')

var app = angular.module('application', [ngRoute,restangular,'ngStorage']);

require('./routes')(app);
require('./controllers');
