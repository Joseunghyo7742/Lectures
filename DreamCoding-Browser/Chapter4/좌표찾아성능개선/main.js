const coordinate = document.querySelector('.coordinate');
const img = document.querySelector('img');

const xLine = document.querySelector('.line-h');
const yLine = document.querySelector('.line-v');

addEventListener('load',()=>{
//리소스가 다 준비된 load상태여야 getBoundingRect값이 정확하다.
  const imgRect= img.getBoundingClientRect();
  const imgHalfWidth= imgRect.width/2;
  const imgHalfHeight=imgRect.height/2;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    coordinate.innerHTML = `(${x}px, ${y},px)`;
    img.style.transform = `translate(${x-imgHalfWidth}px,${y-imgHalfHeight}px)`;
    coordinate.style.transform = `translate(${x}px,${y}px)`;
    xLine.style.transform = `translateY(${y}px)`;
    yLine.style.transform = `translateX(${x}px)`;
  });
  
})