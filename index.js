//solution to part one
function displayName_Age(name, year_ofBirth){

   
    let curr_year=new Date().getFullYear();
    let age= curr_year-year_ofBirth;
    
    message= "Hello " +name + " You are " + age +" Years Old";
    console.log(message)

}
// calling the function
displayName_Age('Nakato', 1997)
displayName_Age('Constance', 1980)
displayName_Age('Nakimuli', 1993)
displayName_Age('Ryan', 2020)
displayName_Age('Mwesigye', 2018)
// solution to part two
//function that computes sum of two numbers
var add = function (num1, num2) {
    let sum=num1+num2;
    return sum;
}
// a function that takes another function as a parameter and returns the result of calling the parameter function

var handle_data = function (func) {
    // get data from user or other external source
    var x = 2;
    var y = 3;
    return func(x, y);
}

console.log(handle_data(add));       
console.log(handle_data(subtract));  
//The arrow function
// equivalent to the sum function above
let addition=(x,y)=>x+y
console.log(addition(10, 20)); // 30;