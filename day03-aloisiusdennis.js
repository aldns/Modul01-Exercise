// nomor1
let number = 10;

for (let i = 1; i <= 10; i++) {
  const result = i * number;

  console.log(`${number} x ${i} = ${result}`);
}

// nomor2
let word = "No lemons no melon";

let reverseWord = word.split(" ").join("").split("").reverse().join("");
if (word.split(" ").join("") == reverseWord) {
  console.log(`${word} adalah PALINDROME`);
} else {
  console.log(`${word} adalah BUKAN PALINDROME`);
}

// nomor3
let centiMeter = 10;
let toKiloMeter = centiMeter / 100000;

console.log(`${centiMeter} CM = ${toKiloMeter} KM`);

// nomor 4
let formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
});

console.log(formatCurrency.format(1000));

// nomor5
let string = "Hello World";
let searchString = "or";

let newString = string.replace(`${searchString}`, "");

console.log(newString);

// nomor6
let a = "hallo dunia";

let str = a.split(" ");

for (let i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}

let result = str.join(" ");
console.log(result);

// // nomor7

// let name = "Lamia Dennis Aloisius"

// let newName = name.split(' ')
// let fixName = newName(3)

// console.log(fixName);
// skip kak, mohon maaf, akan coba update lagi
