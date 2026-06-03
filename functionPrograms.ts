
//function(param:type,param2:type):returntype{
//}


function add(num1:number,num2:number){ // 5
    return num1+num2;
}

//typescript

//store value
let result:number =add(2,10);
console.log(result);

let str2:string ="ram";//type inference

 // array function with return type 
  let sumofNumbersReturn =(x:number,y:number):number=>{
    return (x+y);
 }

 let  result2:number = sumofNumbersReturn(2,3);
 console.log(result2);


 //optional parameters  para?

 function displayStudentDetails(name:string,age?:number):void{
   console.log(name,age)
 }


 displayStudentDetails("Ram");
 displayStudentDetails("Ram",12);
 displayStudentDetails("Ram",35);

 //Default parameters
 function sayHello(name:string="Friend"):void{
  console.log("Hello " + name);
 }

sayHello();
sayHello("Ravi");


//multiple parameters 

function sumOfNumber(...numbers:any[]):number{
    let sum=0;
    for(let num of numbers){
        sum = sum + num;
    }
 return sum;
}

console.log(sumOfNumber(1,2,3,4));
console.log(sumOfNumber(1,2));
console.log(sumOfNumber(1,2,3,4,5,6,7,8,9,10));



let number123 = 123;  // let number123:number =123;  

const contry ="india";
console.log(typeof contry)





