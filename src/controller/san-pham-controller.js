window.SanPhamConTroller = function($scope, $http){
    $scope.sanPham = [];
    $http.get(sanPhamAPI).then(
        function(response){
           if(response.statusText === "OK"){
            $scope.sanPham = response.data;

        }
    },function(error){
        console.log(error);
    }
    )
}