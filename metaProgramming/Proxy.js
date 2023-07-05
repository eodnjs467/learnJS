const target = {
  message1: 'hello',
  message2: 'everyone',
};
const handler = {};
// const proxy = new Proxy(target, handler);
// console.log(proxy.message2);
// proxy.message2 = 'Hi';
// console.log(proxy.message2);
// console.log(target.message2);
// console.log(proxy === target);

const handler2 = {
  get(target, prop, receiver){
    return 'world';
  }
};
const proxy2 = new Proxy(target, handler2);
// console.log(proxy2.message2);
// console.log(proxy);
// 함수를 사용한 proxy 만들어보기 this.name


// 폐기 가능한 프록시 객체
const targetObj = {
  name: 'bigOne',
  age: 28,
  introduce: 'Frontend Developer',
};
const targetObjHandler = {
  get(target, prop, receiver) {
    if(prop === "age"){
      return "개인정보 보호로인해 조회가 불가능합니다.";
    }
    if(prop === "introduce"){
      return "Frontend";
    }
    return Reflect.get(...arguments);
  }
}

// const {proxy3, revocable} = Proxy.revocable(targetObj, targetObjHandler);
// const {proxy, revoke} = Proxy.revocable(targetObj, targetObjHandler);
const revocable = Proxy.revocable(targetObj, targetObjHandler);
const { proxy, revoke } = revocable;
// console.log(revocable)
console.log('name: ' + proxy.name + ', age: ' + proxy.age + ', introduce: ' + proxy.introduce);
// console.log(proxy);
revoke();
console.log('proxy Yn? : ', proxy);
