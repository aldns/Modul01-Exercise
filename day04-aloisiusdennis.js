// exercise 01.1
let i,j,k = 1
let row = 4
let string = ""

for (i=1; i<=row; i++){
    for(j=1; j<=i; j++, k++){
        string = string+`0`+k+" "
    }
string=string+`\n`
}
console.log(string);

// exercise 01.2 
let siku = 5
let alas = 3

let tinggi = Math.pow(siku, 2) - Math.pow(alas, 2)
let tinggiResult = Math.sqrt(tinggi)

console.log(`Jika Segitiga memiliki Siku = ${siku}cm dan Alas ${alas}cm, maka Tinggi Segitiga adl: ${tinggiResult}cm`);
console.log(`\n`);


// exercise 02.1
let number =  15

for (let i = 1; i <= number; i++){
    if (i % 15 == 0){
        console.log(`${i} = BizzBuzz`);
    } else if (i % 5 == 0){
        console.log(`${i} = Buzz`);
    } else if(i % 3 == 0){
        console.log(`${i} = Bizz`);
    }
}
console.log(`\n`);

// exercise 02.2
let ii = 5;

while ( ii <= 10 ){
    console.log('Pengulangan ke-' + ii);

    ii++;
}
console.log(`\n`);

// exercise 03
let weight = 43
let height = 172

let bmi = (weight / Math.pow(height, 2))*10000

if (bmi <= 18.4){
        console.log(`Your BMI score: ${bmi.toFixed(2)} (Underweight)`);
    } else if (bmi > 18.5 && bmi <= 24.9) {
        console.log(`Your BMI score: ${bmi.toFixed(2)} (Normal)`);
    } else if (bmi > 24.9 && bmi <= 29.9) {
        console.log(`Your BMI score: ${bmi.toFixed(2)} (Overweight)`);
    } else if (bmi > 30 && bmi <= 34.9) {
        console.log(`Your BMI score: ${bmi.toFixed(2)} (Obese)`);
    } else {
        console.log(`Your BMI score: ${bmi.toFixed(2)} (Get Your diet!!)`);
    }

console.log(`\n`);

// exercise 04
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 111, 112, 113];
let answer = a.filter(function (num) {return num % 2 === 0;});

console.table(answer)

// exercise 05
let word = `Hello World`

let split = word.split(" ")

console.log(split);
console.log(split.length);



