function titleCase(str) {
  // 请把你的代码写在这里
  var str1 = str.toLowerCase().split(" ");
  var str2  = str1.map(function(val){
   return val[0].toUpperCase().concat(val.slice(1));
  });
  return str2.join(" ");
}

titleCase("I'm a little tea pot");
