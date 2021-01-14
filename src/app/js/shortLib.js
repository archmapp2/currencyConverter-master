// shortLib.js extracted for Angular

// ss: String, not selector
export function Id0(ss) {
  return document.getElementById(ss);
}
export function Id(ss) {
  ss = ss.substring(0, 1) === "#" ? ss.substring(1) : ss;
  return document.getElementById(ss);
}

// selector
export function $$q(sel) {
  return document.querySelector(sel);
}
export function qAll(sel) {
  return document.querySelectorAll(sel);
}

export function $$ocL(o, ss = "is-active") {
  return o.classList.toggle(ss);
}

export function de(f) {
  return document.addEventListener("DOMContentLoaded", f);
}

export function oe(o, f) {
  o.addEventListener("click", f);
}

export function oes(o, f) {
  o.addEventListener("submit", f);
}

export function qe(ss, f) {
  q(ss).addEventListener("click", f);
}
