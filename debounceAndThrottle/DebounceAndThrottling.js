let dClickCount = 0;
let dCallbackCount = 0;
let debounceTimer = null;

let tClickCount = 0;
let tCallbackCount = 0;
let throttleTimer = null;

const $dClickCount = document.querySelector('.debounce-box span:first-child');
const $dCallbackCount = document.querySelector('.debounce-box span:last-child');
const $tClickCount = document.querySelector('.throttle-box span:first-child');
const $tCallbackCount = document.querySelector('.throttle-box span:last-child');

document.getElementById('debounce-add-button').addEventListener('click', function(){
  if(debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    dCallbackCount++;
    $dCallbackCount.innerText = dCallbackCount;
  }, 500);

  dClickCount++;
  $dClickCount.innerText = dClickCount;
});

document.getElementById('throttle-add-button').addEventListener('click', function(){
  if(!throttleTimer){
    throttleTimer = setTimeout(() => {
      tCallbackCount++;
      $tCallbackCount.innerText = tCallbackCount;
      throttleTimer = null;
    }, 500);
  }

  tClickCount++;
  $tClickCount.innerText = tClickCount;
});
