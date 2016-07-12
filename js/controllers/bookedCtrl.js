angular.module('devmtnTravel').controller('bookedCtrl', ['$scope', 'mainSrv', '$stateParams', function ($scope, mainSrv, $stateParams) {
	$scope.booked = mainSrv.travelInfo;
	console.log($scope.booked);

	$scope.getBookedInfo = function () {
		var id = parseInt($stateParams.id)
		for (var i = 0; i < $scope.booked.length; i++) {
			if (id === $scope.booked[i].id) {
				$scope.bookedCity = $scope.booked[i].city;
				$scope.bookedImage = $scope.booked[i].image;
				console.log($scope.bookedCity);
				console.log($scope.bookedImage);
			}
		};
	}
}])