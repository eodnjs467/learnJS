let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('성공'), 2000);
});

myFirstPromise.then((successMessage) => {
  console.log(successMessage);
});

let counter = 0;
const PromiseTest = function() {
  let counter = 0;
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      counter++;
      resolve('현재 counter: ' + counter);
    }, 1000);
  });
  promise1.then(function (res) {
    console.log('promise1 결과 \n', res);
  })

}
PromiseTest();
