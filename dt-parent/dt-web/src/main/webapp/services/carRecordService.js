module.service('carRecordService', function($http){
	
	
	
    this.getdata = function(callbackCarRecord){
    	alert("inside service");
        {
        	alert("inside service1");			
        	            var responsePromise = $http.get("http://localhost:18080/dt-web/webresources/CarService/getAll");
						responsePromise.success(function(data, status, headers, config) {
					   
						callbackCarRecord(data);
				        });
					    responsePromise.error(function(data, status, headers, config) {
				        alert("AJAX failed! because no webservice is attached yet");      					 
					    });
	   };
    }
    
    
    this.getdata1 = function(callbackCarRecord1){
    	alert("inside service");
        {
        	alert("inside service1");			
        	            var responsePromise = $http.get("http://localhost:18080/dt-web/webresources/CarService/getAggDriverQuery");
						responsePromise.success(function(data, status, headers, config) {
					    alert("data");
						alert(data);
						callbackCarRecord1(data);
				        });
					    responsePromise.error(function(data, status, headers, config) {
				        alert("AJAX failed! because no webservice is attached yet");      					 
					    });
	   };
    }
    
    
    this.getModelCount = function(callbackCarRecord2){
    	alert("inside service");
        {
        	alert("inside modelcount service2");			
        	            var responsePromise = $http.get("http://localhost:18080/dt-web/webresources/CarService/getAggDriverModelCountQuery");
						responsePromise.success(function(data, status, headers, config) {
					    alert("data");
						alert(data);
						callbackCarRecord2(data);
				        });
					    responsePromise.error(function(data, status, headers, config) {
				        alert("AJAX failed! because no webservice is attached yet");      					 
					    });
	   };
    }
})