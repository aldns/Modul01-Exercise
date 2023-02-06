//
function excelIndex(code) {
  code = code.toUpperCase();
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    result = 0;
  for (i = 0; i < code.length; i++) {
    result +=
      Math.pow(alphabet.length, i) *
      (alphabet.indexOf(code.substr((i + 1) * -1, 1)) + 1);
  }
  return result;
}
console.log(excelIndex(`ba`));

//
let filter = (arr) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    //bandingin per array-nya
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      //jika ada yang sama masukan ke result
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(filter([1, 5, 2, 4, 1]));

//
let angramChecking = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  let sortStr1 = str1.toLowerCase().split("").sort();
  let sortStr2 = str2.toLowerCase().split("").sort();

  for (i = 0; i < str1.length; i++) {
    if (sortStr1[i] != sortStr2[i]) {
      return false;
    }
  }
  return true;
};

let s = `how`;
let t = `who`;

console.log(angramChecking(s, t));
