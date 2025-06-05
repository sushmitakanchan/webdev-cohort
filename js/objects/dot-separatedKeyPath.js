function getNestedValue(obj, keyPath){
    const keys = path.split('.');

    let current = obj;
  
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return "Key not found";
      }
    }
  
    return current;
}

const user = {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345
    }
  };
  
  console.log(getValueByPath(user, "address.city"));     
  console.log(getValueByPath(user, "address.country")); 
  console.log(getValueByPath(user, "name.first")); 