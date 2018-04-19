function truncate(str, num) {
  // 请把你的代码写在这里
  /*
    str.length <= num 原样输出
    num>3
    str.length > num  输入 str.num-3+...
    num<3 str.num +...
  */
  if (num>=str.length)
    return str;
  else if(num<3)
    return str.slice(0,num)+"...";
  else 
    return str.slice(0,num-3)+"...";
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
