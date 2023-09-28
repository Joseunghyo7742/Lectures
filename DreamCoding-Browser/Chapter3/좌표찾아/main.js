const coordinate = document.querySelector('.coordinate');
const img = document.querySelector('img');
const xLine = document.querySelector('.line-h');
const yLine = document.querySelector('.line-v');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  coordinate.innerHTML = `(${x}px, ${y},px)`;
  img.style.top = `${y}px`;
  img.style.left = `${x}px`;
  coordinate.style.top = `${y}px`;
  coordinate.style.left = `${x}px`;
  xLine.style.top = `${y}px`;
  yLine.style.left = `${x}px`;
});
