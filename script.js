for(var i = 1; i <= 20; i++){
    if(i % 15 == 0){
    console.log("FizzBuzz");
    fizzBuzzCounter++;
}else if(i % 3 == 0){
    console.log("Fizz");
    fizzCounter++;
}else if(i % 5 == 0){
    console.log("Buzz");
    buzzCounter++;
}else{
    console.log(i);
}

}
console.log('The Fizz count is: ' + fizzCounter)
console.log('The Buzz count is: ' + buzzCounter)
console.log('The FizzBuzz count is: ' + fizzBuzzCounter) 