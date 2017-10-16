
var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	
	.when('/html',{
		templateUrl:"htmltemplate.html",
		
	})
	 .when("/css", {
        templateUrl : "csstemplate.html",
        
    })
    .when("/js", {
        templateUrl : "jstemplate.html",
        
    })
    
});

