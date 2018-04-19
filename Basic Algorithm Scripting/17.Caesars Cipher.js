function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里
  var str1 = str.split("");
  
  var str2 = str1.map(function(val){
    if("A"<=val&&val<="Z"){
      if((val.charCodeAt()-13)>=65)
       return val.charCodeAt()-13;
      else
        return val.charCodeAt()+13;
    }
    else
      return val;
  });
  
  var str3 = str2.map(function(val){
    if(65 <= val && val <= 91)
      return String.fromCharCode(val);
    else
      return val;
  });
  return str3.join("");
}
//rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
rot13("SERR PBQR PNZC");  // 你可以修改这一行来测试你的代码
