function GCD(arr) {

        let n = arr.length;
        let x = Math.abs(arr[0]);
   
    for (let i = 1; i < n; i++) {
      var y = Math.abs(arr[i]);
   
      while (x && y) {
        (x > y) ? x %= y : y %= x;
      }
      x += y;
    }
    return x;
  }