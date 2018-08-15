module.exports = function(array, limit) {
    if(!Array.isArray(array) || typeof limit != 'number'){
        return {'error':'Something went wrong.'};
    }
    var error_check = array.every(function(col){
        return typeof col != 'number';
    })
    if(error_check){
        return {'error':'Array data missmatch.'};
    }
    else if(array.length<limit){
        return {'error':'Second Parameter is greater than array\'s length.'};
    }
    else{
        function diff(param1,param2){
            return param1-param2;
            }
            var sorted_array = array.sort(diff);
            var maxProduct = 1;
            for(var j=0;j<sorted_array.length;j++){
                var product = 1;
                for(var i=sorted_array.length-limit+j;i<sorted_array.length+j;i++){
                    var counter = i;
                    if(i > sorted_array.length-1){
                        counter = i-sorted_array.length;
                    }
                    product = product*sorted_array[counter];                       
                }
            }
            return maxProduct;
            
          }
  };