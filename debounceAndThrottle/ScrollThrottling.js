const dummyBox = Array(100).fill().map((v, i) => 'dummy box' + i);
const renderDummyBox = (v) => {
  const div = document.createElement('div');
  div.style.height = '300px';
  div.style.lineHeight = '300px';
  div.innerText = v;
  document.querySelector('.data-list').appendChild(div);
}

for(let i = 0; i < 10; i++){
  renderDummyBox(dummyBox[i]);
}


// TODO: Throttling  적용해서 특정 위치보다 스크롤이 내려가면 인덱스 몇 번 부터 몇 번까지 불러오기 이런거 length를 이용하든 해보자!
// dummyBox.forEach((v, i) => {
//   const div = document.createElement('div');
//   div.style.height = '300px';
//   div.style.lineHeight = '300px';
//   div.innerText = v;
//   document.querySelector('.data-list').appendChild(div);
// });
