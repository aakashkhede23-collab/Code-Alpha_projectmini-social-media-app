<script>
const videos = document.querySelectorAll(".reelVideo");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.play();
    } else {
      entry.target.pause();
      entry.target.currentTime = 0;
    }
  });
},{ threshold: 0.75 });

videos.forEach(video => observer.observe(video));
</script>
