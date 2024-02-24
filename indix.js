const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function startDragging(e) {
  isDragging = true;
  startPos = e.clientX || e.touches[0].clientX;
  slider.style.transition = 'none';
  prevTranslate = currentTranslate;
}

function stopDragging() {
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentTranslate !== 0) {
    currentTranslate += slider.offsetWidth;
  }
  if (movedBy > 100 && currentTranslate !== -(slider.offsetWidth * (slider.children.length - 1))) {
    currentTranslate -= slider.offsetWidth;
  }
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function dragging(e) {
  if (isDragging) {
    const currentPosition = e.clientX || e.touches[0].clientX;
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
}

slider.addEventListener('mousedown', startDragging);
slider.addEventListener('touchstart', startDragging);
slider.addEventListener('mouseup', stopDragging);
slider.addEventListener('touchend', stopDragging);
slider.addEventListener('mouseleave', stopDragging);
slider.addEventListener('mousemove', dragging);
slider.addEventListener('touchmove', dragging);