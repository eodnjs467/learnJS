const renderBox = (start, end) => {
  for (let i = start; i < start + end; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'dummy-box');
    div.style.height = '300px';
    div.style.lineHeight = '300px';
    div.style.border = '1px';
    div.style.borderColor = 'black';
    div.style.borderStyle = 'solid';
    div.innerHTML = 'dummyBox' + i;
    document.querySelector('.data-list').appendChild(div);
  }
}
renderBox(0, 10);
const loadMoreBox = (moreCnt) => {
  let dummyBoxCnt = document.querySelectorAll('.dummy-box').length;
  renderBox(dummyBoxCnt, moreCnt);
}
const ioCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      setTimeout(() => {
        loadMoreBox(10);
        observeLastItem(io, document.querySelectorAll('.dummy-box'));
      }, 200);
    }
  });
};

const observeLastItem = (io, items) => {
  const lastItem = items[items.length - 1];
  io.observe(lastItem);
};
const io = new IntersectionObserver(ioCallback, {threshold: 0.7});링
observeLastItem(io, document.querySelectorAll('.dummy-box'));
