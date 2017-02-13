module.exports = ($scope,$location,$window,$rootScope,Restangular,$localStorage)=>{
  $scope.error = null;
  $scope.message = null;
  $scope.auth = false;

  $scope.init = ()=>{
    $scope.checkAuthStatus();
  }

  $scope.checkAuthStatus = ()=>{
    $scope.auth = false;
    if($localStorage.token && $localStorage.token.length>3)
      $scope.auth = true;
  }

  $rootScope.$on("auth",()=>{
    $scope.checkAuthStatus();
  });


  $scope.login = ()=>{
    $scope.error = null;
    $scope.message = null;
    Restangular
      .all("user/token")
      .post($scope.form)
      .then((res)=>{
        $localStorage.token = res.token;
        $rootScope.$broadcast("auth");
        $scope.message = "Authentication successfull";
        $window.location.href="/";
      })
      .catch((err)=>{
        $scope.error = "Error while authenticating";
      });
  }

  $scope.signup = ()=>{
    $scope.error = null;
    $scope.message = null;
    Restangular
      .all("user")
      .post($scope.form)
      .then((res)=>{
        $rootScope.$broadcast("auth");
        $scope.message = "New user created";
      })
      .catch((err)=>{
        $scope.error = err.message;
      });
  }

  $scope.logout = ()=>{
    $localStorage.token = null;
    $rootScope.$broadcast("auth");
  }

  $scope.init();
};
