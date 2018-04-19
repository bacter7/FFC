function palindrome(str) {
  // 请把你的代码写在这里
  /*将顺序与逆序对比，若相等则为true*/
  var reg = /[a-zA-Z0-9]{1}/g;
  
  var str1 = str.toLowerCase().match(reg);
  str1 = str1.join("");
  var str2 = str1.split("");
  var str3 = str2.reverse();
  str3 = str3.join("");
  if(str1 === str3)
    return true;
  else
    return false;
}
palindrome("My age is 0, 0 si ega ym.");

//palindrome("0_0 (: /-\ :) 0-0");
