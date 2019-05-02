appModule.factory('appfactory',['$http','$location',($http,$location)=>{
    return {
        baseUrl:'http://'+$location.host()+':'+$location.port() ,
        submit(obj){
            //console.log(this.baseUrl);
            return $http.post(this.baseUrl + '/submit',obj);
        },
        history(){
            return $http.get(this.baseUrl + '/history');
        }
    }
}])
