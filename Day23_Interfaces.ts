

// its a contract that defines that properties and methods a class must have 



interface Employees{
 //variables 
 name:string;
 id:number;

 //abstract methods
 work():void;

}


class employee1 implements Employees {

 name:string;
 id:number;

 constructor(name:string,id:number){
 this.name = name;
 this.id = id;
 }

 work():void{
    console.log("employee details"+this.name)
 }

}

let obj = new employee1("ravi",123);


//interface of oject notations 

// interface Student {
//     id:number,
//     name:string,
//     course:string
// }

type Student ={
    id:number,
    name:string,
    course:string
};

let student1 : Student = {
    id:123,
    name:"Ravi",
    course:"playwright"
};

//optional parameters    ?

interface EmployeeData {
    id:number,
    name:string,
    course?:string
}

let employee2:EmployeeData ={
 id:123,
 name:"Ramesh"
};

console.log(employee2.name);
console.log(employee2);


// read only property 

interface Product {

    readonly productId:string,
    productName:string,
    price:number,
}

let product:Product = {
    productId:"123",
    productName:"Laptop",
    price:70000
}

product.productId = "124";
product.productName ="washing machine";


//interface with functions

interface calculator{
    add(a:number,b:number):number;
}

let calc:calculator = {

    add(a:number, b:number){
        return a+b;
    }

};

console.log(calc.add(5,7));



