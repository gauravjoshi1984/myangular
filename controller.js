var app = angular.module('myApp',['ngRoute']);

<!--ROUTE PROVIDER-->
    
app.config(function($routeProvider){

  $routeProvider
  .when('/',{
      templateUrl:'login.html'
   })
  
  .when('/signup',{
      templateUrl:'signup.html'
   })
  
  .when('/dashboard',{
      resolve:{
        "check":function($location,$rootScope){
          if(!$rootScope.loggedIn){
            $location.path('/')
          }
        }
      },
      templateUrl:'dashboard.html'
  })
  
  .otherwise({
    redirectTo:'/'
  
  });
    
});

<!--LOGIN CONTROLLER>

app.controller('loginCtrl',function($scope,$location,$rootScope){
  $scope.submit = function(){

    if($scope.username == 'admin' && $scope.password == 'admin'){
        $rootScope.loggedIn = true;
        $location.path('/dashboard');

    }
    else{
      alert('Wrong username or password');
        }
  };
    
<!--SIGNUP FUNCTION-->  
    
    $scope.signup = function(){
    $location.path('/signup');
    };    
    

});


<!--PERSON CONTROLLER-->
    
app.controller('person',function($scope,$http){
    
    $http.get('/database.json')
        .success(function(response){
            $scope.people = response.records;
        
    });
});

<!--REGISTER CONTROLLERFORM-->
app.controller('registerForm',function($scope){
   $scope.formModel = {};
   $scope.register = function(){
       console.log("hey i m submitted");
       console.log($scope.formModel);
   }
    
});    
