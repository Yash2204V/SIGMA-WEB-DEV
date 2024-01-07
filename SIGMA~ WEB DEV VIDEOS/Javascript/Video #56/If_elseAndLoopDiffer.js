let a = 63;

if(a>3){
    console.log("you can drive");
}
else{
    console.log("you can not drive");
}

console.log(a**56);
console.log("Hello g");
a+=2;
console.log(a);

// That's great buddy! it's as same as C and C++~ hehe!!!
/* for(let i = 0; i<100; i++){
    console.log(i+1);
}

for (let i = 0; i < 100; i++) {
    console.log(i);
} */

// Slight difference in While loop and Do While loop
console.log(" ");

let p = 10;
while(p>0){
    console.log(p);
    p--;
}
console.log(" ");
p = 10;
do {
    console.log(p);
    p--;
} while (p>0);

// BOTH THE LOOPS ARE PRINTING SAME NUMBER but now here is the difference
console.log(" ");
console.log(p);
console.log(" ");

do {
    console.log(1000);

} while (p!=0);
// Even when p = 0, it get executed one time.

let Obj = {
    name: "Harry",
    class: "pta nhi",
    "RDC ho kya": "-Ye kya hota hai?"
}

//forin
for (const key in Obj) {
    const element = Obj[key];
    console.log(key,element);
}
console.log("Mujhe bhi ni pta, HAHA!");

//forof
console.log(" ");
for (const iterator of "Yash") {
    console.log(iterator);
}