(function() {
  const cfg = window.APP_CONFIG || {};
  const state = { site: null, projects: null };

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    try {
      await loadContent();
      renderHeader();
      renderHero();
      renderServices();
      renderProcess();
      renderWhyUs();
      renderPortfolioPreview();
      renderTestimonials();
      renderFAQ();
      renderContact();
      renderFooter();
      injectSEO();
      wireNav();
    } catch (e) { console.error(e); }
  }

  async function loadContent() {
    const site = await fetch("./content/site.json", {cache:"no-store"}).then(r => r.json());
    const projects = await fetch("./content/projects.json", {cache:"no-store"}).then(r => r.json());
    state.site = site;
    state.projects = projects.projects || [];
  }

  function qs(sel) { return document.querySelector(sel); }
  function telHref(phone) { return "tel:" + String(phone || "").replace(/\s+/g, ""); }
  function esc(s){ return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function renderHeader() {
    const phone = cfg.CONTACT_PHONE || "+381 64 122 04 29";
    const h = qs("#headerPhone"); if (h) { h.textContent = phone; h.href = telHref(phone); }
    const m = qs("#headerPhoneMobile"); if (m) m.href = telHref(phone);
  }

  function renderHero() {
    const c = state.site.hero; if (!c) return;
    const el = qs("#hero");
    el.innerHTML = `
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 class="font-serif text-4xl md:text-5xl leading-tight mb-4">${esc(c.title)}</h1>
            <p class="text-lg text-gray-700 mb-6">${esc(c.subtitle)}</p>
            <div class="flex flex-wrap gap-3 mb-8">
              <a href="#kontakt" class="btn btn-primary">${esc(c.ctaPrimary)}</a>
              <a href="./projekti/" class="btn btn-secondary">${esc(c.ctaSecondary)}</a>
            </div>
            <div class="grid sm:grid-cols-3 gap-4">
              ${c.benefits.slice(0,3).map(b => `
                <div class="card p-4">
                  <div class="font-medium mb-1">${esc(b.title)}</div>
                  <div class="text-sm text-gray-600">${esc(b.text)}</div>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="card p-6 bg-brand-beige/30">
            <img src="./images/ph1.svg" alt="Primer enterijera po meri" class="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    `;
  }

  function renderServices() { /* statički u HTML-u */ }

  function renderProcess() {
    const steps = [
      { t: "Upoznavanje sa projektom", d: "Pregled prostora (uživo ili putem upita) i prikupljanje informacija" },
      { t: "Predlog rešenja", d: "Dizajn, izbor materijala i okvirna ideja projekta" },
      { t: "Predračun", d: "Dostavljamo skicu i transparentan pregled cene materijala i troškova" },
      { t: "Finalizacija projekta", d: "Nakon odobrenja izrađujemo finalni model i definišemo rokove i ponudu" },
      { t: "Avans i početak izrade", d: "Plaćanje avansa (materijal + troškovi) i početak proizvodnje" },
      { t: "Izrada i montaža", d: "Proizvodnja, isporuka i montaža na lokaciji" },
      { t: "Završetak projekta", d: "Primopredaja i isplata ostatka dogovorene cene" }
    ];
    const wrap = qs("#processList");
    if (!wrap) return;
    wrap.innerHTML = steps.map((s, i) => `
      <div class="card p-4">
        <button class="w-full text-left flex items-center gap-3 process-toggle" data-i="${i}">
          <span class="flex-shrink-0 w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center">${i+1}</span>
          <span class="font-medium">${esc(s.t)}</span>
        </button>
        <div class="mt-3 text-gray-700 hidden process-desc">${esc(s.d)}</div>
      </div>
    `).join("");
    wrap.querySelectorAll(".process-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const desc = btn.parentElement.querySelector(".process-desc");
        if (desc.classList.contains("hidden")) desc.classList.remove("hidden");
        else desc.classList.add("hidden");
      });
    });
  }

  function renderWhyUs() {
    const items = state.site.whyUs || [];
    const el = qs("#whyus");
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">Zašto mi</h2>
        <div class="grid md:grid-cols-3 gap-6">
          ${items.map(it => `
            <div class="card p-6 hover:shadow-lg transition-shadow">
              <div class="text-xl font-medium mb-2">${esc(it.title)}</div>
              <div class="text-gray-700">${esc(it.text)}</div>
            </div>
          `).join("")}
        </div>
        <p class="text-sm text-gray-600 mt-4">Radimo po procedurama. Zato su naše estimacije realne i rokovi dostižni</p>
      </div>`;
  }

  function renderPortfolioPreview() {
    const list = state.projects.slice(0, 8);
    const el = qs("#portfolioPreview");
    el.innerHTML = `
      <div class="container">
        <div class="flex items-center justify-between mb-6">
          <h2 class="section-title font-serif">Projekti</h2>
          <a href="./projekti/" class="text-brand-dark font-medium hover:underline">Pogledaj sve</a>
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          ${list.map(p => `
            <div class="card overflow-hidden">
              <div class="relative w-full h-40 bg-brand-light">
                <img src="${esc(p.images[0] || './images/ph2.svg')}" alt="${esc(p.title)} — ${esc(p.type)}" class="w-full h-40 object-cover" />
              </div>
              <div class="p-4">
                <div class="text-sm text-gray-500">${esc(p.type)} · ${esc(p.location)}</div>
                <div class="font-medium">${esc(p.title)}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>`;
  }

  function renderTestimonials() {
    const items = state.site.testimonials || [];
    const el = qs("#testimonials");
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">Utisci</h2>
        <div class="grid md:grid-cols-3 gap-6">
          ${items.map(t => `
            <div class="card p-6">
              <div class="text-gray-700 mb-3">${esc(t.text)}</div>
              <div class="text-sm font-medium text-gray-900">${esc(t.name)}</div>
            </div>
          `).join("")}
        </div>
      </div>`;
  }

  function renderFAQ() {
    const items = state.site.faq || [];
    const el = qs("#faq");
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">FAQ</h2>
        <div class="space-y-3">
          ${items.map((it, i) => `
            <div class="card">
              <button data-i="${i}" class="w-full text-left px-5 py-4 flex justify-between items-center faq-toggle">
                <span class="font-medium">${esc(it.q)}</span>
                <span class="text-gray-500">+</span>
              </button>
              <div class="px-5 pb-5 text-gray-700 hidden faq-a">${esc(it.a)}</div>
            </div>
          `).join("")}
        </div>
      </div>`;
    el.querySelectorAll(".faq-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const a = btn.parentElement.querySelector(".faq-a");
        const sym = btn.querySelector("span.text-gray-500");
        if (a.classList.contains("hidden")) { a.classList.remove("hidden"); sym.textContent = "−"; }
        else { a.classList.add("hidden"); sym.textContent = "+"; }
      });
    });
  }

  function renderContact() {
    const phone = cfg.CONTACT_PHONE || "+381 64 122 04 29";
    const email = cfg.CONTACT_EMAIL || "";
    qs("#contactPhone").textContent = phone;
    qs("#contactPhone").href = telHref(phone);
    const emailEl = qs("#contactEmail");
    if (email && emailEl) { emailEl.textContent = email; emailEl.href = "mailto:" + email; }
    const phoneBtn = qs("#contactPhoneBtn"); if (phoneBtn) phoneBtn.href = telHref(phone);

    const form = qs("#contactForm");
    const filesInput = qs("#filesInput");
    const filesList = qs("#filesList");
    const alertBox = qs("#formAlert");
    const fallbackBox = qs("#fallbackBox");

    const cloudName = cfg.CLOUDINARY_CLOUD_NAME || "";
    const preset = cfg.CLOUDINARY_UPLOAD_PRESET || "";
    const cloudEnabled = Boolean(cloudName && preset);
    if (!cloudEnabled) {
      fallbackBox.classList.remove("hidden");
      fallbackBox.textContent = "Slike možete naknadno poslati kao odgovor na email";
    }

    const FORMSPREE_ID = cfg.FORMSPREE_ID || "";
    let files = [];
    filesInput.addEventListener("change", (e) => {
      const fl = Array.from(e.target.files || []);
      const allowed = 10 - files.length;
      const selected = fl.slice(0, allowed);
      if (fl.length > allowed) showError("Maksimalno 10 slika");
      for (const f of selected) {
        if (f.size > 5 * 1024 * 1024) files.push({ file: f, progress: 0, error: "Veće od 5MB" });
        else files.push({ file: f, progress: 0 });
      }
      renderFiles();
      filesInput.value = "";
    });

    function renderFiles() {
      filesList.innerHTML = files.map((f) => `
        <div class="text-sm mb-2">
          <div class="flex items-center justify-between">
            <span class="truncate">${esc(f.file.name)}</span>
            <span class="text-gray-500">${f.error ? f.error : (f.progress || 0) + "%"}</span>
          </div>
          <div class="h-1 bg-gray-200 rounded">
            <div class="h-1 bg-brand-dark rounded" style="width:${f.progress || 0}%"></div>
          </div>
        </div>
      `).join("");
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      alertBox.classList.add("hidden");
      const data = Object.fromEntries(new FormData(form).entries());
      const payload = {
        fullName: (data.fullName || "").toString().trim(),
        phone: (data.phone || "").toString().trim(),
        email: (data.email || "").toString().trim(),
        city: data.city,
        projectType: data.projectType,
        description: (data.description || "").toString().trim(),
        haveMeasures: data.haveMeasures === "Da",
        dimensions: data.dimensions || "",
        deadline: data.deadline || "",
        budget: data.budget || "",
        consent: data.consent === "on",
        imageUrls: []
      };
      if (!payload.fullName || !payload.phone || !payload.email || !payload.city || !payload.projectType || !payload.description || !payload.consent) {
        return showError("Popunite obavezna polja");
      }

      let urls = [];
      if (cloudEnabled) {
        for (let i = 0; i < files.length; i++) {
          const it = files[i];
          if (it.error) continue;
          const fd = new FormData();
          fd.append("file", it.file);
          fd.append("upload_preset", preset);
          const u = await uploadOne(fd, i, cloudName);
          if (u) urls.push(u);
        }
      }
      payload.imageUrls = urls;

      if (!FORMSPREE_ID) return showError("Slanje nije uspelo. Molimo pokušajte kasnije");
      try {
        const res = await fetch(`https://formspree.io/f/${https://formspree.io/f/mzdwgzyj}`, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error("Formspree error");
        qs("#contactSection").innerHTML = `
          <div class="container">
            <div class="card p-8 text-center">
              <h2 class="font-serif text-2xl mb-2">Hvala! Upit je poslat</h2>
              <p>Javićemo se uskoro</p>
            </div>
          </div>`;
      } catch (err) {
        showError("Došlo je do greške> Molimo, pokušajte ponovo");
      }
    });

    function showError(msg) {
      alertBox.textContent = msg;
      alertBox.classList.remove("hidden");
      setTimeout(() => alertBox.classList.add("hidden"), 4000);
    }

    function uploadOne(formData, index, cloud) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            const p = Math.round((e.loaded / e.total) * 100);
            files[index].progress = p;
            renderFiles();
          }
        });
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              try { const res = JSON.parse(xhr.responseText); resolve(res.secure_url); }
              catch { resolve(""); }
            } else {
              files[index].error = "Greška pri uploadu"; renderFiles(); resolve("");
            }
          }
        };
        xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloud}/upload`, true);
        xhr.send(formData);
      });
    }
  }

  function renderFooter() {
    const phone = (window.APP_CONFIG && window.APP_CONFIG.CONTACT_PHONE) || "+381 64 122 04 29";
    const email = (window.APP_CONFIG && window.APP_CONFIG.CONTACT_EMAIL) || "strahinjavasiljevic00@gmail.com";
    const tel = document.querySelector("#footerPhone");
    if (tel) { tel.textContent = phone; tel.href = "tel:" + phone.replace(/\s+/g,""); }
    const em = document.querySelector("#footerEmail");
    if (em && email) { em.textContent = email; em.href = "mailto:" + email; }
  }

  function wireNav() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (id && id.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(id);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  function injectSEO() {
    const siteUrl = (window.APP_CONFIG && window.APP_CONFIG.SITE_URL) || "";
    const phone = (window.APP_CONFIG && window.APP_CONFIG.CONTACT_PHONE) || "+381 64 122 04 29";
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Stolarija Vasiljević",
      "url": siteUrl,
      "telephone": phone,
      "areaServed": ["Novi Sad", "Beograd", "Ostala mesta"],
      "address": { "@type": "PostalAddress", "addressLocality": "Novi Sad / Beograd", "addressCountry": "RS" },
      "founder": [
        { "@type": "Person", "name": "Strahinja Vasiljević" },
        { "@type": "Person", "name": "Nemanja Vasiljević" }
      ],
      "image": siteUrl ? `${siteUrl}/images/ph1.svg` : "./images/ph1.svg",
      "sameAs": []
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(jsonLd);
    document.head.appendChild(s);
  }
})();
