//Click button move side
const productContainers = [...document.querySelectorAll('.container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})

//Video card
const VideoCards = [...document.querySelectorAll(".video-card")];

VideoCards.forEach((item) => {
  item.addEventListener('mouseover', () => {
    let Video = item.children[1];
    Video.play()
  });
  item.addEventListener('mouseleave', () => {
    let Video = item.children[1];;
    Video.pause();
  }); 
});