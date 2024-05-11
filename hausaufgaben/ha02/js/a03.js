let object = {
  a: "hund", b: "katze", c: "maus", d: "elefant", e: "schlange", f: "stachelschwein", g: "affe", h: "giraffe"
}

function addObjectElement(key, value) {
  let objectCopy = Object.assign({}, object)
  // TODO: implement me
  if (objectCopy.hasOwnProperty(key)){
    c = 0;
    sik = key;
    while(sik in object){
      c = c+1;
      sik = key + "_" + c;
      
    }
    key = sik;
    objectCopy[key] = value;
  }else{
    objectCopy[key] = value;
  }
  
  
  return objectCopy;
}

function getObjectElements(keys) {
  let result = [];
  // TODO: implement me
  for(i = 0; i<keys.length; i++){
    if(keys[i] in object){
      result.push(object[keys[i]]);
    }else{
      result.push("not found")
    }
  }
  return result;
}

function deleteObjectElements(keys) {
  let objectCopy = Object.assign({}, object)
  // TODO: implement me
  for(i = 0; i<keys.length; i++){
    if(keys[i] in object){
      delete objectCopy[keys[i]]
    }
  }
  return objectCopy;
}