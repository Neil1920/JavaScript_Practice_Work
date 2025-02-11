const args = process.argv.slice(2);
let s = Number(args[0]);
let n = Number(args[1]);
let z = Number(args[2])

console.log("X:-> "+s+"\t Y:-> "+n+"\t Z:-> "+z);
if (s>n){
    if (s>z) {
        console.log(`S:--> ${s} Is The Max`);
    }
    else{
        console.log(`Z:--> ${z} Is The Max`);
    }
}
else{
    if (n>z) {
        console.log(`N:--> ${n} Is The Max`);
    } else {
        console.log(`Z:--> ${z} Is The Max`);
    }
}