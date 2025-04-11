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
  return output;
};
// console.log(countLetterOnString("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

/* ------------------------------- problem 02 ------------------------------- */
// Input: "listen", "silent"
// Output: true
const checkAnagram = (strOne = "", strTwo = "") => {
  if (strOne.length !== strTwo.length) return false;
  strOne.split("").forEach((char) => {
    if (!strTwo.includes(char)) return false;
  });
  return true;
};
// console.log(checkAnagram("listen", "silent"));

/* ------------------------------- problem 03 ------------------------------- */
// Input: [1, 2, 3, 2, 4, 1]
// Output: [1, 2, 3, 4]

const removeDuplicateElement = (arr = []) => {
  let result = [];
  arr.forEach((el) => {
    !result.includes(el) && result.push(el);
  });
  return result;
};
// console.log(removeDuplicateElement([1, 2, 3, 2, 4, 1]));

/* ------------------------------- problem 04 ------------------------------- */
// Input: "javascript"
// Output: "tpircsavaj"

const revertStr = (str = "") => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    result += char;
  }
  return result;
};
// console.log(revertStr("javascript"));

/* ------------------------------- problem 05 ------------------------------- */
// Input: 1234
// Output: 10 (1+2+3+4)

const sumOfDigits = (digits = 0) => {
  let result = 0
  digits.toString().split("").forEach(num=>{
    result += Number(num)
  })
  return result
};
console.log(sumOfDigits(1234));
