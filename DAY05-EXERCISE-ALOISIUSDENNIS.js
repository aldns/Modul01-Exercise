//exercise no.1

function newSorting(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(newSorting([9,3,6,2,1,4]));


//exercise no.2
let words = ["CPU", "mouse", "layar", "keyboard"];

let join = (arrs) => {
    let finalResult = (``);
    let temp = arrs[0];

    for (let i=1; i < arrs.length; i++) {

    if (i < arrs.length - 1){
        let text1 = arrs[i]
        temp = temp.concat(`, `,text1)
    } else {
        let text2 = arrs[i]
        temp = temp.concat(` dan `,text2)
    }
    }
    return finalResult = (`${temp}`)
}

console.log(join(words));

//exercise no.3
//Write a function to split a string and convert it into an array of words
//Example : “Hello World” → [“Hello”, “World”]
// title : split string
// input = buat variable untuk isi & splitter
let kalimat = "Hello world"
let splitter;
// proses =
// buat arr tempt & arr final ()
//  baca string 1 by 1, true > input ke arr > ketemu spliiter push arr tempt ke arr final
// kalau uda ktmu loop dgn akhir dari words nya, push ke final
let arr = []; arrFinal = [];

let toArray = (words, splitter) => {

    for (i = 0; i < words.length; i++){
        if(words[i] !== splitter){
            arr += words[i]
        }  else {
            arrFinal.push(arr)
            arr = ""
        }
    }
        if (i == words.length) {
            arrFinal.push(arr)
    }
    return arrFinal;
}

// output = string to array
console.log(toArray(kalimat, ' '));

//exercise no.4
let arr1 = [1, 2, 3]; arr2 = [3, 2, 1]

let result = []; finalResult = [];

function calculate (data1, data2) {

    for (i=0; i < data1.length; i++){
        result = data1[i] + data2[i]
        finalResult.push(result)
    }

    return finalResult;
}

console.log(calculate(arr1, arr2));

//exercise no.5
let allData = ["HRV", "Almaz", "Ioniq5"]

let hasil;

function checking (data, checkorInput) {

    if (data.includes(checkorInput)){
        hasil = true;
    } else {
        hasil = false;
    }

    if (hasil == true){
        print = `data sudah ada`
        console.log(print);

    } else {
        data.push(checkorInput);
    }
    return data;
}

console.log(checking(allData,"HRV"));


//exercise no.6
let nomor = [11, 22, 34, 41, 52, 63, 71,86]

let tracing = (numb, result) => {
    let resultGanjil = []
    let resultGenap = []

numb.forEach((numbers) => {
    if(numbers % 2 == 1){
        resultGanjil.push(numbers)
    } else {
        resultGenap.push(numbers)
    }
})
   if(result == `ganjil`){
    return[resultGanjil];
    } else if (result == `genap`){
        return[resultGenap];
    }
}

console.log(tracing(nomor, `genap`));