function confirmEnding(str, target) {
  // 请把你的代码写在这里
  
  //方法1
  //var reg = eval("/"+target+"$/ig");
  
  //方法2
  var re =new RegExp(target+"$");
  if (str.match(re))
    return true;
   else
      return false;
}


confirmEnding("Bastian", "n");
