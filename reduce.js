const position = [

 {name: 'shafin' , age : 10} ,
 {name : 'rashu'  , age :20 },
 {name : 'Numan khan'  , age : 30},
 {name : 'ashesh khan'  , age : 40},
 {name : ' Ratul khan'  , age : 50},
 
];
///reduce a callback function dite hobe and initial values o dite hobe 


const result = position.reduce( (sum,e)=>

{
 console.log(e.name , e.age , sum);
  return sum + e.age;

} ,0)

console.log(result);