//no.1

celsius = 60;
let temp = celsius;
let tofahrenheit = (temp * 9) / 5 + 32;

console.log(`${celsius}C = ${tofahrenheit}F`);
console.log(`\n`);

//no.2

let number = 1;
let checkNumber = 10;

while (number <= checkNumber) {
  if (number % 2 == 1) {
    console.log(`${number} adalah ganjil`);
  } else {
    console.log(`${number} adalah genap`);
  }
  number++;
}
console.log(`\n`);

//no.3
let prime = 7;
if (prime === 1) {
  console.log(`${prime} is not a prime number.`);
} else if (prime === 2) {
  console.log(`${prime} is a prime number`);
} else {
  for (var x = 2; x < prime; x++) {
    if (prime % x === 0) {
      console.log(`${prime} is not a prime number.`);
    }
  }
  console.log(`${prime} is a prime number`);
}

//no.4
let nomor = 5;

let N = 0;

for (let i = 1; i <= nomor; i++) {
  N += i;
}

console.log(`Nilai total adalah: ${N}`);

//no.5
let factorial = 5;
let Nilai = 1;

for (i = 0; i < factorial; i++) {
  Nilai = Nilai * (i + 1);
}
console.log(`Nilai Factorial dari ${factorial} = ${Nilai}`);

//no.6
let number1 = 0;
let number2 = 1;
let result;

if (number >= 1) {
  console.log(0);
}

if (number >= 2) {
  console.log(1);
}

for (i = 2; i < number; i++) {
  result = number1 + number2;
  console.log(result);
  number1 = number2;
  number2 = result;
}
console.log(`${number} angka pertama dari Fibonacci Sequence`);
