class Student{
//properties 
readonly collegename:string ="ABC";
studentName:string;  //Ravi
//constructor
constructor(name:string){
this.studentName = name;
}
//methods
display(){
    console.log(this.collegename);
    console.log(this.studentName);
}
}

let studentObj = new Student("Ravi");

//studentObj.collegename="XYZ";
console.log(studentObj.collegename);
console.log(studentObj.studentName)
studentObj.display()

let studentObj2 = new Student("Ramesh");

//static => one copy for all objects 

//instance separate copy


