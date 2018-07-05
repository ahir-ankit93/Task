var app = angular.module("myApp",[]);


app.controller ("myAppCtrl",function($scope,$http){

    
    $http.get("data.json").then(function(item){
        $scope.players=item.data;
    })

    $scope.removePlayer = function(player){

                var removePlayer = $scope.players.indexOf(player);
                $scope.players.splice(removePlayer,1);
    }

    $scope.addPlayers = function(){

        $scope.players.push({
            name:$scope.name,
            id:$scope.id,
            photo:$scope.photo,
            runs:$scope.runs
        
        })

        $scope.name='';
        $scope.id='';
        $scope.photo='';
        $scope.runs='';

    }


        
});
