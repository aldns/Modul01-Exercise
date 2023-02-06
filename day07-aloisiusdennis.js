
// No.1 
const checkData = (data1, data2) => {
    var data1Len = data1.length 
    var data2Len = data2.length

    if (data1Len ==  data2Len) {
        console.log(`Data pertama ${data1Len} dan data kedua ${data2Len}; SAMA`)
    } else {
        console.log(`Data pertama ${data1Len} dan data kedua ${data2Len}; BERBEDA`)
    }
};

var object1 = [`a: 100`,`b: 200`, `c: 300`]
var object2 = [`a: 100`,`b: 200`, `c: 300`, `d:400`]

checkData(object1, object2);


// No.2
const intersection = (a, b) => {
   var result = []

    while( a.length > 0 && b.length > 0 )
    {  
       if      (a[0] < b[0] ){ a.shift(); }
       else if (a[0] > b[0] ){ b.shift(); }
       else /* they're equal */
       {
         result.push(a.shift());
         b.shift();
       }
    }
  
    return result;
  
};

var input1 = [`a: 100`,`b: 200`]
var input2 = [`a: 100`,`d: 400`]

var fixintersection = intersection(input1, input2);

  console.log(fixintersection);

// No.3
const dataStudent = (a, b) => {
    var result1 = []
    while ( a.length > 0 && b.length > 0 ){
        if (a[0] == b[0]){
            
        }
    }

    var result2 = []
     while( a.length > 0 && b.length > 0 )
     {  
        if      (a[0] < b[0] ){ a.shift(); }
        else if (a[0] > b[0] ){ b.shift(); }
        else /* they're equal */
        {
          result.push(a.shift());
          b.shift();
        }
     }
   
     return result2;
   
 };
 
 var dataStudent1 = [`name: adi`, `email: adi@mail.com`]
                    [`name: budi`, `email: budi@mail.com`]
 var dataStudent2 = [`name: adi`, `email: adi@mail.com`]
                    [`name: agung`, `email: agung@mail.com`]
 
 var fixintersection = intersection(input1, input2);
 
   console.log(fixintersection);
 