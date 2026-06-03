
import {Employee12} from "./Day21_ParentClass.ts"

class Developer12 extends Employee12 {

    code():void{
 console.log("writing a code");
    }

}

let childobj2 = new Developer12();

childobj2.code();
childobj2.work();
console.log(childobj2.company);