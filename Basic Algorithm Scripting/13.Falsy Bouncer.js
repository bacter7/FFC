function bouncer(arr) {
  // 请把你的代码写在这里
  return arr.filter(function(a){
   // if (a !== false &&a !== null &&a !== 0 && a !=="" && a !== undefined&& a !== "NaN")
    
    return a;
  });
}

bouncer([false,"false", null, 0, NaN, undefined, "",1, null, NaN, 2, undefined]);
//bouncer([7, "ate", "", false, 9]);
