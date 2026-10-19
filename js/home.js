/* نوار متحرک طرح‌ها در صفحه اصلی (از روی فایل designs-data.js ساخته می‌شود) */
(function () {
  const box = document.getElementById("marquee");
  if (!box || typeof DESIGNS === "undefined") return;

  const card = (d) => `
    <div class="sw">
      <div class="t"><img src="images/designs/${d.code}.jpg" alt="${d.code}" loading="lazy" data-color="${d.color || "#e7e7e4"}"></div>
      <div class="i"><b>${d.code}</b>${d.name || ""}</div>
    </div>`;

  /* لیست را تکرار می‌کنیم تا نوار هیچ‌وقت خالی نماند */
  let list = [...DESIGNS];
  while (list.length < 14) list = list.concat(DESIGNS);
  const html = list.map(card).join("");
  box.innerHTML = `<div class="track">${html}${html}</div>`;

  /* اگر عکس نبود، رنگ نمونه نشون بده */
  box.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.style.background = img.dataset.color;
      ph.style.color = "transparent";
      img.replaceWith(ph);
    }, { once: true });
  });
})();
