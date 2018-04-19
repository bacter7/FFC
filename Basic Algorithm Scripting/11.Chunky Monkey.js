function chunk(arr, size) {
  // 请把你的代码写在这里
  var i = 0;
  var newArr = [];
  while(i<arr.length/size){
    newArr.push(arr.slice(size*(i),size*(i+1)));
    i++;
  }
  
  
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);