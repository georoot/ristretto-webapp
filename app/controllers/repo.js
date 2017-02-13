module.exports = ($scope,$rootScope,$localStorage,Restangular)=>{
  $scope.token = $localStorage.token;

  $scope.createRepo = ()=>{
    console.log($scope.form);
    console.log($scope.token);
    Restangular
      .all("repo")
      .customPOST($scope.form,undefined,undefined,{Authorization: $scope.token})
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }
};
