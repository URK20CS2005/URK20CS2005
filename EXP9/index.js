var app=angular.module("myapp",["ngRoute"]);
app.controller("myctrl",($scope)=>{
    $scope.checkGender=()=>{
        if($scope.gender===undefined){
            $scope.gen_error="Gender is required"
        }
        else{
            $scope.gen_error=""
        }
    }
    $scope.checkState=()=>{
        if($scope.state===undefined){
            $scope.st_error="Select State"
        }
        else{
            $scope.st_error=""
        }
    }
    $scope.checkName=function(){
        if(/\d/.test($scope.name)){
            $scope.nm_error="Name can't have numbers"
        }
        else{
            $scope.nm_error=""
        }}
        $scope.checkPass=function(){
            if(/[a-z]/.test($scope.psd) && /[A-Z]/.test($scope.psd) && /\d/.test($scope.psd) && $scope.psd.length>7){
                $scope.ps_error=""
            }
            else{
                $scope.ps_error="Password Must Contain atleast 1 uppercase, 1 lowercase, a number and 8 characters"
            }}
            $scope.checkAge=function(){
                if($scope.age>=18 && $scope.age<=30){
                    $scope.age_error=""
                }
                else{
                    $scope.age_error="Age must be within 18 to 30"
                }}
                $scope.checkMob=function(){
                    if($scope.ph!=undefined && $scope.ph.length===10){
                        $scope.mob_error=""
                    }
                    else{
                        $scope.mob_error="Mobile No must have 10 digits"
                    }}
})
app.config(function($routeProvider){
    $routeProvider.when('/rohan',{
        templateUrl:'./page1.html'
    })
    .when('/sam',{
        templateUrl:'./page2.html'
    })
    .when('/jascar',{
        templateUrl:'./page3.html'
    })
    .when('/vino',{
        templateUrl:'./page4.html'
    })
    .otherwise({redirectTo:'/rohan'})
})
