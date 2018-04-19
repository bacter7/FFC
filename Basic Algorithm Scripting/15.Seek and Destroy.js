function destroyer(arr) {
  // 请把你的代码写在这里

  //以下两行为测试arguments函数的代码与本题无关
  var oo = arguments.length;
  var args4=arguments[0];
  //以下内容为有效代码
  var args2 = [];
  var args1 = Array.prototype.slice.call(arguments[0]);
  var args8= Array.prototype.slice.call(arguments,1);
  
  args1.filter(function(val){
    var i = 0;
    while (i<args8.length){
      if(val == args8[i]){
        break;
      }
      else
        i++;
    }
    if(i == args8.length)
      args2.push(val);
  });
  return args2;

}
destroyer(["tree", "hamburger", 53], "tree", 53);
//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
