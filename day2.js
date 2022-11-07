//no1

celsius = 60
let temp = celsius;
let tofahrenheit = temp * 9 / 5 + 32;

  console.log(`${celsius}C = ${tofahrenheit}F`);
  console.log(`\n`);

  //no2

  let number = 1
  let checkNumber = 10

  while (number <= checkNumber){
    if(number % 2 == 1){
        console.log(`${number} adalah ganjil`);
    } else {
        console.log(`${number} adalah genap`);
    }
    number++
  }
  console.log(`\n`);
  //no3

  let numbInput = 10
  let checkPrime = 1

  while (numbInput <= 1){

    if(numbInput % 1 == 1){
        console.log(`${numbInput} adalah bilangan prima`);

    } else if (numbInput / numbInput == 0){
        console.log(`${numbInput} adalah bilangan prima`);
    } else {
        console.log(`${numbInput} adalah BUKAN bilangan prima`);
    }
    numbInput++
  }

  //
  let prime = 7
  if (prime === 1){
      console.log(`${prime} is not a prime number.`)
    }else if(prime === 2){
      console.log(`${prime} is a prime number`)
  }else{
      for(var x = 2; x < prime; x++){
        if(prime % x === 0){
          console.log(`${prime} is not a prime number.`)
        }
      }console.log(`${prime} is a prime number`)
    }