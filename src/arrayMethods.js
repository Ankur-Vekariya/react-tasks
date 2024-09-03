import React from 'react'

export default function ArrayMethods() {
    const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3


fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6



fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2


// Array methods 

// .at(index)
// index is positive or negative integer
const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"
index = -4;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"














return (
    <div>ArrayMethods</div>
  )
}
