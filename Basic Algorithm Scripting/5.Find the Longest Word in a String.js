function findLongestWord(str) {
  // 请把你的代码写在这里
  var str1 = str.split(" ");
 /*
 //方法1
  var ch = str1.sort(function(a,b){
    return b.length-a.length;
  });
  return ch[0].length;
  */
  //方法2
  var ch = str1.reduce(function(a,b){
    if(a.length>b.length)
      return a;
    else
      return b;
  });
  return ch.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
