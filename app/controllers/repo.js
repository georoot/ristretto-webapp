module.exports = ($scope,$rootScope,$localStorage,Restangular)=>{
  $scope.token = $localStorage.token;

  $scope.createRepo = ()=>{
    Restangular
      .all("repo")
      .customPOST($scope.form,undefined,undefined,{Authorization: $scope.token})
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
        $scope.error = "Error while initializing repo";
      });
  }

  $scope.list = ()=>{
    Restangular
      .all("repo")
      .getList(undefined,{Authorization: $scope.token})
      .then((data)=>{
        $scope.repoList = data;
      })
      .catch((err)=>{
        $scope.error = "Error while fetching repo";
      });
  }
};
