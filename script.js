// Reveal-on-scroll: adds .in to [data-reveal] elements once they enter the screen.
// Without JS (or with reduced motion) everything is simply visible.
document.documentElement.classList.add("js");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
} else {
  document.querySelectorAll("[data-reveal]").forEach(function (el) { el.classList.add("in"); });
}
