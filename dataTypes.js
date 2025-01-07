let Number = 45
let stringNumber = String(Number)
console.log(typeof stringNumber);

//stack,heap
let userOne = {
    emaiil : "abc@ril.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.emaiil = "xyz@abc.com"
userTwo.upi = "tom@sbi"
console.log(userOne.emaiil);
console.log(userTwo.upi);