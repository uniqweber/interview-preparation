/* ------------------------------- problem 01 ------------------------------- */
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
const countLetterOnString = (str) => {
  let output = {};
  str.split("").forEach((element) => {
    if (output.hasOwnProperty(element)) {
      output[element] += 1;
    } else output[element] = 1;
  });
  return output
};
console.log(countLetterOnString("hello"));
