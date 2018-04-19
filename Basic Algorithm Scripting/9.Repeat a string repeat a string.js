function repeat(str, num) {
  // 请把你的代码写在这里
  if(num > 0){
    var restr = [];
    var i = 0;
    while(i<num)
      {
        restr +=str;
        i++;
      }

    return restr;
  }
  else
    return "";
}

repeat("*", 3);
