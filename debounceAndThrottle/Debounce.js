function Debounce() {
  let debounceCounter = 0;
  let buttonCounter = 0;

  let timer = null;

  const button = document.querySelector('.debounce-button');
  const pressedBtnCnt = document.querySelector('.debounce-box p :first-child');
  const occurDebounceCnt = document.querySelector('.debounce-box p :last-child');

  const debounce = () => {
    buttonCounter++;
    pressedBtnCnt.innerText = buttonCounter;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      debounceCounter++;
      occurDebounceCnt.innerText = debounceCounter;
    }, 300);
  }
  button.addEventListener('click', debounce);
}
Debounce();
