angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileController'
		})

		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/ourwork', {
			templateUrl: 'views/ourwork.html',
			controller: 'ourworkcontroller'
		})
		.when('/documents', {
			templateUrl: 'views/documents.html',
			controller: 'documentsController'
		})
		.when('/howyoucanhelp', {
			templateUrl: 'views/howyoucanhelp.html',
			controller: 'howyoucanhelpController'
		})
		.when('/donorlist', {
			templateUrl: 'views/donorlist.html',
			controller: 'donorlistController'
		})
		.when('/faq', {
			templateUrl: 'views/faq.html',
			controller: 'faqController'
		})
		.when('/donatenow', {
			templateUrl: 'views/donatenow.html',
			controller: 'donatenowController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		})




	$locationProvider.html5Mode(true);

}]);