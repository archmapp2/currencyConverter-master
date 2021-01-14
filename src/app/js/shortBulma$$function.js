// shortBulma$$.js

// ss: String, not selector
export function Id0(id) {
  return document.getElementById(id);
}
export function Id(id) {
  id = id.substring(0, 1) === "#" ? id.substring(1) : id;
  return document.getElementById(id);
}

// selector
export function q(sel) {
  document.querySelector(sel);
}
export function qAll(sel) {
  document.querySelectorAll(sel);
}
export function oq(o, sel) {
  o.querySelector(sel);
}
export function qoAll(o, sel) {
  o.querySelectorAll(sel);
}

export function de(f) {
  document.addEventListener("DOMContentLoaded", f);
}

export function oe(o, f, evNa = "click") {
  o.addEventListener(evNa, f);
}

export function qoe(sel, f, evNa = "click") {
  $$oe($$q(sel), f, evNa);
}

export function dqoe(sel, f) {
  $$de(() => $$qe(sel, f));
}

export function qecL(sel, selT, cN = "is-active", mN = "toggle") {
  $$qe(sel, (e) => {
    e.stopPropagation();
    $$qcL(sel, cN, mN);
    $$qcL(selT, cN, mN);
  });
}

export function qe(sel, f, evNa = "click") {
  $$oe($$q(sel), f, evNa);
}

export function doe(o, f) {
  $$de(() => $$oe(o, f));
}

export function qAe(sel, f) {
  $$qAll(sel).forEach((o) => $$oe(o, f));
}

export function qcL(sel, cN = "is-active", mN = "toggle") {
  $$q(sel).classList[mN](cN);
}

export function ocL(o, cN = "is-active", mN = "toggle") {
  o.classList[mN](cN);
}

export function DF() {
  new DocumentFragment();
}

export function oes(o, f) {
  o.addEventListener("submit", f);
}

//  <template> 要素は、そのHTMLTemplateElement.contentプロパティにDocumentFragmentを含みます。
export function tC(id) {
  return $$Id(id).content;
}

export function tCc(id, b = true) {
  return document.importNode($$tC(id), b);
}

export function tCco(o, b = true) {
  return document.importNode(o, b);
}

export function mkTemplate(id, v) {
  const template = document.createElement("template");
  template.id = id;
  template.innerHTML = v;
  $$q("body").appendChild(template);
}

export function da_t(id) {
  document.body.appendChild($$tCc(id));
}
export function oa_t(o, id) {
  o.appendChild($$tCc(id));
}

export function ogA(o, ss) {
  o.getAttribute("data-" + ss);
}
export function ogD(o, ss) {
  o.dataset[ss];
}
export function qogA(sel, ss) {
  $$q(sel).getAttribute("data-" + ss);
}
export function qogD(sel, ss) {
  $$q(sel).dataset[ss];
}

export function na(ss) {
  document.getElementsByName(ss);
} // form radio

export function qcLm(
  sel,
  { selT, cN = "is-active" },
  mN = "toggle",
  stopP = true
) {
  $$ocLm($$q(sel), { trgt: $$q(selT) });
}

export function ocLm(
  o,
  { trgt, cN = "is-active" },
  mN = "toggle",
  stopP = true
) {
  $$oe(o, (e) => {
    if (stopP) e.stopPropagation();
    trgt.classList[mN](cN);
  });
}

export function oAcLm(
  o,
  { trgts, cN = "is-active" }, // trgts: array
  mN = "toggle",
  stopP = true
) {
  $$oe(o, (e) => {
    if (stopP) e.stopPropagation();
    trgts.forEach((t) => t.classList[mN](cN));
  });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function bulmaMenu(ss, ssT) {
  $$qecL(ss, ssT);
  $$dqoe("body", (e) => {
    e.stopPropagation();
    const b = $$q(ss);
    if (b.classList.contains("is-active")) {
      $$ocL(b);
      $$qcL(ssT);
    }
  });
}

export function bulmaTabs(ssTabs, ssContent) {
  const tabs = $$qAll(ssTabs);
  const boxes = $$qAll(ssContent);

  tabs.forEach((tab) => {
    const target = $$Id(tab.dataset.target);

    $$oe(tab, () => {
      $$bulmaTab(tabs, tab);
      $$bulmaTabR(boxes, target, "is-hidden");
    });
  });
}

// $$bulmaTabs('.tabs li', '#tab-content > div');

export function bulmaTab(items, target, cN = "is-active") {
  items.forEach((item) => {
    if (item === target) {
      $$ocL(item, cN, "add");
    } else {
      $$ocL(item, cN, "remove");
    }
  });
}

export function bulmaTabR(items, target, cN = "is-active") {
  items.forEach((item) => {
    if (item === target) {
      $$ocL(item, cN, "remove");
    } else {
      $$ocL(item, cN, "add");
    }
  });
}

export function bulmaModal(sel, selB, selM) {
  $$qcLm(sel, { selT: selM });
  $$qcLm(selB, { selT: selM });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Bulmaとは直接関係ありません。
export function codeS(id) {
  // クリックしたテキストをすべて選択
  const pre1 = $$Id(id);
  if (!pre1) return;

  $$oe(pre1, () => {
    document
      .getSelection()
      .setBaseAndExtent(pre1, 0, pre1, pre1.childNodes.length);
    // console.log('pre1.childNodes.length', pre1.childNodes.length);
  });
}
