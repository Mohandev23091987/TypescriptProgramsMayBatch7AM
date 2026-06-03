export{}
//polymorphism 
//function overloading => same method with diffrent inputs => number of paramerts,diffrent datatypes

//number of parameters
//diffrent datatypes


//two step process 

//step1 => overloaded signatures of your function=> many 
//step2 => provie one implementation

//step1
function add(a:number,b:number):number
function add(a:string,b:string):string

//step2
function add(a:any,b:any):any{
    return a+b;
}

console.log(add(2,3))
console.log(add("Hello ","Ravi"))


// Ravi => hello Ravi
// Ravi,25 => Ravi age: 25

function dispalyEmployeeInfo(name:string):string
function dispalyEmployeeInfo(name:string,age:number):string
// function dispalyEmployeeInfo(age:number):string

function dispalyEmployeeInfo(name:string,age?:number){
    if(age){
        return `Name:${name},Age:${age}`
    }else 
    {
        return `Hello ${name}`
    }
}

console.log(dispalyEmployeeInfo("Ravi"))
console.log(dispalyEmployeeInfo("Ravi",25))



function optionalParameter(name:string,age?:number){
  console.log(name,age)
}

optionalParameter("ravi");







