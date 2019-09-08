function reverse_words(str) {
  str = "Marry got married to a goat";
  let reversed = str.split('').reverse().join('');
  console.log(reversed);
}

reverse_words("Marry got married to a goat");