// script.js
window.addEventListener('load', ()=> {
  const bg = document.querySelector('.hero .bg');
  const scroll = document.querySelector('.scrollone');
  const fg = document.querySelector('.hero .fg');

  // 1) Fade in background
  setTimeout(()=> {
    bg.style.opacity = '1'
    scroll.style.transition = 'opacity 1s ease, transform 1s ease';
    scroll.style.opacity = '1';
    scroll.style.transform = 'translate(0%, -0%) scale(1)';
  }, 200);
  fg.style.transform = 'translate(0%, 5%) scale(1)';
  

  // 2) Fade+move in foreground
  setTimeout(()=>{
    fg.style.transition = 'opacity 1s ease, transform 1s ease';
    fg.style.opacity = '1';
    fg.style.transform = 'translate(0%, -0%) scale(1)';
  }, 1800);
  // After initial, breathe animation on fg img (already running via CSS)
});
