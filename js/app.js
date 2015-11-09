// Create app
var myApp = angular.module('myApp', ['ui.router']);
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/landing.html",
        controller: "HomeController"
    }).state("content", {
        url: "/content",
        templateUrl: "templates/content.html",
        controller: "ContentController"
    }).state("about", {
        url: "/about",
        templateUrl: "templates/about.html",
        controller: "AboutController"
    });
});
// Landing page controller: define $scope.number as a number
myApp.controller("HomeController", function($scope) {
    $scope.number = 6;
})
// About page controller: define $scope.about as a string
.controller("ContentController", function($scope) {
    $scope.url = "https://avatars0.githubusercontent.com/u/14365952?v=3&s=460";
})
// Content controller: define $scope.url as an image
.controller("AboutController", function($scope) {
    $scope.about = "Really Big Sky";
})

