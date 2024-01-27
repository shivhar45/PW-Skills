function generateOtp(){
    const min = 1000;
    const max = 9999;
    let a = Math.floor(Math.random()*(max - min +1))+min;
   
    return a.toString();
}

console.log(`Here is your otp: ${generateOtp()}`);