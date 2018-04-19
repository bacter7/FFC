function reverseString(str) {
  // 请把你的代码写在这里
  var array = [];
  var newArray = [];
  var newCh ;
  var newWord;
  //切开句子
  array = str.split(" ");
  
  //数组序列反转
  array = array.reverse();
  var i = 0;
  //单词反转
  while(i < array.length){
      //分割单词
      newCh =array[i].split("");
      //反转单词
      newCh = newCh.reverse();
      //拼接单词
      newWord =newCh.join("");
      newArray.push(newWord);

    i++;
  }

  str = newArray.join(" ");


  
  return str;
}

reverseString("hello");



