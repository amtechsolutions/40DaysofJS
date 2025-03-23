let day =' Monday';
switch(day){
    case "monday" :
        console.log('it\'s start of the Week');
    default :
        console.log('it\'s a normal day');
}

// ATM Cash Withdrawl System
let amountWithdrawn=200;
let isMultipleOfHundred = amountWithdrawn%100===0?true:false;
switch(isMultipleOfHundred){
    case true :
        console.log('Withdrawl Successful');
        break;
    default :
        console.log('Invallid Amount');
}

//  Pay for your movie ticket
let age=61;
if(age < 18){
    console.log("Ticket Cost is $3");
} else if ( age <= 60) {
    console.log("Ticket Cost is $10");
} else if ( age >60) {
    console.log("Ticket Cost is $8");
}

//  Horoscope Sign Checker
let birthMonth='September';
switch(birthMonth){
    case 'March':
        console.log('Aries!!');
        break;
    case 'April':
        console.log('Taurus!!');
        break;
    case 'May':
        console.log('Gemini!!');
        break;
    case 'June':
        console.log('Cancer!!');
        break;
    case 'July':
        console.log('Leo!!');
        break;
    case 'August':
        console.log('Viro!!');
        break;
    case 'September':
        console.log('Libra!!');
        break;
    case 'October':
        console.log('Sagittarius!!');
        break;
    case 'November':
        console.log('Capricorn!!');
        break;
    case 'December':
        console.log('Acqarius!!');
        break;      
    case 'January':
        console.log('Pisces!!');
        break;                          
    default:
        console.log("Invallid Birth Month");
}
//Which Triangle?
let side1Triangle=20, side2Triangle = 20, side3Triangle=20;
if(side1Triangle===side2Triangle && side2Triangle===side3Triangle){
    console.log("Equilateral Triangle");
} else if(side1Triangle===side2Triangle||side2Triangle===side3Triangle||side1Triangle===side3Triangle){
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}
