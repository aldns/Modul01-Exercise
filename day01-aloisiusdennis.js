// 1) Luas Persegi
let panjang = 5;
let lebar = 5;

let luas = panjang * lebar;
console.log(luas);

// 2) Keliling Persegi
let keliling = 4 * luas;

console.log(keliling);

// 3) Circle
// >>>>> Diameter
let jariJari = 5;
let diameter = jariJari * jariJari * 2;

console.log(diameter);
// >>>>> circumference
let phi = 3.14;
let circumference = phi * diameter;

console.log(circumference);

// >>>>> area
console.log(phi * (jariJari * jariJari));

// 4) Triangel
let angel_a, angel_b, angel_c, totalAngel;
angel_b = 70;
angel_c = 50;
totalAngel = 180;

angel_a = totalAngel - (angel_b + angel_c);

console.log(angel_a);

//perbedaan hari
let dayDifference = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  let difference = d1.getTime() - d2.getTime();

  let days = Math.ceil(difference / (1000 * 60 * 60 * 24));

  return days;
};

//jumlah hari
let daysTotal = 200;

let years = Math.floor(daysTotal / 365);
let daysLeft = daysTotal % 365;

let months = Math.floor(daysLeft / 30);
daysLeft = daysLeft % 30;

let weeks = Math.floor(daysLeft / 7);
daysLeft = daysLeft % 7;

console.log(
  `${daysTotal} hari = ${years} tahun, ${months} bulan, ${weeks} minggu, ${daysLeft} hari.`
);
