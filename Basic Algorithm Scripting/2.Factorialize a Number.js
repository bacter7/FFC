function factorialize(num) {
   请把你的代码写在这里
  var n = num;
  if (n > 0){
    while(n--1)
    {
      num =n;
    }  
  return num;
  }
  else
    return 1;
}

factorialize(5);
