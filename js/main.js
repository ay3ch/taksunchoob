/* ============================================================
   اطلاعات ثابت سایت - اگر شماره یا آدرس عوض شد، فقط اینجا را تغییر بدید
   ============================================================ */
const SITE = {
  name: "تکسان چوب",
  slogan: "انتخاب اهل کیفیت",
  phone: "02165430223",
  phoneShow: "۰۲۱-۶۵۴۳۰۲۲۳",
  address: "استان تهران، شهرک صنعتی صفادشت، خیابان هشتم غربی، پلاک ۱۵۷",
};

const PAGES = [
  { href: "index.html", title: "صفحه اصلی" },
  { href: "products.html", title: "محصولات" },
  { href: "designs.html", title: "طرح‌ها" },
  { href: "about.html", title: "درباره ما" },
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(hover: hover)").matches;

/* ---------- نوار بالا ---------- */
function buildHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = PAGES.map(
    (p, i) => `<a href="${p.href}" style="--i:${i}" class="${p.href === current ? "active" : ""}">${p.title}</a>`
  ).join("");

  document.getElementById("site-header").innerHTML = `
    <header class="site-header" id="top">
      <div class="container">
        <a class="brand" href="index.html">
          <img src="images/logo.png" alt="لوگوی تکسان چوب" data-hide-on-error>
        </a>
        <nav class="nav" id="nav">
          ${links}
          <button class="theme-toggle" type="button" aria-label="تغییر به حالت تیره" title="تغییر حالت روشن/تیره"><span class="theme-icon" aria-hidden="true">☾</span><span class="theme-label">حالت تیره</span></button>
          <a class="call" href="tel:${SITE.phone}">${SITE.phoneShow}</a>
          <a class="nav-foot" href="tel:${SITE.phone}">${SITE.phoneShow}</a>
        </nav>
        <button class="menu-btn" aria-label="باز کردن منو" aria-expanded="false" aria-controls="nav">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="progress"></div>
    </header>`;

  const header = document.getElementById("top");
  const btn = header.querySelector(".menu-btn");
  const nav = document.getElementById("nav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "بستن منو" : "باز کردن منو");
    document.body.style.overflow = open ? "hidden" : "";
  }
  window.closeMenu = () => setMenu(false);
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 860) setMenu(false); });

  /* شیشه‌ای شدن نوار و نوار پیشرفت اسکرول */
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.style.setProperty("--p", max > 0 ? Math.min(window.scrollY / max, 1) : 0);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- پایین صفحه ---------- */
function buildFooter() {
  const links = PAGES.map((p) => `<a href="${p.href}">${p.title}</a>`).join("");
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="foot-grid">
          <div>
            <h3>${SITE.name}</h3>
            <p>${SITE.slogan}</p>
          </div>
          <div>
            <h4>تماس</h4>
            <div class="foot-line"><a href="tel:09124265076" style="direction:ltr;display:inline-block">۰۹۱۲۴۲۶۵۰۷۶</a></div>
            <div class="foot-line"><a href="tel:02165430223" style="direction:ltr;display:inline-block">۰۲۱-۶۵۴۳۰۲۲۳</a></div>
            <div class="foot-line"><a href="tel:02165430224" style="direction:ltr;display:inline-block">۰۲۱-۶۵۴۳۰۲۲۴</a></div>
            <div class="foot-line"><a href="tel:02165430225" style="direction:ltr;display:inline-block">۰۲۱-۶۵۴۳۰۲۲۵</a></div>
            <div class="foot-line"><a href="tel:02165430226" style="direction:ltr;display:inline-block">۰۲۱-۶۵۴۳۰۲۲۶</a></div>
            <div class="foot-line"><a href="tel:02165430227" style="direction:ltr;display:inline-block">۰۲۱-۶۵۴۳۰۲۲۷</a></div>
            <div class="foot-line">${SITE.address}</div>
          </div>
          <div>
            <h4>صفحه‌ها</h4>
            <div class="foot-links">${links}</div>
          </div>
        </div>
        <div class="foot-big" aria-hidden="true">${SITE.name}</div>
      </div>
      <div class="copy"><div class="container">© ${SITE.name} - تمامی حقوق محفوظ است.</div></div>
    </footer>`;
}

/* ---------- اگر عکسی هنوز در پوشه نبود، کادر خالی نشون بده ---------- */
function handleMissingImages(root = document) {
  root.querySelectorAll("img").forEach((img) => {
    const fix = () => {
      if (img.hasAttribute("data-hide-on-error")) { img.style.display = "none"; return; }
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.textContent = img.getAttribute("alt") || "عکس";
      img.replaceWith(ph);
    };
    if (img.complete && img.naturalWidth === 0) fix();
    else img.addEventListener("error", fix, { once: true });
  });
}

/* ============================================================
   انیمیشن‌ها
   ============================================================ */

/* عنوان کلمه‌به‌کلمه با blur */
function setupSplit() {
  document.querySelectorAll("[data-split]").forEach((el) => {
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    el.innerHTML = text.split(/\s+/)
      .map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`)
      .join(" ");
  });
}

