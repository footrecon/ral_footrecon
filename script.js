const scrollVideos = document.querySelectorAll(".scroll-video");

const playVideo = (video) => {
  const playPromise = video.play();
  if (playPromise) {
    playPromise.catch(() => {
      // Some browsers defer autoplay until the user interacts with the page.
    });
  }
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        playVideo(video);
      } else {
        video.pause();
      }
    });
  },
  {
    root: null,
    threshold: 0.45,
  },
);

scrollVideos.forEach((video) => observer.observe(video));

document.querySelectorAll(".hover-video").forEach((container) => {
  const video = container.querySelector("video");
  if (!video) return;

  container.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    playVideo(video);
  });

  container.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
