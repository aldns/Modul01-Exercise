//asynchronous
console.log(`ASYNC Program 1`);
setTimeout(() => console.log(`Program 2`, 3000));
console.log(`ASYNC Program 3`);

//callback
function add(a, b) {
    return a+b;
}

function print (data){
    console.log(data);
}

//let result = add(10, 25);
// print(result);

add(35, 12, (res) => console.log(`Hasil penjumlahan ${res}`));

