function charPosition() {
  var obj = {};
  for (var i = 0; i < inputArray.length; i++) {
    if (!(inputArray[i] in obj)) {
      obj[inputArray[i]] = i;
    } else {
      obj[inputArray[i]] += ', ' + i;
    }
  }
  console.log(obj);
}

var inputArray = process.argv[2].split('');
charPosition();