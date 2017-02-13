module.exports = ($scope,$localStorage,Restangular)=>{
  $scope.token = $localStorage.token;
  $scope.getUser = ()=>{
    Restangular
      .one("user/me")
      .get(undefined,{Authorization: $scope.token})
      .then((data)=>{
        $scope.users = data;
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  $scope.addKey = ()=>{
    var dataAtom = {title:$scope.form.title,value:$scope.form.value};
    $scope.users.keys.push(dataAtom);
    $scope.users
      .put(undefined,{Authorization: $scope.token})
      .then((data)=>{
        $scope.getUser();
      })
      .catch((err)=>{
        alert("Error while adding keys");
      });
  }

  $scope.getUser();
};
