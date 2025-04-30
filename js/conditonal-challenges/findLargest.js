function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if((a>=b) || (a>=c)){
        return a;
    }else if((b>=a) || (b>=c)){
        return b;
    }else{
        return c;
    }

  }

  console.log(findLargest(23,85,65));
  