const args = process.argv.slice(2);
let x = Number(args[0]);
let y = Number(args[1]);
console.log(typeof(x));
console.log(typeof(y));
console.log("x: "+x+" \t y: "+y);
if(x>y){
    console.log(`x=${x} is max`);
    }else {
    console.log(`y=${y} is max`);
    }
    