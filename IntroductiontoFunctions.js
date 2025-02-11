/* function display(name){
    console.log("Hello My Name Is "+name+" Nice To Meet You.");
}
display("Swapnil"); */

//============================================================================//

//-->Default Parameters: Default parameters allow you to assign a default value to a parameter. If no argument is provided, the default value is used.
/* function display(name="Nihal") {
    console.log("Hello My Name Is "+name+" Nice To Meet You.");
}
display();
display("Swapnil"); */

//============================================================================//

//-->Rest Parameters (...args): Rest parameters allow a function to accept an indefinite number of arguments as an array.
/* function sum(...numbers) {
    let tot=0;
    for(let num of numbers){
        tot+=num;
    }
    console.log(tot);
}
sum(1,2,3,4,5,6,7,8,9,10);
sum(19,20); */

//============================================================================//

/* ---> Function Returning Value: When a function returns a value, it means the function produces a result that
can be used elsewhere in the program. This is done using the return statement. */

/* function add(a,b){
    return a+b;
}
let result = add(115,130);
console.log(result); */

//============================================================================//

/*--->> Passing and Returning Arrays from Functions in JavaScript: You can pass and return array as like the
normal variables.
Passing the array to function: */

/* function displayArray(arr) {
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
let numbers=[10,20,30,40,50,60,70,80,90,100];
displayArray(numbers); */

//============================================================================//

//--->> Example to copy and return even number from argument array

/* function getEvenNumbers(arr) {
    let t=[],j=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            t[j++] = arr[i];
        }
    }
    return t;
}
let numbers=[19,20,45,89,112,5,78,96,63,21,67,88];
let a=getEvenNumbers(numbers);
console.log(`The List Of Element Is: ${numbers}`);
console.log(`The List Of Even Number Is: ${a}`); */

//============================================================================//

/*--> Array in JavaScript always passed by reference, means change in the parameter array will be reflected
in the argument array(Actual Array). */

/* function modifiedArray(arr){
    for(let j=0;j<arr.length;j++){
        arr[j]*=5;
    }
}
let data=[2,15,8,4,9,19];
modifiedArray(data);
console.log(`The Array Will Modified:- ${data}`); */

//============================================================================//

/*--> A Function Expression is a way to create a function and store it inside a variable.
It works just like a normal function, but it doesn't have a name (anonymous) and is assigned to a variable. */

/* const welCome = function(){
    console.log("Welcome In JavaScript");
}
welCome(); */

//------(Factorical Example)------->>
/* const facto =  function(no) {
    let f=1;
    while(no>0){
        f = f*no;
        no--;
    }
    return f;
}
let answer = facto(6);
console.log(`The Factorical Of 6 Is:- ${answer}`);
console.log(`The Factorical Of 5 Is:- ${facto(5)}`); */

//============================================================================//

/* --->>Callback functions: A callback in JavaScript is a function that is passed as an argument
to another function and is executed after some operation has been completed. */

/* function display(name, callback){
    console.log("Hello My Name Is "+name);
    callback();
}

function secState(){
    console.log("Nice To Meet You..!");
}
display("Vishwajeet",secState); */

//============================================================================//
