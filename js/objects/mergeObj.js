function mergeObjects(obj1, obj2) {
    // Merge obj1 and obj2 into a single object
    const merged = Object.assign({}, obj1, obj2);
    return merged;
  }

  const obj1 = { username: "Sush", password: "123" };
  const obj2 = {age: 23, email: "sush@gmail.com"}
  console.log(mergeObjects(obj1,obj2));
  
