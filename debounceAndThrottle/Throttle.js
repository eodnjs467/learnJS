function Throttle () {
  let throttled = 0;
  let clicked = 0;

  let timer = null;

  const button = document.querySelector('.throttle-button');
  const clickLabel = document.querySelector('.throttle-box p :first-child');
  const throttledLabel = document.querySelector('.throttle-box p :last-child');

  const throttle = () => {
    clicked++;
    clickLabel.innerText = clicked;
    if (timer) return;
    timer = setTimeout(() => {
      throttled++;
      throttledLabel.innerText = throttled;
      timer = null;
    }, 500);
  }
  button.addEventListener('click', throttle);
}
Throttle();
