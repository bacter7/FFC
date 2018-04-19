function mutation(arr) {
  // 请把你的代码写在这里
  var arr1 = arr[1].toLowerCase().split("");
  var arr2 = arr1.filter(function(val){
    if(arr[0].toLowerCase().indexOf(val) != -1)
      return val;
  });
  if(arr[1].length == arr2.length)
    return true;
  else
    return false;
}
//mutation(["hello", "neo"]);
mutation(["Mary", "Aarmy"]);
//mutation(["hello", "hey"]);
