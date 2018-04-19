function where(arr, num) {
  // 请把你的代码写在这里
  arr = arr.sort(function(a,b){
    return a-b;
  });
  var i=0;
  var arrNew =arr.filter(function(val){
    if(val<num)
      i++;
  });
  return i;
}
where([5, 3, 20, 3], 5);
//where([40, 60], 50);
