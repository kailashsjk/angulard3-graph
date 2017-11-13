module.controller('carRecordController', function($scope, carRecordService) {

	$scope.editingData = {};

	$scope.getCarDetail = function() {
		alert("hiiiii");
		carRecordService.getdata(function(data) {
			alert("hiiiii");
			alert("car data:" + data);
			alert("car data:" + data.vin);
			alert("car data:" + data.model);
			alert("car data:" + data.speed);
			alert("car data:" + data.city);
			$scope.carDetail = data;// populates the view
			/*for (var i = 0, length = $scope.carDetail.length; i < length; i++) {
				$scope.editingData[$scope.carDetail[i].vin] = false;
			}*/
		})
	}

	
})