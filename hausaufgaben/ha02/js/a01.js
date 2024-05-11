function multiply(number1, number2) {
  // TODO: implement me
  if(number2 == null){
    return number1;
  }else{
    return number1 * number2;
  }
  
}
//console.log(multiply(17))


function multiplyAll() {
  // TODO: implement me
  var son = 1;
  for(let i = 0; i< arguments.length; i++){
      son *= arguments[i];
  }
  return son;
}
//console.log(multiplyAll(17, 13, 23, 37, 43))