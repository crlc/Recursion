function range(start, end) {
  var array = [];
  
  if (start <= end) {
    array = (range(start, end - 1));
    array.push(end);
  }
  return array;
}

function sumRec(numbers) {
  var lastNum;
  
  if (numbers.length === 0) {
    return 0;
  }

  lastNum = numbers[numbers.length - 1];
  return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
}

var exponent1 = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return exponent(base, exp -1) * base;
  }
}

var exponent2 = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else if (exp % 2 === 0) {
    return exponent2(base, exp / 2) * exponent2(base, exp / 2);
  } else {
    return exponent2(base, (exp - 1) / 2) * exponent2(base, (exp - 1) / 2) * base;
  }
}

var fib = function (num) {
  var fibArray;
  
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0 ,1];
  } else {
    fibArray = fib(num - 1);
    fibArray.push(fibArray[fibArray.length -1] + fibArray[fibArray.length -2]);
    return fibArray;
  }
}

var bSearch = function(array, target) {
  var pivot = Math.floor(array.length / 2);
  var newArray;
  
  if (array[pivot] === target) {
    return pivot;
  } else if (array[pivot] < target) {
    newArray = array.slice(pivot + 1, array.length)
    return bSearch(newArray, target) + pivot + 1;
  } else if (array[pivot] > target) {
    newArray = array.slice(0, pivot);
    return bSearch(newArray, target);
  } else {
    return null;
  }
}

var makeChange = function (amount, coins) {
  var change, i;
  
  if (amount === 0) {
    return [];
  } else {
    for (i = 0; i < coins.length; i++) {
      if (amount >= coins[i]) {
        change = makeChange(amount - coins[i], coins);
        change.push(coins[i]);
        return change;
      }
    }
  }
}

var merge = function (arr1, arr2) {
  var result = [];
  
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

var mergeSort = function (array) {
  var pivot, half1, half2;
  
  if (array.length === 1) {
    return array;
  }

  pivot = Math.floor(array.length/2);
  half1 = mergeSort(array.slice(0, pivot));
  half2 = mergeSort(array.slice(pivot, array.length));

  return merge(half1, half2);
}

var subSet = function (array) {
  var subsets, sub, i, j;
  
  if (array.length === 0) {
    return [[]];
  } else {
    subsets = subSet(array.slice(0, -1));
    for (i = 0; i < array.length; i++) {
      for (j = i + 1; j < array.length + 1; j++) {
        sub = array.slice(i, j);
        if (subsets.indexOf(sub) === -1) {
          subsets.push(sub);
        }
      }
    }
    return subsets;
  }
}
