let user = 'John Doe';
console.log(user);
const student = 'Liza';
console.log(student);
user = student; //'Liza'
console.log(student);

let test = 1;
test += 1;
test += '1'; //'21'
console.log(test);
test -= 1; //20
console.log(test);
test = !test; //false
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
