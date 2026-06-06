

//Access modifiers =>  control the visibility and accessiblity of class properties,methods and construcotor


class BankAccount{
private balance =10000;
}

let obj = new BankAccount();
obj.balance = -50000;  // invalid

//three access modifiers 

//1)public  - default
// can be accessed anywhere in the project - inside class, outside class and in child classes

class Employee{
    public empName:string ="ravi";


    public display():void{
        console.log(this.empName)
    }
}


let obj2 = new Employee();
console.log(obj2.empName);


// private  only with in the class 

class Employee2{
    private sal:string ="ravi";

       //getter method
    getSal():string{
       return this.sal;
    }

    //setter method 
    setSal(empName:string):void{
       this.sal = empName;
    }

}

let obj3 = new Employee2();
obj3.setSal("Ram");
console.log(obj3.getSal());


// Protected 
// with in the class 
// with in child classes 
// you cannot access outside of a class 

class Animal{
    protected sound ='Roar';

    display():void{
        console.log(this.sound)
    }
}

class Lion extends Animal {
    display(){
        console.log(this.sound);
    }
}

let childObj = new Lion();
childObj.sound;


//access modifiers on methods
//public method

class Student{

     a =10;
    private calculateMarks(){
        console.log("calculating marks");
    }

     show(){
        this.calculateMarks();
        console.log("Public method");
    }


}

let studentObj = new Student();
studentObj.show();

//studentObj.calculateMarks();

//private method

//Protected Method 

class Parent {
    protected showMessage(){
        console.log("Protected method");
    }


}

class Child extends Parent{
    display(){
        this.showMessage();
    }
}

let Childobj = new Child();

Childobj.display();

let ParentObj = new Parent();
ParentObj.showMessage();


//public constructor 

class Employee4{
    name;
    sal;

    public constructor(name:string,sal:number){
        this.name = name;
        this.sal =sal;
        console.log("employee created");
    }
}

let Employee4obj = new Employee4("Ravi",2000);



//private constructor
class Employee6{

    private constructor(){
        console.log("employee created");
    }
}

let Employee5obj = new Employee6();

//single ton


//protected constructor 

class ParentCon{
 protected constructor(){
    console.log("parent constructor");
 }
}

class ChildCon extends ParentCon{
    constructor(){
       super();
       console.log("this is child contructor")
    }
}

let ChildConobj = new ChildCon();

// page classes 

//private

// public methods


//design pattern  page object model

// identify an element (locators)  + perform action on it (methods)  log in   10 

// 10 page

// page => page class 

















