function largestOfFour(arr) {
  // 请把你的代码写在这里
  //方法1
  var newN ;
  var newArr = [];
  var i = 0;
  while (i < arr.length){
    newN = arr[i].reduce(function(num,newN){
      if(num>newN)
        return num;
      else
        return newN;
    });
  newArr.push(newN);
  i++;
  }
  
  /* 方法2
  var newN,maxN ;
  var newArr = [];

  newArr = arr.map(function(a){
    newN=a.reduce(function(num,newN){
      if(num>newN)
        return num;
      else
        return newN;
    });
    return newN;
  });
  return newArr;
    */
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
