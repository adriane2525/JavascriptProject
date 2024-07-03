var num = 100;

if (typeof num !== "number") {
    console.log("Not a number");
} 
else if (num % 2 === 0) {
    console.log("It is even");
}else{
  console.log("It is odd");  
}