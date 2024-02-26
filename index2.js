function generateOTP(length){
    let otp = '';
    for(let i= 0;i< length;i++){
    otp += Math.floor(Math.random()*10).toString();
    }
    return otp;
}
console.log(generateOTP(4));
let a = 32;
let b = 65;
let sum =  (" sum is : " ,a+b);
let c = 32;
let d = 65;

console.log(c++);
console.log(++d);