function invertedMountain(n) {
  let result = '';

  for(let i = n; i >=1 ; i--){
    let stars = "*".repeat(i);

    if (i !== 1)
      stars += '\n';

    result += stars;
  }

  return result;

  
}
  invertedMountain(4);