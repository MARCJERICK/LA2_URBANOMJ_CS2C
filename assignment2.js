//initialize variable and constant
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;
//display the sum of (a,b,c,d) and constant (e)
let sum = a + b + c + Number(d)+ e;
console.log(sum);
//compare the value of variable (a) and constant (e)
console.log(Number(d) > e);
console.log(Number(d) < e);
console.log(Number(d) >= e);
console.log(Number(d) <= e);
console.log(Number(d) === e);
//subract all the value of the declared variables
let sub = a - b - c - Number(d) - e;
console.log(sub);
//multiply  the value of variable a and c, divided by constant e
let mult = (a * c) / e;
console.log(mult);
//display the exponet value of constan e raise to the power of variable c
let power = e ** c;
console.log(power);
//ressign the value of c.3 to constant e
let newE = c.toFixed(3);
console.log(newE);