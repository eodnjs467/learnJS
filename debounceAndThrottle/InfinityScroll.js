const productList = document.querySelector('.product-list');
let products = document.querySelectorAll('.product');

const renderListItem = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'product');
  div.innerText = '메로나 아이스크림';
  productList.appendChild(div);
}

const loadMore = (param) => {
  for (let i = products.length; i < products.length + param; i++) {
    renderListItem();
  }
};

if (!products.length) renderListItem();

const ioCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setTimeout(() => {
        loadMore(10);
        products = document.querySelectorAll('.product');
        observeLastItem(io, products);
      }, 200);
    }
  });
};

const observeLastItem = (io, items) => {
  const lastItem = items[items.length -1];
  io.observe(lastItem);
}

const io = new IntersectionObserver(ioCallback, {threshold: 0.7});
observeLastItem(io, document.querySelectorAll('.product'));
