function countProperties(user) {
    // Return the number of properties in user
    return (typeof user === "object") ? Object.keys(user).length : 0
    
  }

  const user = { username: "Sush", password: "123" };
  console.log(countProperties(user));