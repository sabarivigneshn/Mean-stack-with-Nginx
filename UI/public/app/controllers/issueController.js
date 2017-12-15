app.controller('issueController',function($scope,$http,$state,ngDialog,Issues){
  $scope.showModal = false;

   //service call to get all issues
   Issues.get().success(function(data) {
      $scope.all_issues = data;
   });

   $scope.form_data = {};
   $scope.createIssue = function() {
     $scope.show_datas = {};
     // create issue
     Issues.create($scope.form_data).success(function(response) {
       console.log(response);
       $scope.show_datas = response.data;
       $state.go('issues');
     });
   }

   $scope.editIssue = function(id) {
     // Edit Issue
     Issues.edit(id).success(function (response) {
       console.log(response);
       $scope.showModal = !$scope.showModal;
        var dialogOptions = ngDialog.open({
          templateUrl: 'app/views/issues/edit.html',
          data: response,
          controller: 'editController'
        });
     });
   }
   $scope.deleteIssue = function(id) {
     // Delete Issue
     Issues.delete(id).success(function(response){
       console.log(response);
       $scope.all_issues = response;
     });
   }
});
