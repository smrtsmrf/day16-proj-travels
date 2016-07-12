angular.module('devmtnTravel').controller('packagesCtrl', ['$scope', 'mainSrv', function ($scope, mainSrv) {
	$scope.packages = mainSrv.travelInfo;
}])