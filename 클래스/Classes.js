// 클래스
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
// 인스턴스와 정적속성 사용해보기
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
// console.log(p1.displayName);
// console.log(Point.displayName);


// 프로토 타입 및 정적 메서드를 사용한 this바인딩
class Animal {
  speak(){
    return this;
  }
  static eat(){
    return this;
  }
}

let obj = new Animal();
// console.log(obj.speak());
let speak = obj.speak;
// console.log(speak());
let eat = Animal.eat();
// console.log(eat);

function Animal2(){
  function speak(){
    return this;
  }
}

Animal2.eat = function () {
  return this;
};
// console.log(Animal2.speak());
// console.log(Animal.eat());

function Animal3() { }
Animal.prototype.speak = function() { return this; }
Animal.eat = function () { return this; }

let obj2 = new Animal3();
let speak2 = obj2.speak;
// speak2();
// console.log(speak2);
let eat2 = Animal3.eat;
// eat2();


//인스턴스 속성
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
// 프로토토입 데이터 속성과 정적 속성(클래스 사이드)
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
const r = new Rectangle(30, 60);

// console.log(r);
// 함수에 있어서 클로저로 정보은닉을 할 피요가 없어졌네요? 임의적으로 private로 만들어쓰는 return 방식을 .. 할 필여가 업노

// 클래스 상속
function Animal2 (name) {
  this.name = name;
}

Animal2.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
}

class Dog2 extends Animal2 {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d2 = new Dog2('Mitzie');
d2.speak(); // Mitzie barks.

// 유사한 메서드의 경우, 자식의 메서드가 부모의 메서드보다 우선합니다

// 크래스  확장장
const Animal4 = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

class Dog4 {
  constructor(name) {
    this.name = name;
  }
}

// 이 작업을 수행하지 않으면 speak를 호출할 때 TypeError가 발생합니다
Object.setPrototypeOf(Dog4.prototype, Animal4);

let d4 = new Dog4('Mitzie');
d4.speak(); // Mitzie makes a noise.
