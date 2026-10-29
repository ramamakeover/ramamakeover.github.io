// 1) Reveal-on-scroll for [data-reveal]  2) header border on scroll  3) accessible mobile menu.
// Without JS everything is visible and the nav shows as a plain list.
document.documentElement.classList.add("js");

var revealEls = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add("in"); });
}

var header = document.querySelector(".site-header");
function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

var btn = document.querySelector(".menu-btn");
var nav = document.getElementById("site-nav");
var mq = window.matchMedia("(max-width: 959px)");
function setOpen(open) {
  btn.setAttribute("aria-expanded", String(open));
  nav.hidden = !open;
}
function syncToWidth() { if (mq.matches) setOpen(false); else nav.hidden = false; }
btn.addEventListener("click", function () { setOpen(btn.getAttribute("aria-expanded") !== "true"); });
nav.addEventListener("click", function (e) { if (e.target.closest("a") && mq.matches) setOpen(false); });
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { setOpen(false); btn.focus(); }
});
mq.addEventListener("change", syncToWidth);
syncToWidth();
