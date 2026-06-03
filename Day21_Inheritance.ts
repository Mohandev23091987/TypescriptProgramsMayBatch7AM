
//one of the oops concepts 
//it allow one class to acquire the properties and methods of another class 

//Parent class 
//child class

// parent class => add sub mul
// extends 
// div 

//types of inheritance

// 1)Single inheritance => one parent 


class Employee {
    company: string = "google";

    work(): void {
        console.log("employee is wokring");
    }
}

class Developer extends Employee {

    code():void{
 console.log("writing a code");
    }

}

let childobj = new Developer();

childobj.code();
childobj.work();
console.log(childobj.company);

//mutlilevel inheritance  => 
// a class inherits from another class which itself inherits  from another class

class GrandParent{
house():void{
  console.log("he owns house")
}
}
class Parent extends GrandParent{
car():void{
  console.log(" owns car")
}
}

class Child extends Parent{
bike():void{
  console.log(" owns bike")
}
}

let childObj1 = new Child();
childObj1.bike();
childObj1.car();
childObj1.house();

//intellisense

//Heirarchical Inheritance
// mualiple child classes inherit from the same parent

class Animal{
    eat():void{
        console.log("animal is eating")
    }
}

class Dog extends Animal{
    bark():void{
        console.log("Dog will bark")
    }
}

let dogObj = new Dog();
dogObj.eat();
dogObj.bark();


class Cat extends Animal{
    meow():void{
        console.log("cat will meow")
    }
}

let catObj = new Cat();
catObj.eat();
catObj.meow();


// multiple inheritance 
//child having mutliple parents => this is not allowed with clases 
//this is allowed with interfaces 

// class A , Class B

// class C extends A,B {}

//interface 
//what to implement
//it won't tell how to implement

interface flyable{
    fly():void;
}

interface swimmable{
    swim():void;
}

class Duck implements flyable, swimmable{

fly():void{
    console.log("Duck can fly");
}

swim():void{
     console.log("Duck can swim")
}
}

let Duckobj = new Duck();

Duckobj.fly();
Duckobj.swim();

// hybrid inheritance 
//combination of two or more inheritance types

class Vehicle{
    start():void{
        console.log("vehicle started");
    }
}

interface GPS{
    navigate():void;
}

class Car extends Vehicle implements GPS{
      navigate():void{
        console.log("GPS navigation started")
      }
}

let carobj = new Car();

carobj.start();
carobj.navigate();


//base page 
//page class extend base page

// Method Overriding

class Animal1{
sound():void{
    console.log("Animal makes sound");
    //50%
}
}

class Dog1 extends Animal1 {
override sound():void{
    super.sound();
    //50%
    console.log("Dog barks");
}
}

let Dog1obj = new Dog1();
Dog1obj.sound();


//string program 
//array programs 

//architecturre of playwright 
//selenium vs playwright 

//javascript concepts => functions ,promises 
//typscripts 

// write locators place in page classes 
// create methods in page classes 

// scripts 

//utlility methods 

//run 

//debug 

//identify an elment + perform action on it 


























