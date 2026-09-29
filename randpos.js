document.addEventListener("DOMContentLoaded", () => {
  const w = document.documentElement.clientWidth - 100;
  const h = document.documentElement.clientHeight - 100;

  const gifs = Array.from(document.querySelectorAll(".gif"));

  gifs.forEach((g) => {
    g.style.right = `${Math.random() * w}px`;
    g.style.top = `${Math.random() * h}px`;
    g.style.transform = `rotate(${Math.random() * 180 - 90}deg) scale(${Math.random() * 1.2 + 0.6})`;
  });
});
