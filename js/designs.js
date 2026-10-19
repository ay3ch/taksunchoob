/* نمایش طرح‌ها، جستجو، فیلتر و بزرگ‌نمایی */
(() => {
  "use strict";
  const IMG_PATH = "images/designs/";
  const IMG_EXT = ".jpg";
  const grid = document.getElementById("designs");
  const chipsBox = document.getElementById("chips");
  const search = document.getElementById("search");
  const countEl = document.getElementById("count");
  const emptyEl = document.getElementById("empty");
  if (!grid || !chipsBox || !search || !countEl || !emptyEl || !Array.isArray(window.DESIGNS || DESIGNS)) {
    console.error("بخش طرح‌ها: عناصر صفحه یا داده‌های طرح‌ها پیدا نشدند.");
    return;
  }
  let activeCategory = "همه";
  const data = DESIGNS;
  const imgSrc = d => `${IMG_PATH}${encodeURIComponent(d.code)}${IMG_EXT}`;

  function attachFallback(img, d) {
    img.addEventListener("error", () => {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.style.background = d.color || "#e6e9e8";
      ph.textContent = d.code;
      img.replaceWith(ph);
    }, { once: true });
  }
  function makeImage(d, className) {
    const img = document.createElement("img");
    img.src = imgSrc(d);
    img.alt = `${d.code}`;
    img.loading = "lazy";
    if (className) img.className = className;
    attachFallback(img, d);
    return img;
  }
  function render() {
    const q = search.value.trim().toLocaleLowerCase();
    const list = data.filter(d =>
      (activeCategory === "همه" || d.category === activeCategory) &&
      (!q || String(d.code).toLocaleLowerCase().includes(q))
    );
    grid.replaceChildren();
    list.forEach((d, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "design";
      btn.style.setProperty("--i", Math.min(i, 24));
      const thumb = document.createElement("div"); thumb.className = "thumb";
      thumb.appendChild(makeImage(d));
      const brand = document.createElement("img");
      brand.className = "design-brand";
      brand.src = new URL("images/logo.png", document.baseURI).href;
      brand.alt = "تکسان چوب";
      brand.className = "design-brand";
      brand.decoding = "async";
      brand.addEventListener("error", () => {
        // If the logo asset fails on a host, show the brand name instead of a broken-image icon.
        const fallback = document.createElement("span");
        fallback.className = "design-brand-fallback";
        fallback.textContent = "تکسان چوب";
        brand.replaceWith(fallback);
      }, { once: true });
      thumb.appendChild(brand);
      const info = document.createElement("div"); info.className = "info";
      const code = document.createElement("div"); code.className = "code"; code.textContent = d.code;
      info.append(code); btn.append(thumb, info);
      btn.addEventListener("click", () => openBox(d));
      grid.appendChild(btn);
    });
    countEl.textContent = `${list.length.toLocaleString("fa-IR")} طرح`;
    emptyEl.hidden = list.length > 0;
  }
  function buildChips() {
    const cats = ["همه", "چوبی", "سنگی", "ساده", "خالدار", "بافت‌دار", "طرح‌دار"];
    chipsBox.replaceChildren();
    cats.forEach(c => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (c === activeCategory ? " active" : "");
      b.textContent = c;
      b.addEventListener("click", () => { activeCategory = c; buildChips(); render(); });
      chipsBox.appendChild(b);
    });
  }

  const lb = document.getElementById("lightbox");
  const holder = document.getElementById("lb-img");
  const zoomLabel = document.createElement("span");
  zoomLabel.className = "zoom-level";
  zoomLabel.textContent = "100%";
  const zoomOut = document.createElement("button");
  const zoomIn = document.createElement("button");
  const zoomReset = document.createElement("button");
  [zoomOut, zoomIn, zoomReset].forEach(b => { b.type = "button"; b.className = "zoom-btn"; });
  zoomOut.textContent = "−"; zoomIn.textContent = "+"; zoomReset.textContent = "بازنشانی زوم";
  zoomIn.setAttribute("aria-label", "بزرگ‌نمایی");
  zoomOut.setAttribute("aria-label", "کوچک‌نمایی");
  const cap = lb.querySelector(".cap");
  const zoomControls = document.createElement("div");
  zoomControls.className = "zoom-controls";
  zoomControls.append(zoomOut, zoomLabel, zoomIn, zoomReset);
  cap.insertBefore(zoomControls, cap.querySelector("#lb-close"));
  let zoom = 1;
  function setZoom(next) {
    zoom = Math.max(1, Math.min(4, next));
    const image = holder.querySelector("img");
    if (image) image.style.transform = `scale(${zoom})`;
    zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
    zoomOut.disabled = zoom <= 1; zoomIn.disabled = zoom >= 4;
  }
  function openBox(d) {
    holder.replaceChildren(makeImage(d, "zoom-image"));
    document.getElementById("lb-code").textContent = d.code;
    const lbName = document.getElementById("lb-name"); if (lbName) lbName.textContent = "";
    setZoom(1);
    lb.classList.add("open");
    document.body.classList.add("lightbox-open");
  }
  function closeBox() {
    lb.classList.remove("open");
    document.body.classList.remove("lightbox-open");
    setZoom(1);
  }
  zoomIn.addEventListener("click", () => setZoom(zoom + .25));
  zoomOut.addEventListener("click", () => setZoom(zoom - .25));
  zoomReset.addEventListener("click", () => setZoom(1));
  holder.addEventListener("wheel", e => {
    if (!lb.classList.contains("open")) return;
    e.preventDefault(); setZoom(zoom + (e.deltaY < 0 ? .2 : -.2));
  }, { passive: false });
  document.getElementById("lb-close").addEventListener("click", closeBox);
  lb.addEventListener("click", e => { if (e.target === lb) closeBox(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeBox();
    if (lb.classList.contains("open") && e.key === "+") setZoom(zoom + .25);
    if (lb.classList.contains("open") && e.key === "-") setZoom(zoom - .25);
  });
  search.addEventListener("input", render);
  buildChips(); render();
})();
