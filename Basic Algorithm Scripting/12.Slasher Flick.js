function slasher(arr, howMany) {
  // 请把你的代码写在这里
  
  //方法1 不修改原数组，返回新数组
  //slice()
  //return arr.slice(howMany);
  
  //方法2 修改原数组 
  
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);
