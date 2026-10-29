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

var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 4) Focus Reveal: split the hero heading into words, then move a frame across them, un-blurring each one.
var h1 = document.querySelector(".hero .title");
if (h1 && !reduceMotion) {
  var walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT);
  var textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(function (node) {
    var frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach(function (part) {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
      var w = document.createElement("span"); w.className = "fr-w"; w.textContent = part; frag.appendChild(w);
    });
    node.parentNode.replaceChild(frag, node);
  });
  var words = h1.querySelectorAll(".fr-w");
  var frame = document.createElement("span");
  frame.className = "fr-frame"; frame.setAttribute("aria-hidden", "true");
  h1.classList.add("fr"); h1.appendChild(frame);
  var i = 0;
  var step = function () {
    if (i >= words.length) { setTimeout(function () { frame.classList.add("done"); }, 250); return; }
    var w = words[i], r = w.getBoundingClientRect(), p = h1.getBoundingClientRect();
    frame.style.width = (r.width + 16) + "px";
    frame.style.height = (r.height + 6) + "px";
    frame.style.transform = "translate(" + (r.left - p.left - 8) + "px," + (r.top - p.top - 3) + "px)";
    frame.classList.add("on");
    setTimeout(function () { w.classList.add("in"); }, 160);
    i++; setTimeout(step, 340);
  };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(function () { setTimeout(step, 250); });
}

// 5) Send Hello -> WhatsApp: open WhatsApp with the typed text; the text lifts off and a paper plane flies away.
// Without JS the form submits to wa.me?text=... on its own.
var hello = document.querySelector(".hello");
if (hello) {
  var input = hello.querySelector("input"), err = hello.querySelector(".hello-err"), helloStatus = hello.querySelector(".hello-status");
  input.addEventListener("input", function () { hello.classList.remove("err"); err.hidden = true; input.removeAttribute("aria-invalid"); });
  hello.addEventListener("submit", function (e) {
    e.preventDefault();
    var msg = input.value.trim();
    if (!msg) { hello.classList.add("err"); err.hidden = false; input.setAttribute("aria-invalid", "true"); input.focus(); return; }
    window.open("https://wa.me/919372448675?text=" + encodeURIComponent(msg), "_blank", "noopener");
    helloStatus.textContent = helloStatus.getAttribute("data-msg");
    var row = hello.querySelector(".hello-row");
    if (!reduceMotion) {
      var fly = document.createElement("span"); fly.className = "fly-text"; fly.textContent = msg; fly.setAttribute("aria-hidden", "true");
      var plane = hello.querySelector(".send-txt svg").cloneNode(true); plane.setAttribute("class", "plane");
      row.appendChild(fly); row.appendChild(plane);
      hello.classList.add("sending");
    }
    hello.classList.add("sent");
    setTimeout(function () {
      hello.classList.remove("sending", "sent");
      row.querySelectorAll(".fly-text, .plane").forEach(function (el) { el.remove(); });
      input.value = ""; helloStatus.textContent = "";
    }, 2600);
  });
}
