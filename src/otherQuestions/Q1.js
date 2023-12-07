function reverseString(str) {
  const result = str.split("").reverse().join("");
  return result;
}

console.log(reverseString("Hello"));
