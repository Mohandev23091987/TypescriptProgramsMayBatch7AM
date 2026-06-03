export{}
//Instance => object 
//you can access through object 
//every object will have their own copy 


//instance variables
//instance methods 
class Employee{
    
    name; //Ravi 
    sal; //200

    constructor(name:string,sal:number){
        this.name=name;
        this.sal=sal;
    }

    displayinformation(){
        console.log(this.name); //
        console.log(this.sal);
    }


}

let obj1 = new Employee("Ravi",200);
let obj2 = new Employee("Ramesh",200);

console.log(obj1.name);
console.log(obj1.sal);

obj1.displayinformation(); //


//Static variables => belongs class
// only one copy will be created 

//static methods => belongs to class

class EmployeeStatic{
     static readonly companyname ='Microsoft';
    empname="ravi";
    static add(a:number,b:number){
        return a+b;
    }
    addinst(a:number,b:number){
        return a+b;
    }
}

let obj23 = new EmployeeStatic();
obj23.companyname="XYZ";
let obj24 = new EmployeeStatic();

console.log(EmployeeStatic.add(2,3));

console.log("before changing the static variable"+EmployeeStatic.companyname);

EmployeeStatic.companyname="google";

console.log("After changing the static variable"+EmployeeStatic.companyname);



// let obj4 = new EmployeeStatic();
// let obj5 = new EmployeeStatic();
// //classname.variablename
// console.log(EmployeeStatic.companyname);


//static variable , static method 
//instance variable , instance method


// accessing static property inside a static method

class Employee5{
    static company ="XYZ";

    static displayCompany(){
        //console.log(Employee5.company);
        console.log(this.company); //this = Employee5
    }
}

Employee5.displayCompany();

//accessing instance variable inside static method

class Employee6{
   employeename="ravi";
 static display(){
    console.log(this.employeename);
 }
}
Employee6.display();

// can we access static property inside instance method

class Employee7{
   static employeename="ravi";

  display(){
    console.log(Employee7.employeename);
 }
}

let obj10 = new Employee7();
obj10.display();


// next typescript completion

//playwright 






