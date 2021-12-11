const array =[1,2,3,4,5,6,7,8,9,10];


//   function isOdd(x){
//       return x % 2 
//   }
//   function isEven(x){
//       return x % 2 ==0;
//   }

const output = array.reduce((acc,curr)=>acc=acc+curr,0)

console.log(output)




//  const odd = array.filter((x)=> x > 12)
//  const even = array.max((x)=> x > 2 )


//  console.log(odd)
//  console.log(sumarray(array))