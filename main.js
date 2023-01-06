{
  let user = 'John Doe';
  console.log(user);
  const student = 'Liza';
  console.log(student);
  user = student; //'Liza'
  console.log(user);

  let test = 1;
  test += 1;
  test += '1'; //'21'
  console.log(test);
  test -= 1; //20
  console.log(test);
  test = !!test; //true
  console.log(test);

  const arr = [2, 3, 5, 8];
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  console.log(result);

  const array = [2, 5, 8, 15, 0, 6, 20, 3];
  let str = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5 && array[i] < 10) {
      str += array[i];
    }
  }
  console.log(str);

  const ar = [2, 5, 8, 15, 0, 6, 20, 3];
  let string = '';
  for (let i = 0; i < ar.length; i++) {
    const a = ar[i] % 2;
    if (a === 0) {
      string += ar[i];
    }
  }
  console.log(string);
}

///////////////////lesson-3///////////////////////////
console.log('lesson-3');

function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome('wow'));

function minOne(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(minOne(5, 3));

function min(a, b) {
  return a < b ? a : b;
}
console.log(min(5, 7));

function maxOne(a, y) {
  if (a > y) {
    return a;
  }
  return y;
}
console.log(maxOne(7, 9));

function max(a, y) {
  return a > y ? a : y;
}
console.log(max(11, 9));

function array(...arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      str += 'zero';
    } else if (arr[i] % 100 === 0) {
      const b = arr[i] / 100;
      str += b;
      str += 'zero';
      str += 'zero';
    } else if (arr[i] % 10 === 0) {
      const a = arr[i] / 10;
      str += a;
      str += 'zero';
    } else {
      str += arr[i];
    }
  }
  console.log(str);
}
array(0, 2, 4, 5, 10, 55, 60, 61, 70, 100);

function arrayTwo(...arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const str = '' + arr[i];
    for (let j = 0; j < str.length; j++) {
      result += str[j] === '0' ? 'zero' : str[j];
    }
  }
  console.log(result);
}
arrayTwo(0, 2, 4, 5, 10, 55, 60, 61, 70, 100);
