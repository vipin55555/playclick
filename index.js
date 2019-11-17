window.addEventListener('load', () => {

   const sounds = document.querySelectorAll('.sound');
   const blocks = document.querySelectorAll('.blocks div');
   const bubbleDiv = document.querySelector('.bubble-div');
   const colors = ['red', 'orange', 'black', 'blue', 'pink', 'green'];

   console.log("sounds =>", sounds);
   console.log("blocks =>",blocks);

   blocks.forEach((block, index) => {
      block.addEventListener('click', function () {
         sounds[index].currentTime = 0;
         sounds[index].play();
         createBubbles(index);
      })
   });

   //create bubble for every time tapping on block
   const createBubbles =  (index) => {
      const bubble = document.createElement('div');
      bubbleDiv.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = 'jump 1s ease';
      bubble.addEventListener('animationend', () => {
         bubbleDiv.removeChild(bubble);
      })
   };

});
