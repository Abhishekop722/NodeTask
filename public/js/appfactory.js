appModule.factory('appfactory',['$http','SUBMIT_URL','HISTORY_URL',($http,SUBMIT_URL,HISTORY_URL)=>{
    return {
        submit(obj){
            return $http.post(SUBMIT_URL,obj);
        },
        history(){
            return $http.get(HISTORY_URL);
        }
    }
}])