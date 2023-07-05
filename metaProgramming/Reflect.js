// 객체 내장메서드를 속성명으로 사용할 경우와  Reflect 를 사용했을 경우
const obj = { prop: 1, hasOwnProperty: 2 };
// obj.hasOwnProperty('prop');
// console.log(obj.hasOwnProperty);
// console.log(Object.prototype.hasOwnProperty.call(obj, 'prop'));

// Reflect.get, Reflect.set
const reflect = { name: 'bigOne' };
console.log(Reflect.get(reflect, 'name'));
const str = '';
// console.log(Reflect.get(str, 'name'));
// console.log(str['name']);

//Reflect
Reflect.set(reflect, 'age', 28);
console.log(reflect);
// Reflect.set(str, 'age', 28);
str['age'] = 28;
console.log(str);
