function removePassword(user) {
    // Remove password property
    if(typeof user === "object" && user.hasOwnProperty("username") && user.hasOwnProperty("password")){
      delete user.password;
      return user;
    }else{
      return user;
    }
  }

  const user = { username: "Sush", password: "123" };
  console.log(removePassword(user));
  