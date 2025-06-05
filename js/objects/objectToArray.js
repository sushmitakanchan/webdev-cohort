// You just need to implement the objectToArray function
function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    return Object.entries(obj)
  }

  const obj = { username: "Sush", password: "123" };
  console.log(objectToArray(obj));
  