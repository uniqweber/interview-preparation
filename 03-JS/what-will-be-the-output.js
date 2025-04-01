/* ---------------------------------- 01 --------------------------------- */
/* let a = [1, 2, 3];
let b = a;
a[0] = 99;
console.log(a[0]); // Output: 99 */

/* ----------------------------------- 02 ----------------------------------- */
/* const obj1 = { a: 1, b: 2 };
   const obj2 = obj1;
   obj2.a = 3;
   console.log(obj1.a); // Output: 3 */

/* ----------------------------------- 03 ----------------------------------- */
// let c = 5;
// let d = c++;
// let e = ++c;
// console.log(d, e); // Output: 5 7

/* ----------------------------------- 04 ----------------------------------- */
/* let x = 2;
let y = "5";
console.log(x + y); // Output: 25 */

/* ----------------------------------- 05 ----------------------------------- */
/* const arr = [1, 2, 3];
   const newArr = arr.map(num => num * 2);
   console.log(newArr); // Output: [2, 4, 6] */

/* ----------------------------------- 06 ----------------------------------- */
/* let a = 5;
let b = "5";
console.log(a == b);// Output: true
console.log(a === b);// Output: false */

/* ----------------------------------- 07 ----------------------------------- */
/* let obj = {};
obj.a = 1;
obj.b = 2;
delete obj.a;
console.log(obj);// Output: {b:2} */

/* ----------------------------------- 08 ----------------------------------- */
/* let foo = "bar";
let bar = "foo";
[foo, bar] = [bar, foo];
console.log(foo, bar);// Output: foo bar */

/* ----------------------------------- 09 ----------------------------------- */
/* let obj = {a: 1, b: 2};
const {a, b, c = 3} = obj;
console.log(c); // Output: 3 */

/* ----------------------------------- 10 ----------------------------------- */
/* let arr = [1, 2, 3];
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 6 */

/* ----------------------------------- 11 ----------------------------------- */
/* let arr = [1, 2, 3];
    let doubled = arr.map((x) => x * 2);
    let total = doubled.reduce((acc, val) => acc + val, 0);
    console.log(total); // Output: 12 */

/* ----------------------------------- 12 ----------------------------------- */
/* function a() {
  return {b: 1};
}
console.log(a()); // Output: {b:1} */

/* ----------------------------------- 13 ----------------------------------- */
/* let obj = {x: 1, y: 2};
const {x, z = 3} = obj;
console.log(z);  // Output: 3 */

/* ----------------------------------- 14 ----------------------------------- */
/* let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2,4,6,8,10] */

/* ------------------------------------ 15 ----------------------------------- */
/* let result = (function () {
  return typeof arguments;
})();
console.log(result); // Object */

/* ----------------------------------- 16 ----------------------------------- */
/* let obj = {a: 1};
Object.freeze(obj);
obj.a = 3;
console.log(obj.a); //Output: 1 */

/* ----------------------------------- 17 ----------------------------------- */
/* let arr = [1, 2, 3];
let doubled = arr.map((num) => num * 2);
let total = doubled.reduce((acc, num) => acc + num, 0);
console.log(total); //Output: 12 */

/* ----------------------------------- 18 ----------------------------------- */
/* let arr = ["a", "b", "c"];
arr.splice(1, 1, "x", "y");
console.log(arr); //Output: ["a","x","y","c"] */

/* ----------------------------------- 19 ----------------------------------- */
/* let obj1 = {a: 1};
let obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a, obj2.a); //Output: 1,2 */

/* ----------------------------------- 20 ----------------------------------- */
/* const a = [1, 2, 3];
const b = [...a];
b.push(4);
console.log(a, b); //Output: [1,2,3] [1,2,3,4] */

/* ----------------------------------- 21 ----------------------------------- */
/* let foo = {a: 1, b: 2};
let bar = foo;
bar.a = 3;
console.log(foo.a); //Output: 3 */

/* ----------------------------------- 22 ----------------------------------- */
/* let obj = {a: 1};
Object.defineProperty(obj, "b", {
  value: 2,
  writable: false,
});
obj.b = 3;
console.log(obj.b); //Output: 2 */

/* ----------------------------------- 23 ----------------------------------- */
/* let arr = [1, 2, 3];
let [x, y, z] = arr;
console.log(x, y, z); //Output: 1 2 3 */