/* ورود پله‌ای فرزندهای یک بخش */
function setupStagger() {
  document.querySelectorAll("[data-stagger]").forEach((box) => {
    [...box.children].forEach((c, i) => {
      c.setAttribute("data-reveal", "");
      c.style.setProperty("--d", `${i * 0.1}s`);
    });
  });
}

/* شمارنده عددی */
function runCounter(el) {
  const target = Number(el.dataset.count);
  const fmt = (n) => Math.round(n).toLocaleString("fa-IR");
  if (reduceMotion) { el.textContent = fmt(target); return; }
  const start = performance.now();
  const dur = 1800;
  (function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = fmt(target * (1 - Math.pow(1 - t, 4)));
    if (t < 1) requestAnimationFrame(tick);
  })(start);
}

/* ظاهر شدن نرم هنگام اسکرول */
function setupReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add("in");
      el.querySelectorAll("[data-count]").forEach(runCounter);
      if (el.hasAttribute("data-count")) runCounter(el);
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  items.forEach((el) => io.observe(el));
}

/* پارالاکس عکس اصلی */
function setupParallax() {
  const target = document.querySelector(".hero-photo > *");
  if (!target || reduceMotion) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = Math.min(window.scrollY, 800);
      target.style.transform = `translateY(${y * 0.1}px) scale(1.1)`;
      ticking = false;
    });
  }, { passive: true });
}

/* نور دنبال‌کننده ماوس روی بخش‌های تیره و کاشی‌ها */
function setupGlow() {
  if (!canHover || reduceMotion) return;
  document.querySelectorAll(".glowfx, .tile").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* چرخش سه‌بعدی ملایم عکس اصلی */
function setupTilt() {
  if (!canHover || reduceMotion) return;
  document.querySelectorAll("[data-tilt]").forEach((el) => {
    const host = el.closest(".hero") || el;
    host.addEventListener("pointermove", (e) => {
      const r = host.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateY(${x * -7}deg) rotateX(${y * 6}deg)`;
    });
    host.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
}

/* دکمه‌های مغناطیسی */
function setupMagnetic() {
  if (!canHover || reduceMotion) return;
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
      el.style.translate = `${x}px ${y}px`;
    });
    el.addEventListener("pointerleave", () => { el.style.translate = ""; });
  });
}

/* پرده انتقال بین صفحه‌ها */
const curtain = document.getElementById("curtain");
window.transitionTo = function (go, stay) {
  if (reduceMotion || !curtain) { go(); return; }
  curtain.classList.remove("out");
  curtain.classList.add("leave");
  setTimeout(() => {
    go();
    if (stay) {
      curtain.classList.remove("leave");
      curtain.classList.add("out");
    }
  }, 680);
};
function setupPageTransitions() {
  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http") || a.target === "_blank") return;
    a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const target = new URL(href, location.href);
      if (target.origin !== location.origin || target.pathname === location.pathname) return;
      e.preventDefault();
      window.transitionTo(() => { location.href = href; });
    });
  });
  window.addEventListener("pageshow", (e) => {
    if (e.persisted && curtain) { curtain.classList.remove("leave"); curtain.classList.add("out"); }
  });
}

/* ---------- تغییر تم روشن/تیره با ذخیره انتخاب کاربر ---------- */
function setupTheme() {
  let saved = null;
  try { saved = localStorage.getItem("takshan-theme"); } catch (_) {}
  const initial = saved === "dark" || saved === "light" ? saved : "light";
  document.documentElement.dataset.theme = initial;
  const syncButtons = () => {
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      const dark = document.documentElement.dataset.theme === "dark";
      btn.setAttribute("aria-label", dark ? "تغییر به حالت روشن" : "تغییر به حالت تیره");
      btn.setAttribute("aria-pressed", String(dark));
      const icon = btn.querySelector(".theme-icon");
      const label = btn.querySelector(".theme-label");
      if (icon) icon.textContent = dark ? "☀" : "☾";
      if (label) label.textContent = dark ? "حالت روشن" : "حالت تیره";
    });
  };
  document.querySelectorAll(".theme-toggle").forEach((btn) => btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("takshan-theme", next); } catch (_) {}
    syncButtons();
  }));
  syncButtons();
}

buildHeader();
buildFooter();
setupTheme();
setupSplit();
setupStagger();
handleMissingImages();
setupReveal();
setupParallax();
setupGlow();
setupTilt();
setupMagnetic();
setupPageTransitions();
