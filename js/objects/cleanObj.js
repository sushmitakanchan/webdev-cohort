function cleanObject(obj) {
    // Remove all properties with null or undefined values
    for(key in obj){
      if (obj[key] === null || obj[key] === undefined){
        delete obj[key];
       
      }
    }
    return obj
  }
  const user = { username: "Sush", password: "123" , insta: undefined, fb: null};
  console.log(cleanObject(user));
  
  