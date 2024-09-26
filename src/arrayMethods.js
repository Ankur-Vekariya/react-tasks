import React from "react";

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

  // find the longest wors from string

  const findLongestWord = (str) => {
    if (str.trim().length === 0) {
      return false;
    }
    let strArr = str.trim().split(" ");
    strArr = strArr.sort((a, b) => a.length - b.length);
    console.log("strArr", strArr);
    return strArr.at(-1);
  };

  console.log(findLongestWord("ankur is learning javascript logicbuilding"));

  const convertHashtag = (str) => {
    let arr = str.split(" ");

    arr = arr.map((item) => item.replace(item[0], item[0].toUpperCase()));
    arr = arr.join("");
    console.log("arr------", arr);
    return "#" + arr;
  };

  console.log(convertHashtag("ankur is learning javascript logicbuilding"));

  const findChar = (str, char) => {
    str = str.toLowerCase();
    char = char.toLowerCase();

    let arr = str.split("");
    let a = 0;
    arr = arr.map((item) => {
      if (item == char) {
        a = a + 1;
      }
    });
    console.log("arr------", arr);
    return a;
  };

  console.log(findChar("logicbuildIng", "i"));

  // check triangle type
  // take 3 sides
  // 3 are equal equilateral
  // 2 are equal isosceles
  //  if all different scalene

  const checkTriangleType = (first, second, third) => {
    if (first === second && second == third) {
      return "equilateral";
    } else if (first === second || second == third || first === third) {
      return "isosceles";
    } else {
      return "scalene";
    }
  };
  // console.log(checkTriangleType(3, 3, 3));
  // console.log(checkTriangleType(3, 8, 3));
  // console.log(checkTriangleType(3, 2, 5));

  // sort an array of number in ascending order
  const sortAscending = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[i] > arr[j]) {
          let ref = arr[i];
          arr[i] = arr[j];
          arr[j] = ref;
        }
      }
    }
    return arr;
  };
  console.log(sortAscending([5, 35, 27, 90, 55]));

  // find the maximum number from array
  const findMax = (arr) => {
    arr = arr.sort((a, b) => a - b);
    //  you need to convert in ascending or descending then last or first element is higher or lesser
    // let len = arr.length;
    // for (let i = 0; i < len; i++) {
    //   for (let j = i + 1; j < len; j++) {
    //     if (arr[i] > arr[j]) {
    //       let ref = arr[i];
    //       arr[i] = arr[j];
    //       arr[j] = ref;
    //     }
    //   }
    // }
    return arr[arr.length - 1];
  };
  console.log(findMax([5, 35, 27, 90, 55]));
  console.log(findMax([-5, -35, -27]));
  console.log(findMax([5]));

  // find factorial n! n*n-1*n-2..........

  const findFactorial = (num) => {
    let fact = 1;
    for (let index = 1; index <= num; index++) {
      fact = fact * index;
    }
    return fact;
  };

  console.log(findFactorial(10));
  console.log(findFactorial(4));
  console.log(findFactorial(5));

  // find avereage of all numbers from array..........

  const calculateAverage = (arr) => {
    // method 1
    // let avg = 0;
    // let total = 0;
    // for (let index = 0; index < arr.length; index++) {
    //   total = total + arr[index];
    //   console.log("total---------",index,total);
    //   if (index === arr.length - 1) {
    //     avg = total / arr.length;
    //   }
    // }
    // return avg;
    // // method 2
    // let total = arr.reduce((acc, curr) => acc + curr, 0);
    // return total / arr.length;
  };

  console.log("avg", calculateAverage([10, 5, 8, 6]));
  console.log("avg", calculateAverage([1, 2, 3, 4]));

  // find array are equal or not length, order and element are same.
  const areEqual = (arr1, arr2) => {
    // method 1
    // if (arr1.length === arr2.length) {
    //   let result;
    //   for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //       if (i === j && arr1[i] === arr2[j]) {
    //         result = true
    //       }
    //       else {
    //         result = false
    //       }
    //     }
    //   }
    //   return result;
    // } else {
    //   return false;
    // }
    // method 2
    console.log("arr1.length", arr1.length);

    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((item, index) => item === arr2[index]);
  };

  console.log("areEqual", areEqual([1, 2, 3, 4], [1, 2, 3, 4]));
  console.log("areEqual", areEqual([], []));
  console.log("areEqual", areEqual([10, 5, 8, 6], [1, 2, 3, 4]));

  // sum of digits sumDegits(1234) = 10

  const sumDegits = (num) => {
    let arr = Array.from(String(num), Number);
    return arr.reduce((accu, curr) => (accu += curr), 0);
  };
  console.log("sumDegits", sumDegits(1234));
  console.log("sumDegits", sumDegits(1210235881));

  // remove duplicate element from arr
  const removeDuplicate = (num) => {
    let arr = [...new Set(num)];
    return arr;
  };
  console.log("removeDuplicate", removeDuplicate([1, 2, 3, 3, 5, 8, 9, 9]));
  console.log("removeDuplicate", removeDuplicate([252, 48, 21, 21, 9]));

  // find vowels in string a,e,i,o,u
  const findVowels = (str) => {
    let arr = Array.from(str.toLowerCase());
    console.log(
      "arr=========",
      arr.filter((letter) => "aeiou".includes(letter)).length
    );

    return str;
  };
  console.log("findVowels", findVowels("hellOo WOrld"));
  console.log("findVowels", findVowels("brrrp"));
  console.log("findVowels", findVowels("ThE quick BROun FOX"));

  // find sum of square of all elements [1,2,3] = 1*1+2*2+3*3 = 14
  const findSumSquare = (array) => {
    // method 1
    // let total = 0;
    // for (let index = 0; index < array.length; index++) {
    //   total = array[index] * array[index] + total;
    // }
    // method 2
    let total = array.reduce((accu, curr) => (accu = accu + curr * curr));
    return total;
  };
  console.log("findSumSquare", findSumSquare([1, 2, 3]));

  // find num is power of 2 like 8 = 2*2*2 = true and 7 false
  const powerOfTwo = (num) => {
    let op = false;
    for (let index = 0; index <= num - 1; index++) {
      if (2 ** index === num) {
        op = true;
      }
    }
    console.log(
      "============",
      num && !(num & (num - 1)),
      num - 1,
      num & (num - 1),
      !(num & (num - 1)),
      num && !(num & (num - 1))
    );

    return op;
  };
  console.log("powerOfTwo", powerOfTwo(8));
  console.log("powerOfTwo", powerOfTwo(7));

  // find findMinimum
  const findMinimum = (arr) => {
    let op;
    for (let i = 0; i < arr.len; i++) {
      for (let j = i + 1; j < arr.len; j++) {
        if (arr[i] > arr[j]) {
          let ref = arr[i];
          arr[i] = arr[j];
          arr[j] = ref;
        }
      }
    }
    return arr[0];
  };
  console.log("findMinimum", findMinimum([1, 8, 3, 9]));
  console.log("findMinimum", findMinimum([-5, -9, 0, 9, 55]));

  // find argument is upper case or not
  const isUppercase = (str) => {
    return str === str.toUpperCase();
  };
  console.log("isUppercase", isUppercase("h"));
  console.log("isUppercase", isUppercase("B"));

  // Check given string sentance start with given word
  const isStartwith = (str, startsWith) => {
    let data = str.split(" ");
    console.log("data", data);

    return data[0] === startsWith;
  };
  console.log("isStartwith", isStartwith("hello world", "hello"));
  console.log("isStartwith", isStartwith("By world", "world"));

  // return a reverse string without inbuilt methods
  const reverseString = (str) => {
    // console.log("data", str.split("").reverse().join(""));

    let rstr = "";
    for (let index = str.length - 1; index >= 0; index--) {
      rstr = rstr + str[index];
    }
    return rstr;
  };
  console.log("reverseString", reverseString("hello"));
  console.log("reverseString", reverseString("world"));

  // Find MEAN value of all elements from array
  const findAverage = (arr) => {
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
      total = total + arr[index];
    }
    return total / arr.length;
  };
  console.log("findAverage", findAverage([1, 2, 3, 4, 5]));
  console.log("findAverage", findAverage([10, 20, 30]));
  console.log("findAverage", findAverage([-1, 0, 1]));

  // Find Median value of all elements from array
  const findMedian = (arr) => {
    let sortedArr = arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    console.log("sortedArr", sortedArr, mid);

    if (arr.length % 2 === 0) {
      return (arr[mid] + arr[mid - 1]) / 2;
    } else {
      return arr[mid];
    }

    // return total / arr.length;
  };
  console.log("findMedian", findMedian([1, 9, 7, 4, 5]));
  console.log("findMedian", findMedian([10, 20, 20, 30]));
  console.log("findMedian", findMedian([-1, 0, 1]));

  // Find Median value of all elements from array
  const findOccuranceOfElement = (arr) => {
    let count = {};
    for (let index = 0; index < arr.length; index++) {
      count[arr[index]] = (count[arr[index]] || 0) + 1;
    }
    return count;
  };
  console.log(
    "findOccuranceOfElement",
    findOccuranceOfElement([1, 9, 9, 7, 4, 4, 5])
  );
  console.log(
    "findOccuranceOfElement",
    findOccuranceOfElement([10, 20, 20, 30])
  );

    // findFactorialUsingRecursion
    const findFactorialUsingRecursion = (num) => {
      if (num ===1) {
        return 1
      }else {
        return num * findFactorialUsingRecursion(num-1)
      }
    };
    console.log(
      "findFactorialUsingRecursion",
      findFactorialUsingRecursion(5)
    );

  const starSquare = (n) => {
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // if (i === j || i > j || i < j) {
        string += "*";
        // }
      }
      string += "\n";
    }
    return string;
  };

  console.log(starSquare(5));

  const hollowSquare = (n) => {
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
          string += "*";
        } else {
          if (j === 0 || j === n - 1) {
            string += "*";
          } else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
    return string;
  };

  console.log(hollowSquare(5));

  const triangle = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        string += "*";
      }
      string += "\n";
    }
    return string;
  };

  console.log(triangle(5));

  const reverseTriangle = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j <= n - i; j++) {
        string += "*";
      }
      string += "\n";
    }
    return string;
  };

  console.log(reverseTriangle(10));

  const numberTriangle = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        if (i === j) {
          string += i;
        } else {
          string += j;
        }
      }
      string += "\n";
    }
    return string;
  };

  console.log(numberTriangle(5));

  const twoJointTriangle = (n) => {
    let string = "";
    for (let i = 0; i < 2 * n; i++) {
      let c = i > n ? 2 * n - i : i;
      for (let j = 0; j < c; j++) {
        string += "*";
      }
      string += "\n";
    }
    return string;
  };

  console.log(twoJointTriangle(4));

  const downRightTriangle = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (j < i) {
          string += " ";
        } else {
          string += "*";
        }
      }
      string += "\n";
    }
    return string;
  };

  console.log(downRightTriangle(5));

  const downLeftTriangleReverse = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j <= n - i; j++) {
        string += "*";
      }
      string += "\n";
    }
    return string;
  };

  console.log(downLeftTriangleReverse(5));

  const downRightTriangleReverse = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (j < i) {
          string += "*";
        } else {
          string += " ";
        }
      }
      string += "\n";
    }
    return string;
  };

  console.log(downRightTriangleReverse(5));

  const triangleWithNumber = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let index = 0; index < n - i; index++) {
        string += " ";
      }
      for (let j = i; j >= 1; j--) {
        string += j;
      }
      for (let j = 2; j <= i; j++) {
        string += j;
      }
      string += "\n";
    }
    return string;
  };

  console.log(triangleWithNumber(5));

  return <div>ArrayMethods</div>;
}
