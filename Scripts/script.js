const add = function(a,b) {
    return a+b;
  };
  
  const subtract = function(a,b) {
      return a-b;
  };
  
  const sum = function(array) {
      return array.reduce((sum,item)=>sum+item,0)
  };
  
  const multiply = function(array) {
    return array.reduce((product,item)=>product*item,1)
  };
  