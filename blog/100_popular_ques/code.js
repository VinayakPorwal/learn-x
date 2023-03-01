import React from "react";

// Find a Sallest element in array

export function Q1() {
  var arr = [2, 5, 6, 1, 0];
  var temp = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (temp >= arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
}

// Find a Largest element in array

export function Q2() {
  var arr = [2, 5, 6, 1, 0];
  var temp = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (temp <= arr[i]) {
      temp = arr[i];
    }
  }
  return temp;
}

// Find a Second Largest and second smallest element in array

export function Q3() {
  var arr = [2, 5, 6, 1, 0];
  var secondSmall = 0;
  var secondLarge = 0;
  var smallest = 0;
  var largest = 0;

  // to find smallest one
  for (let i = 0; i <= arr.length; i++) {
    if (smallest >= arr[i]) {
      smallest = arr[i];
    }
  }
  // to find largest one
  for (let i = 0; i <= arr.length; i++) {
    if (largest <= arr[i]) {
      largest = arr[i];
    }
  }

  // to find Second Largest and second smallest
  for (let i = 0; i <= arr.length; i++) {
    if ((secondLarge < arr[i]) & (arr[i] != largest)) {
      secondLarge = arr[i];
    }
    if ((secondSmall > arr[i]) & (arr[i] != smallest)) {
      secondSmall = arr[i];
    }
  }

  return "Second large: " + secondLarge + " and Second small: " + secondSmall;
}

// Reverse a given array

export function Q4() {
  var arr = [2, 5, 6, 1, 0];
  var newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return ""+newArr;
}

// Count frequency of each element in an array

export function Q5() {
  var arr = [2, 5, 6, 1, 1, 0];
  var freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }

  return Object.keys(freq) + " and " + Object.values(freq);
}

// Rearrange array in increasing-decreasing order
// bubble sort algorithm
export function Q6() {
  var arr = [2, 5, 6, 1, 1, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return ""+arr;
}

// Calculate sum of the elements of the array

export function Q7() {
  var arr = [2, 5, 6, 1, 1, 0];
  var ans = 0;
  arr.forEach(function (i) {
    ans += i;
  });

  return ans;
}

// Rotate array by K elements – Block Swap Algorithm

export function Q8() {
  var arr = [2, 5, 6, 1, 1, 0];
  var k = 2;
  var temp = arr.slice(k, arr.length);
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]);
  }

  return ""+temp;
}

// Average of all elements in an array

export function Q9() {
  var arr = [2, 5, 6, 1, 1, 0];
  var ans = 0;
  arr.forEach(function (i) {
    ans += i;
  });

  return ans / arr.length;
}

// Find the median of the given array

export function Q10() {
  var arr = [2, 5, 6, 1, 1, 0];
  var ans = arr.sort();

  var middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 == 0) {
    var temp = (ans[middleIndex] + ans[middleIndex - 1]) / 2;
  } else {
    var temp = ans[middleIndex];
  }

  return temp;
}

// Remove duplicates from a sorted array

export function Q11() {
  var arr = [0, 1, 1, 2, 5, 6];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 1);
    }
  }

  return ""+arr;
}

// Remove duplicates from a unsorted array

export function Q12() {
  var arr = [2, 1, 5, 6, 1, 0];

  return new Set(arr);
}

// Insert element in array

export function Q13() {
  var arr = [0, 1, 1, 2, 5, 6];
  var newElement = 7;
  var pos = 4;

  //at postion
  for (let i = 0; i < arr.length - 1; i++) {
    if (i == pos) {
      arr.splice(i, 0, newElement);
    }
  }

  // at end
  arr.push(newElement);

  //at begin
  arr.unshift(newElement);

  return ""+arr;
}

// Find all repeat element in array

export function Q14() {
  var arr = [2, 5, 6, 2, 1, 1, 0];
  var freq = {};
  var ans = [];
  arr.forEach(function (i) {
    if (i in freq) {
      freq[i]++;
    } else {
      freq[i] = 1;
    }
  });

  for (const [element, count] of Object.entries(freq)) {
    console.log(`${element}: ${count}`);

    if (count > 1) {
      ans.push(element);
    }
  }

  return ""+ans;
}

// Find all - non repeat element in array

export function Q15() {
  var arr = [2, 5, 6, 2, 1, 1, 0];
  var freq = {};
  var ans = [];
  arr.forEach(function (i) {
    if (i in freq) {
      freq[i]++;
    } else {
      freq[i] = 1;
    }
  });

  for (const [element, count] of Object.entries(freq)) {
    console.log(`${element}: ${count}`);

    if (count == 1) {
      ans.push(element);
    }
  }

  return ""+ans;
}

// Find all symmetric pairs in array
