
/*var name = 'jerry';
const a = 10;
const b = 12;
let c = 29
if (a>b){
    console.log("")
}
else{
    console.log("b is greater")
}
*/
//const n = 20;
//for (let i = 0; i , n; i++){
//    console.log(i);
//}

//try{
  //  const a = 10;
    //a=12;
//} catch (err) {
  //  console.log(24);
//}

/*function square(x){
    return x * x;
}
const a = [1,2,3,5];
const squar_a = a.map((e) => square(e));
const odd_a = a.filter((e)% 2);
console.log(odd_a);
*/

//var cowsay = require("cowsay");

//console.log(cowsay.say({
   // text : "I'm a moooodule",
    //e : "oO",
  //  T : "U "
//}));

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

cowsay`Just type cowsay before your
template string, and the
cow will say it!`;
