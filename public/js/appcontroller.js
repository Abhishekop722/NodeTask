appModule.controller('appctrl',['$scope','appfactory','$location',($scope,appfactory,$location)=>{
    $scope.keywords = [];
    $scope.input = {};
    $scope.loader = false;
    $scope.submit = ()=>{
        if($scope.input.keyword == undefined||$scope.input.keyword.length == 0){
            console.log('in if');
            alert('Empty search not allowed');
            return;
        }
        $scope.loader = true;
        console.log('out if',$scope.input.keyword);
        let promise = appfactory.submit({keyword:$scope.input.keyword});
        promise.then(data=>{
            $scope.loader = false;
            console.log(data);
            if(data.data.status=='S'){
                alert('Scrapping done');
                $scope.history();
            }
            else alert('Something went wrong');
        },err=>{
            $scope.loader = true;
            console.log(err);
            alert('Server error');
        })
    }
    $scope.history = ()=>{
        let promise = appfactory.history();
        promise.then(data=>{
            console.log(data);
            if(data.data.status=='S'){
                $scope.keywords = data.data.doc;
            }
            else alert('Something went wrong');
        },err=>{
            console.log(err);
            alert('Server error');
        })
    }
    $scope.show = (e)=>{
        $scope.showKey = []
        for(let i=0;i<15;i++){
            $scope.showKey.push('../images/'+e.target.innerText+i+'.jpg');
        }
        console.log($scope.showKey);
        $location.url('show');
    }
    
    $scope.history();
}])
