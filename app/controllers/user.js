module.exports = ($scope,$localStorage,Restangular)=>{
  $scope.token = $localStorage.token;
  $scope.getUser = ()=>{
    Restangular
      .one("user/me")
      .get(undefined,{Authorization: $scope.token})
      .then((data)=>{
        $scope.user = data;
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  $scope.getUser();
};
