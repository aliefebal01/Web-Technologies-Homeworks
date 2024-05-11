let array = ["hund", "katze", "maus", "elefant", "schlange", "stachelschwein", "affe", "giraffe"];

function addArrayElement(element) {
  let arrayCopy = [...array];
  // TODO: implement me
  if(arrayCopy.includes(element) == false){
    arrayCopy.push(element);

  }
  return arrayCopy;
}
//console.log(array);
//console.log(addArrayElement("tiger"))

function getArrayElements(number, startIndex) {
  let result = [];
  let arrayCopy = [...array];
  if(startIndex <= arrayCopy.length){
    result = arrayCopy.slice(startIndex, startIndex + number);
  }else{
    a = startIndex % arrayCopy.length;
    result = arrayCopy.slice(a, a + number);
  }

  // TODO: implement me
  return result;
}
//console.log(getArrayElements(2,113))


function deleteArrayElements(number, startIndex, everyIth) {
  let arrayCopy = [...array];
  let removedItems = [];
  let teilarray = [];
  
  
  

  if(startIndex <= arrayCopy.length){
    teilarray = arrayCopy.slice(startIndex, startIndex + number)
  }else{
    a = startIndex % arrayCopy.length;
    teilarray = arrayCopy.slice(a, a + number);
  }
  // TODO: implement me
  for(i=0; i<teilarray.length; i++){
    if(i%everyIth == 0){
      removedItems.push(teilarray[i])
      for (k = 0; k < arrayCopy.length; k ++){
        if(teilarray[i] == arrayCopy[k]){
          arrayCopy[k] = null;
        }
      }
      

      
    }
  }
  

  return {
    newResult :arrayCopy,
    removedItems : removedItems
  };  
}
