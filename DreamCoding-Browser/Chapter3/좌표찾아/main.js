const coordinate = document.querySelector('.coordinate');
const img = document.querySelector('img');
const xLine = document.querySelector('.line-h');
const yLine = document.querySelector('.line-v');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  coordinate.innerHTML = `(${x}px, ${y},px)`;
  img.style.top = `${y - img.clientHeight / 2-2}px`;
  img.style.left = `${x - img.clientWidth / 2-8}px`;
  coordinate.style.top = `${y - 60}px`;
  coordinate.style.left = `${x}px`;
  xLine.style.top = `${y}px`;
  yLine.style.left = `${x}px`;
});
