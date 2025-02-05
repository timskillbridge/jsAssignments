function factorial(num) {
  let runningTotal = 1
  let countdown = num
  while (countdown >1) {
    runningTotal *= countdown
    countdown--
  }

  // for (let x=num;x>1;x--) {
  //   runningTotal *=x
  // }
  
  return runningTotal
}

module.exports = factorial;
console.log(factorial(5))