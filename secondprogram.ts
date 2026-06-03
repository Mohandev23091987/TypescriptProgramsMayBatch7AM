export{}
let s2:string;

// type => what kind of data a variable contains
//type annotation => mentioning the type explictly by using colon

//syntax
// let/const variablename:type

let name:string;
let age:number;
let isFound:boolean;
let nothing:null;
let notDefined:undefined;
let bignumber:bigint;
let result:null;

name = "ram";
age = 23;

//any
//unknown

let value:any; // breaking type safety 
value ="hello";
value =123;
console.log(value.toUpperCase())

//unknown -> it will provide typesafety

let value2:unknown; 
value2 ="hello";
value2 =123;
console.log(value2.toUpperCase())




