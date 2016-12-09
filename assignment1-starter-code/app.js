var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', ['$scope', function($scope){

  $scope.istoomuch = "";

  	$scope.lunch =	function()
		{
      if($scope.item) {
			     var a = $scope.item;
			     var total = a.split(',');
			     console.log(total.length);
			     return total.length;
	} else {
		       return 0 ;
	}
}
	$scope.estilos= {};
  $scope.styl = {};
  $scope.lunchLength = function(){
		if ($scope.lunch() === 0) {
				$scope.istoomuch = "Please enter data first!";
        $scope.styl  = {'border-color': 'red'}
        $scope.estilos = {'color':'red'};
  	} else if($scope.lunch() <= 3) {
			   $scope.istoomuch = "Enjoy!";
         $scope.estilos = {'color':'green'};
         $scope.styl  = {'border-color': 'green'}
    } else {
			   $scope.istoomuch = "Too much!";
         $scope.estilos = {'color':'green'}
         $scope.styl  = {'border-color': 'green'}
    }
	}

}]);
