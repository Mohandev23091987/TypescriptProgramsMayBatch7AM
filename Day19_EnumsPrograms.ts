//enum => group of related constants 

//Numeric enum

enum Directions{
left, //0
right, // 1
top, //2
down //3
}
console.log(Directions.left);
console.log(Directions.right);
console.log(Directions.top);
console.log(Directions.down);


// custom enums 
enum StatusCode{
    sucess =200,
    notfound=404,
    servererror=500
}

// console.log(StatusCode.sucess);
// console.log(StatusCode);

console.log(StatusCode[200]);




// Auto increment enums 
enum Numbers{
    A =200,
    B,  //201
    C //202
}

console.log(Numbers.C);

//String Enums

enum Browser{
    Chrome="CHROME",
    Firefox = "FireFox",
    Edge="EDGE"
}

console.log(Browser.Chrome)


enum Numbers2{
    A ,
    B,  
    C=200 //202
}
console.log(Numbers2.A);




//Heterogenous enums
enum Hetero{
    active=1,
    inactive="false"
}

console.log(Hetero.active)

//reverse mapping => only exits in numeric enums








