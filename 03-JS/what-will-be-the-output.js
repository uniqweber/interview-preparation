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

// // 6. What will this code output?
//    let a = 5;
//    let b = "5";
//    console.log(a == b);
//    console.log(a === b);

// // 7. What will be the output of this code?
//    let obj = {};
//    obj.a = 1;
//    obj.b = 2;
//    delete obj.a;
//    console.log(obj);

// // 8. What will this output?
//    let foo = "bar";
//    let bar = "foo";
//    [foo, bar] = [bar, foo];
//    console.log(foo, bar);

// // 9. What will be the result of this code?
//    console.log(0.1 + 0.2 === 0.3);

// // 10. What will be the output here?
//     let obj = { a: 1, b: 2 };
//     const { a, b, c = 3 } = obj;
//     console.log(c);

// // 11. What will the output of this code be?
//     let arr = [1, 2, 3];
//     let sum = arr.reduce((acc, val) => acc + val, 0);
//     console.log(sum);

// // 12. What will the result of this code be?
//     let arr = [1, 2, 3];
//     let doubled = arr.map((x) => x * 2);
//     let total = doubled.reduce((acc, val) => acc + val, 0);
//     console.log(total);

// // 13. What will be the result of this code?
//     function a() {
//         return { b: 1 };
//     }
//     console.log(a());

// // 14. What will be printed here?
//     let obj = { x: 1, y: 2 };
//     const { x, z = 3 } = obj;
//     console.log(z);

// // 15. What will the output of this code be?
//     let nums = [1, 2, 3, 4, 5];
//     let doubled = nums.map(num => num * 2);
//     console.log(doubled);

// // 16. What will this code output?
//     let result = (function() {
//         return typeof arguments;
//     })();
//     console.log(result);

// // 17. What will this output?
//     let obj = { a: 1 };
//     Object.freeze(obj);
//     obj.a = 3;
//     console.log(obj.a);

// // 18. What will be the output of the following code?
//     let arr = [1, 2, 3];
//     let doubled = arr.map(num => num * 2);
//     let total = doubled.reduce((acc, num) => acc + num, 0);
//     console.log(total);

// // 19. What will this code output?
//     let arr = ['a', 'b', 'c'];
//     arr.splice(1, 1, 'x', 'y');
//     console.log(arr);

// // 20. What will be printed?
//     let obj1 = { a: 1 };
//     let obj2 = Object.assign({}, obj1);
//     obj2.a = 2;
//     console.log(obj1.a, obj2.a);

// // 21. What is the output of the following code?
//     const a = [1, 2, 3];
//     const b = [...a];
//     b.push(4);
//     console.log(a, b);

// // 22. What will be printed here?
//     let foo = { a: 1, b: 2 };
//     let bar = foo;
//     bar.a = 3;
//     console.log(foo.a);

// // 23. What will the output of this code be?
//     let obj = { a: 1 };
//     Object.defineProperty(obj, "b", {
//         value: 2,
//         writable: false
//     });
//     obj.b = 3;
//     console.log(obj.b);

// // 24. What will this code output?
//     let arr = [1, 2, 3];
//     let [x, y, z] = arr;
//     console.log(x, y, z);

// // 25. What will be the output of this code?
//     let obj = { a: 1 };
//     obj.a = 2;
//     console.log(obj.a);

// // 26. What will this output?
//     const arr = ['apple', 'banana', 'cherry'];
//     console.log(arr.indexOf('banana'));

// // 27. What will be the output here?
//     let obj = { a: 1 };
//     let clone = Object.assign({}, obj);
//     clone.a = 2;
//     console.log(obj.a, clone.a);

// // 28. What will be printed here?
//     let arr = [1, 2, 3];
//     let total = arr.reduce((acc, val) => acc + val, 0);
//     console.log(total);

// // 29. What will the output of this code be?
//     let obj = { a: 1 };
//     obj.a = 2;
//     console.log(obj.a);

// // 30. What will be the output of this code?
//     let x = [1, 2, 3];
//     let y = x.slice();
//     y[0] = 99;
//     console.log(x[0]);

// // 31. What will this output?
//     let a = 10;
//     let b = "10";
//     console.log(a == b);
//     console.log(a === b);

// // 32. What is the output of the following code?
//     let a = [1, 2, 3];
//     let b = a;
//     b.push(4);
//     console.log(a);

// // 33. What will be the result of this code?
//     let a = 1;
//     let b = 2;
//     let c = a + b;
//     console.log(c);

// // 34. What will be the output here?
//     let arr = [1, 2, 3];
//     arr.forEach(num => {
//         console.log(num);
//     });

// // 35. What will the output of this code be?
//     let obj = { a: 1 };
//     delete obj.a;
//     console.log(obj);

// // 36. What will the output of this code be?
//     let arr = [1, 2, 3];
//     let newArr = arr.map(x => x * 2);
//     console.log(newArr);

// // 37. What will this code print?
//     let a = 3;
//     let b = a;
//     b = 5;
//     console.log(a);

// // 38. What will be printed here?
//     let arr = [1, 2, 3];
//     arr.unshift(0);
//     console.log(arr);

// // 39. What will the output be here?
//     let str = "Hello";
//     console.log(str.substring(1, 3));

// // 40. What will be the output of this code?
//     let obj = { a: 1 };
//     let anotherObj = obj;
//     anotherObj.a = 2;
//     console.log(obj.a);

// // 41. What will be printed here?
//     let arr = [1, 2, 3, 4];
//     arr.pop();
//     console.log(arr);

// // 42. What will this output?
//     let a = [1, 2, 3];
//     let b = a.slice(0, 2);
//     console.log(b);

// // 43. What will be the output of this code?
//     let obj = { a: 1, b: 2 };
//     let newObj = Object.freeze(obj);
//     newObj.a = 3;
//     console.log(obj.a);

// // 44. What will this print?
//     let foo = 10;
//     let bar = foo;
//     bar = 20;
//     console.log(foo);

// // 45. What will the result be here?
//     let obj = { a: 1, b: 2 };
//     Object.freeze(obj);
//     obj.b = 3;
//     console.log(obj.b);

// // 46. What will be the output of this code?
//     let str = "Hello, World!";
//     console.log(str.slice(7, 12));

// // 47. What will this code output?
//     let arr = [5, 6, 7];
//     let total = arr.reduce((acc, num) => acc + num, 0);
//     console.log(total);

// // 48. What will be the output here?
//     let arr = [1, 2, 3];
//     let b = arr.reverse();
//     console.log(arr);

// // 49. What will this print?
//     let arr = [1, 2, 3];
//     let [a, , c] = arr;
//     console.log(a, c);

// // 50. What will be the output of this code?
//     let arr = ['apple', 'banana', 'cherry'];
//     console.log(arr.includes('banana'));
