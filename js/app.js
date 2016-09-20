var app = angular.module('app', []);
app.controller('appCtrl', function ($scope, $http) {
	$http.get('js/data.json').success(function (data) {
		$scope.data = data;
		
	}).error(function () {
		throw new Error('Could not find the json file');
	});
});

app.directive('aboutTimeline', function () {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			title : '@',
			img : '@',
			heading : '@',
			body : '@'
		},
		templateUrl : '../templates/about-timeline.html'
	};
})
.directive('service', function () {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			imgclass : '@',
			heading : '@',
			text : '@'
		},
		templateUrl : '../templates/service.html'
	};
})
.directive('portfolio', function () {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			link : '@',
			img : '@',
			title : '@',
			description : '@'
		},
		templateUrl : '../templates/portfolio.html'
	};
})
.directive('modal', function () {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			id : '@',
			title : '@',
			img : '@',
			description : '@',
			url : '@'
		},
		templateUrl : '../templates/portfolio-details.html'
	};
}); ;
