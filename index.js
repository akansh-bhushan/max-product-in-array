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
        var val1=1,val2=1;
        if(limit%2 == 0){
            var sorted_array = array.sort();
            for(var i = 0; i<limit;i++){
                  val1 = val1 * sorted_array[i];  
            }
            for(var i = sorted_array.length-1; i>sorted_array.length-1-limit;i--){
                val2 = val2 * sorted_array[i];  
            }
            return Math.max(val1,val2);
        }
        else{
            var sorted_array = array.sort();
            for(var i = 0; i<limit-1;i++){
                  val1 = val1 * sorted_array[i];  
            }
            val1 = val1 * sorted_array[sorted_array.length -1];
            for(var i = sorted_array.length-1; i>sorted_array.length-1-limit;i--){
                val2 = val2 * sorted_array[i];  
            }
            return Math.max(val1,val2);
        }
    }
  };