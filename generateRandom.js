let next = 1;
let a,c = 0;
let m = 2**4;

function _init(seed) {
    //select Prim Number
    let arr = Array();
    for(let i=2;i<=seed**2;i++) {
        if(isPrim(i)&&seed<i) arr.push(i);
    }
    // simple shuffle
    arr.sort(() => Math.random() - 0.5);
    console.log("arr",arr);
    next = seed;
    a = arr[0];
    c = arr[1];
}

// Prim Number check
function isPrim(num) {
    if(num<2) return false;
    if(num==2) return true;
    if(num==3) return true;
    for(var i=2;i<=parseInt(Math.sqrt(num));i++) {
        if(num%i==0) return false;
    }
    return true;
}

// Linear congruential sequence
// Xn+1 =(a * Xn + c) mod m
function _LinearCongruential(){
    //next = (9973 * next + 123) % m;
    next = (a * next + c) % m;
    return next;
}

_init(5);
for(var i=0;i<5;i++) {
    console.log(_LinearCongruential());
}