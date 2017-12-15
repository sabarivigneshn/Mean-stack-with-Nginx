app.controller('editController',function($scope,$http,$state,ngDialog,Issues){
  $scope.pre_data = $scope.ngDialogData;
  $scope.pre_data = $scope.pre_data[0];
  $scope.updateIssue = function(id){
    console.log($scope.pre_data);
    ngDialog.close();
    // update service
    Issues.update($scope.pre_data).success(function(response){
      console.log(response.data);
             $scope.updated_datas = response.data;
             $state.go('issues');
             window.location.reload();
    });
  };

});
