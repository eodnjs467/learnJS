let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('성공'), 2000);
});

myFirstPromise.then((successMessage) => {
  console.log(successMessage);
});

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

const PromiseAllTest = () => {
  let counter = 0;
  const promise1 = new Promise((resolve, reject) => {
    resolve(counter++);
  });
  const promise2 = new Promise((resolve, reject) => {
    resolve(counter++);
  });
  const promise3 = Promise.resolve(counter++);
  const promise4 = Promise.reject("내 맘대로 거절! ");

  Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values);
  }).catch((error) => console.log(error));
}
PromiseAllTest();

const PromiseRaceTest = () => {
  let counter = 0;
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise1")
    }, 200)
  });
  const promise2 = new Promise((resolve, reject) => {
    resolve("promise2");
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise3");
    }, 300);
  });
  const promise4 = new Promise((resolve, reject) => {
    resolve('promise race fail');
  })

  Promise.race([promise1, promise2, promise3, promise4]).then((value) => console.log('promise race() : ', value));
}
PromiseRaceTest();
