function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr.push("I am 1 strange loop.")
    } else {
      arr.push("I am ${i} strange loop.")
    }
  }
  return arr
}

function whileLoop(num) {
  var count = num
  while (count > 0) {
    console.log(count);
    count--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (arr.length > 0 && maybeTrue());
  return arr
}