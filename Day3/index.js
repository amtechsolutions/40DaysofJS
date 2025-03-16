// Odd & EVEN
let num1 =16;
let res = num1 % 2;
console.log(res === 0 ? "Even No" : "Odd Numer");

// Driving Licence
let age=17;
console.log(age>=18 ? "You are Elliglible for Driving Lience":"You are Not Elliglible for Driving Lience");

// Calculate CTC with Bonus
let monthlySalary = 12300;
let yearlySalary = monthlySalary  * 12 ;
let bonus = yearlySalary * 0.2;
console.log(yearlySalary,bonus,yearlySalary+bonus);

// Traffic Light stimulation
let color = 'BLUE';
console.log(color === 'RED'? "STOP" : color === 'GREEN'? "GO" : "GO SLOw!");

// Electricity Bill Calculator
let unitsDay =25;
let unitCost =150;
let costPerMonth = 30 * (unitsDay * unitCost);
let grossAnnualPayment = costPerMonth * 12;
let discount = grossAnnualPayment * 0.2;
let NetAnnualPayment = grossAnnualPayment - discount;
console.log(NetAnnualPayment);

//LEAP YEAR
let year =2026;
let result = year%4;
console.log(result === 0?"LEAP YEAR!!":"NOT LEAP YEAR");

//MAX of  numbers
let p=19,q=1,r=6;
console.log(p > q && p > r ? "P is greatest" : r > q ? "R is greatest" : "Q is greatest");

//Bitise double
let count=5;
console.log(count<<1);