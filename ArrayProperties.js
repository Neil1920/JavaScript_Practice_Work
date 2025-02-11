/* //-->(1)length Property:-
      //---------------
let arr = [19,20,21,22,23,24,25];
console.log(`The Length Of Given Array Is:- ${arr.length}`);
console.log(`Array Element's Are:- ${arr}`);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//-->change the length of array by directly assigining the new length.
arr.length=3;
console.log(`The Length Of Modified Array Is:- ${arr.length}`);
console.log(`New Array Element's Are:- ${arr}`); */

//============================================================================//
//-->(2)prototype Property (Advanced).

let ar=[1,2,3,4,5,6,7,8,9,10];
console.log(`The Array Element's Are:- ${ar} -The Length Of Array Is:- ${ar.length}`);
Array.prototype.firstElement = function(){
    return this[0];
};
console.log(`The First Element In Array Is The:- ${ar.firstElement()}`);
