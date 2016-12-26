'use strict';

app.controller('AuthController', function($scope, $location, Auth, toaster) {

	if(Auth.signedIn()) {
		$location.path('/');
	}

	$scope.register = function(user) {
		Auth.register(user)
			.then(function() {
				// console.log("Register successfully");
				toaster.pop('success', "Registered successfully.");
				$location.path('/');
			}, function(err) {
				// console.log("Error...");
				toaster.pop('error', "Oops, something went wrong.");
		});
	},

	$scope.login = function(user) {
		Auth.login(user)
			.then(function() {
				// console.log("Logged in successfully");
				toaster.pop('success', "Logged in successfully.");
				$location.path('/');
			}, function(err) {
				// console.log("Error...");
				toaster.pop('error', "Oops, something went wrong.");
		});
	},

	$scope.changePassword = function(user) {
		Auth.changePassword(user).then(function() {
			// reset form
			$scope.user.email = '';
			$scope.user.oldPass = '';
			$scope.user.newPass = '';
			toaster.pop('success', "Password changed successfully.");
		}, function(err) {
			// console.log("Error...");
			toaster.pop('error', "Oops, something went wrong.");
		});
	}
});