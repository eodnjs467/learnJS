const controller = new AbortController();
const signal = controller.signal;
const url = 'naver.com';

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector('#abort');

downloadBtn.addEventListener('click', async () => {
  console.log('click');
  try {
    const response = await fetch(url, {signal});
    console.log(response.status);
    const resJson = response.json();
    console.log(resJson);
  } catch (err) {
    console.log(err.message);
  }
});

abortBtn.addEventListener('click', () => {
  controller.abort();
  console.log('중단');
});
