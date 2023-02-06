// DATA = [
//     {
//         NAME : `AVANZA`,
//         BRAND : ` TOYOTA`,
//         MACHINE : `DOHC`,
//         CC : 1500,
//     },
//     {
//         NAME : `SUPRA`,
//         BRAND : ` TOYOTA`,
//         MACHINE : `V8`,
//         CC : 5000,
//     },
//     {
//         NAME : `ERTIGA`,
//         BRAND : ` SUZUKI`,
//         MACHINE : `DOHC`,
//         CC : 1550,
//     }
// ]

// let objFunc = (data) => {
//     let tempt = ``;
//     if ( data == `avanza`){
//         tempt =+ `${i+1}. `
//     }
// }

// let print = (data) => {

//     for (data == `SUPRA`){
//         return objFunc(data)
//     }

// }

// console.log(print(data, objFunc));

// inpput
let numb = [1, 2, 3, 4, 5]; //tampung array
let words = [`why`, `you`, `let`, `me`, `let`, `you`, `go`]; //tampung array

function mapFunc(arr, cbFn) {
  let result = [];

  if (cbFn) {
    for (i = 0; i < arr.length; i++) {
      result.push(cbFn(arr[i], 2));
    }
    return result;
  } else {
    temp = ``;
    for (i = 0; i < arr.length; i++) {
      temp += `${i + 1}. ${arr[i]} `;
      result.push(temp);
    }
    return temp;
  }
}

console.log(mapFunc(numb, Math.pow));
console.log(mapFunc(words));

function mapFunc(arr, cbFn) {}
