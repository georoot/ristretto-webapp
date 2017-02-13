module.exports = ($scope,$rootScope,$routeParams,$localStorage,Restangular)=>{
  $scope.token = $localStorage.token;
  $scope.params = $routeParams;

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


  $scope.init = ()=>{
    Restangular
      .all("/config")
      .getList()
      .then((config)=>{
        config = config[0];
        $scope.cloneUrl = "git clone ssh://git@"+config.host+"/"+$routeParams.user+"/"+$routeParams.repo+".git";
        console.log($scope.cloneUrl);
      })
      .catch((err)=>{
        $scope.error = "Unable to fetch server config";
      });
  }

  $scope.getRepo = ()=>{
    Restangular
      .one("/repo/"+$routeParams.user+"/"+$routeParams.repo)
      .get(undefined,{Authorization: $scope.token})
      .then((data)=>{
        $scope.repo = data;
        $scope.init();
      })
      .catch((err)=>{
        // Invoke not found page
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