/* ----------------------------------- 24 ----------------------------------- */
/* let obj = {a: 1};
obj.a = 2;
console.log(obj.a); //Output: 2 */

/* ----------------------------------- 25 ----------------------------------- */
/* const arr = ["apple", "banana", "cherry"];
console.log(arr.indexOf("banana")); //Output: 1 */

/* ----------------------------------- 26 ------------------------------ */
/* let obj = {a: 1};
let clone = Object.assign({}, obj);
clone.a = 2;
console.log(obj.a, clone.a); //Output: 1 2 */

/* ----------------------------------- 27 ----------------------------------- */
/* let arr = [1, 2, 3];
let total = arr.reduce((acc, val) => acc + val, 0);
console.log(total); //Output: 6 */

/* ----------------------------------- 28 ----------------------------------- */
/* let obj = {a: 1};
obj.a = 2;
console.log(obj.a); //Output: 2 */

/* ----------------------------------- 29 ----------------------------------- */
/* let x = [1, 2, 3];
let y = x.slice();
y[0] = 99;
console.log(x[0]); //Output: 1 */

/* ----------------------------------- 30 ----------------------------------- */
/* let a = 10;
let b = "10";
console.log(a == b); //Output: true
console.log(a === b); //Output: false */

/* ----------------------------------- 31 ----------------------------------- */
/* let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a); //Output: [1,2,3,4] */

/* ----------------------------------- 32 ----------------------------------- */
/* let a = 1;
let b = 2;
let c = a + b;
console.log(c); //Output: 3 */

/* ----------------------------------- 33 ----------------------------------- */
/* let arr = [1, 2, 3];
arr.forEach((num) => {
  console.log(num);
}); //Output: 1 2 3 */

/* ----------------------------------- 34 ----------------------------------- */
/* let obj = {a: 1};
delete obj.a;
console.log(obj); //Output: {} */

/* ----------------------------------- 35 ----------------------------------- */
/* let arr = [1, 2, 3];
    let newArr = arr.map(x => x * 2);
    console.log(newArr); //Output: [2,4,6] */

/* ----------------------------------- 36 ----------------------------------- */
/* let a = 3;
let b = a;
b = 5;
console.log(a); //Output: 3 */

/* ----------------------------------- 37 ----------------------------------- */
//     let arr = [1, 2, 3];
//     arr.unshift(0);
//     console.log(arr);

/* ----------------------------------- 38 ----------------------------------- */
//     let str = "Hello";
//     console.log(str.substring(1, 3));

/* ----------------------------------- 39 ----------------------------------- */
//     let obj = { a: 1 };
//     let anotherObj = obj;
//     anotherObj.a = 2;
//     console.log(obj.a);

/* ----------------------------------- 40 ----------------------------------- */
//     let arr = [1, 2, 3, 4];
//     arr.pop();
//     console.log(arr);

/* ----------------------------------- 41 ----------------------------------- */
//     let a = [1, 2, 3];
//     let b = a.slice(0, 2);
//     console.log(b);

/* ----------------------------------- 42 ----------------------------------- */
//     let obj = { a: 1, b: 2 };
//     let newObj = Object.freeze(obj);
//     newObj.a = 3;
//     console.log(obj.a);

/* ----------------------------------- 43 ----------------------------------- */
//     let foo = 10;
//     let bar = foo;
//     bar = 20;
//     console.log(foo);

/* ----------------------------------- 44 ----------------------------------- */
//     let obj = { a: 1, b: 2 };
//     Object.freeze(obj);
//     obj.b = 3;
//     console.log(obj.b);

/* ----------------------------------- 45 ----------------------------------- */
//     let str = "Hello, World!";
//     console.log(str.slice(7, 12));

/* ----------------------------------- 46 ----------------------------------- */
//     let arr = [5, 6, 7];
//     let total = arr.reduce((acc, num) => acc + num, 0);
//     console.log(total);

/* ----------------------------------- 47 ----------------------------------- */
//     let arr = [1, 2, 3];
//     let b = arr.reverse();
//     console.log(arr);

/* ----------------------------------- 48 ----------------------------------- */
//     let arr = [1, 2, 3];
//     let [a, , c] = arr;
//     console.log(a, c);

/* ----------------------------------- 49 ----------------------------------- */
//     let arr = ['apple', 'banana', 'cherry'];
//     console.log(arr.includes('banana'));
