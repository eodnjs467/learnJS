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
const $searchBar = document.querySelector('.search-bar');

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


const dummyData = [
  {id: 1, content: '개발자'},
  {id: 2, content: '프론트엔드'},
  {id: 3, content: '백엔드'},
  {id: 4, content: '프론트1'},
  {id: 5, content: '프론트2'},
  {id: 6, content: '프론3'},
  {id: 7, content: '프4'},
  {id: 8, content: 'ㅍ'},
  {id: 9, content: '프린이'},
  {id: 10, content: '백린이'},
  {id: 11, content: '백엔드'},
  {id: 12, content: '백'},
  {id: 13, content: '다운타운'},
  {id: 14, content: '애플'},
  {id: 15, content: '심 - 디셈버'},
  {id: 16, content: '퀸카 - (여자)아이들'},
  {id: 17, content: '소녀시대'},
]
let searchTimer = null;

$searchBox = document.querySelector('.word-list');
const inputSearch = (e) => {
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    const filterData = dummyData.filter((v, i) => {
      return v.content.match(e.target.value) ? v.content : null;
    });
    if(e.target.value.trim() === '') {
      $searchBox.innerHTML = "";
      return;
    }
    if ($searchBox.hasChildNodes()) $searchBox.innerHTML = "";
    filterData.forEach((v, i) => {
      let li = document.createElement("li");
      li.innerText = v.content;
      $searchBox.appendChild(li);
    });
    console.log(filterData);
  }, 500);

}
$searchBar.addEventListener('input', inputSearch);

