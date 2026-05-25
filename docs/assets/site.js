(function() {
  const cfg = window.APP_CONFIG || {};
  const state = { site: null, projects: null, lang: 'sr' };

  const UI = {
    sr: {
      nav: { services:'Usluge', process:'Proces', projects:'Projekti', about:'O nama', faq:'FAQ', contact:'Kontakt' },
      heads: { services:'Usluge', process:'Proces', about:'O nama', contact:'Kontakt', projects:'Projekti', testimonials:'Utisci', faq:'FAQ' },
      contact: {
        reach:'Kontakt podaci', phone:'Telefon', email:'Email', area:'Područje — Novi Sad, Beograd i okolina', hint:'Upit šaljite mejlom ili ovde',
        fullName:'Ime i prezime *', phoneF:'Telefon *', emailF:'Email *', city:'Grad *', type:'Tip projekta *', measures:'Imam mere *',
        dims:'Dimenzije', desc:'Opis projekta *', deadline:'Rok', budget:'Budžet', images:'Slike — max 10 — do 5MB po slici', consent:'Slažem se da budem kontaktiran',
        submit:'Pošalji upit', call:'Pozovi', successTitle:'Hvala! Upit je poslat', successText:'Javićemo se uskoro',
        errReq:'Popunite obavezna polja', errSend:'Došlo je do greške — molimo pokušajte ponovo', fallback:'Slike možete naknadno poslati kao odgovor na email'
      }
    },
    en: {
      nav: { services:'Services', process:'Process', projects:'Projects', about:'About', faq:'FAQ', contact:'Contact' },
      heads: { services:'Services', process:'Process', about:'About', contact:'Contact', projects:'Projects', testimonials:'Testimonials', faq:'FAQ' },
      contact: {
        reach:'Contact details', phone:'Phone', email:'Email', area:'Area — Novi Sad, Belgrade and nearby', hint:'Send inquiry by email or here',
        fullName:'Full name *', phoneF:'Phone *', emailF:'Email *', city:'City *', type:'Project type *', measures:'Have measurements *',
        dims:'Dimensions', desc:'Project description *', deadline:'Deadline', budget:'Budget', images:'Images — max 10 — up to 5MB each', consent:'I agree to be contacted',
        submit:'Send inquiry', call:'Call', successTitle:'Thank you! Inquiry sent', successText:'We will get back soon',
        errReq:'Please fill required fields', errSend:'Error — please try again', fallback:'You can send images later by replying to email'
      }
    },
    de: {
      nav: { services:'Leistungen', process:'Ablauf', projects:'Projekte', about:'Über uns', faq:'FAQ', contact:'Kontakt' },
      heads: { services:'Leistungen', process:'Ablauf', about:'Über uns', contact:'Kontakt', projects:'Projekte', testimonials:'Stimmen', faq:'FAQ' },
      contact: {
        reach:'Kontaktdaten', phone:'Telefon', email:'E‑Mail', area:'Gebiet — Novi Sad, Belgrad und Umgebung', hint:'Anfrage per E‑Mail oder hier',
        fullName:'Vollständiger Name *', phoneF:'Telefon *', emailF:'E‑Mail *', city:'Stadt *', type:'Projekttyp *', measures:'Maße vorhanden *',
        dims:'Maße', desc:'Projektbeschreibung *', deadline:'Frist', budget:'Budget', images:'Bilder — max. 10 — bis 5MB', consent:'Ich stimme der Kontaktaufnahme zu',
        submit:'Anfrage senden', call:'Anrufen', successTitle:'Danke! Anfrage gesendet', successText:'Wir melden uns bald',
        errReq:'Bitte Pflichtfelder ausfüllen', errSend:'Fehler — bitte erneut versuchen', fallback:'Bilder können später per E‑Mail geschickt werden'
      }
    },
    ru: {
      nav: { services:'Услуги', process:'Процесс', projects:'Проекты', about:'О нас', faq:'FAQ', contact:'Контакты' },
      heads: { services:'Услуги', process:'Процесс', about:'О нас', contact:'Контакты', projects:'Проекты', testimonials:'Отзывы', faq:'FAQ' },
      contact: {
        reach:'Контакты', phone:'Телефон', email:'Email', area:'Регион — Нови Сад, Белград и окрестности', hint:'Пишите на email или через форму',
        fullName:'Имя и фамилия *', phoneF:'Телефон *', emailF:'Email *', city:'Город *', type:'Тип проекта *', measures:'Есть размеры *',
        dims:'Размеры', desc:'Описание проекта *', deadline:'Срок', budget:'Бюджет', images:'Изображения — до 10 — по 5MB', consent:'Согласен на контакт',
        submit:'Отправить заявку', call:'Позвонить', successTitle:'Спасибо! Заявка отправлена', successText:'Мы свяжемся скоро',
        errReq:'Заполните обязательные поля', errSend:'Ошибка — попробуйте снова', fallback:'Изображения можно отправить позже ответом на письмо'
      }
    }
  };

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    try {
      initTheme();
      initLang();
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
      wireLightbox();
    } catch (e) { console.error(e); }
  }

  function getLang() {
    const stored = localStorage.getItem('lang');
    return (stored && UI[stored]) ? stored : 'sr';
  }
  function setLang(lang) {
    state.lang = UI[lang] ? lang : 'sr';
    localStorage.setItem('lang', state.lang);
  }
  function initLang() {
    setLang(getLang());
    document.querySelectorAll('[data-lang]').forEach(b=>{
      b.classList.toggle('bg-gray-100', b.dataset.lang===state.lang);
      b.addEventListener('click', ()=>{ setLang(b.dataset.lang); location.reload(); });
    });
  }

  async function loadContent() {
    const file = state.lang === 'sr' ? './content/site.json' : `./content/site.${state.lang}.json`;
    const site = await fetch(file, {cache:"no-store"}).then(r => r.json());
    const projects = await fetch("./content/projects.json", {cache:"no-store"}).then(r => r.json());
    state.site = site;
    state.projects = projects.projects || [];
  }

  function qs(sel) { return document.querySelector(sel); }
  function telHref(phone) { return "tel:" + String(phone || "").replace(/\s+/g, ""); }
  function esc(s){ return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function initTheme(){
    const saved = localStorage.getItem('theme') || 'light';
    applyTheme(saved);
    const btn = qs('#themeToggle');
    if (btn) {
      btn.addEventListener('click', ()=>{
        const next = document.documentElement.classList.contains('theme-dark') ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
      });
    }
  }
  function applyTheme(theme){
    document.documentElement.classList.toggle('theme-dark', theme==='dark');
    const light = qs('#iconLight'), dark = qs('#iconDark');
    if (light && dark){ if(theme==='dark'){ light.classList.add('hidden'); dark.classList.remove('hidden'); } else { dark.classList.add('hidden'); light.classList.remove('hidden'); } }
  }

  function renderHeader() {
    const phone = cfg.CONTACT_PHONE || "+381 64 122 04 29";
    const h = qs("#headerPhone"); if (h) { h.textContent = phone; h.href = telHref(phone); }
    const m = qs("#headerPhoneMobile"); if (m) m.href = telHref(phone);

    const nav = UI[state.lang].nav;
    ['Services','Process','Projects','About','FAQ','Contact'].forEach(k=>{
      const el = qs('#nav'+k); if (el) el.textContent = nav[k.toLowerCase()];
      const fl = qs('#foot'+k); if (fl) fl.textContent = nav[k.toLowerCase()];
    });
    const cta = qs('#ctaHeader'); if (cta && state.lang!=='sr') cta.textContent = UI[state.lang].contact.submit;
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
    const heads = UI[state.lang].heads;
    const ids = { labelServices:'services', labelProcess:'process', labelAbout:'about', labelContact:'contact' };
    Object.entries(ids).forEach(([id,key])=>{ const el2=qs('#'+id); if(el2) el2.textContent = heads[key]; });
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
      <div class="card process-tile tile-pattern">
        <button class="w-full text-center process-toggle focus:outline-none focus:ring-2 focus:ring-brand-dark/30 rounded-xl"
                data-i="${i}" aria-expanded="false">
          <div class="tile-head">
            <span class="chip">${i+1}</span>
            <span class="tile-title">${esc(s.t)}</span>
          </div>
        </button>
        <div class="tile-desc hidden process-desc" aria-hidden="true">${esc(s.d)}</div>
      </div>
      ${i<steps.length-1 ? `<div class="flex justify-center"><span class="flow-arrow" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16M12 20l-4-4M12 20l4-4" stroke="#0B3D3A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span></div>` : '' }
    `).join("");
    wrap.querySelectorAll(".process-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const desc = btn.parentElement.querySelector(".process-desc");
        const isHidden = desc.classList.contains("hidden");
        desc.classList.toggle("hidden");
        btn.setAttribute("aria-expanded", String(isHidden));
        desc.setAttribute("aria-hidden", String(!isHidden));
      });
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); btn.click(); }
      });
    });
  }

  function renderWhyUs() {
    const items = state.site.whyUs || [];
    const el = qs("#whyus");
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">${UI[state.lang].heads.services ? 'Zašto mi' : 'Zašto mi'}</h2>
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
    const head = UI[state.lang].heads.projects || 'Projekti';
    el.innerHTML = `
      <div class="container">
        <div class="flex items-center justify-between mb-6">
          <h2 class="section-title font-serif">${head}</h2>
          <a href="./projekti/" class="text-brand-dark font-medium hover:underline">Pogledaj sve</a>
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          ${list.map(p => `
            <button class="card overflow-hidden text-left preview-btn" data-img="${esc(p.images[0] || './images/ph2.svg')}">
              <div class="relative w-full h-40 bg-brand-light">
                <img src="${esc(p.images[0] || './images/ph2.svg')}" alt="${esc(p.title)} — ${esc(p.type)}" class="w-full h-40 object-cover" />
              </div>
              <div class="p-4">
                <div class="text-sm text-gray-500">${esc(p.type)} · ${esc(p.location)}</div>
                <div class="font-medium">${esc(p.title)}</div>
              </div>
            </button>
          `).join("")}
        </div>
      </div>`;
  }

  function renderTestimonials() {
    const items = state.site.testimonials || [];
    const head = UI[state.lang].heads.testimonials || 'Utisci';
    const el = qs("#testimonials");
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">${head}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          ${items.map(t => `
            <div class="card p-6">
              <div class="text-gray-700 mb-3">${esc(t.text)}</div>
              <div class="text-sm font-medium text-gray-900">${esc(t.name)}</div>
              ${t.date ? `<div class="text-xs text-gray-500 mt-1">${esc(formatDate(t.date))}</div>` : ``}
            </div>
          `).join("")}
        </div>
      </div>`;
  }

  function formatDate(iso){
    try {
      const d = new Date(iso);
      if (state.lang==='en') return d.toLocaleDateString('en-GB');
      if (state.lang==='de') return d.toLocaleDateString('de-DE');
      if (state.lang==='ru') return d.toLocaleDateString('ru-RU');
      return d.toLocaleDateString('sr-RS');
    } catch { return iso; }
  }

  function renderFAQ() {
    const items = state.site.faq || [];
    const head = UI[state.lang].heads.faq || 'FAQ';
    const el = qs("#faq");
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">${head}</h2>
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
        const isHidden = a.classList.contains("hidden");
        a.classList.toggle("hidden");
        sym.textContent = isHidden ? "−" : "+";
      });
    });
  }

  function renderContact() {
    const L = UI[state.lang].contact;
    const phone = cfg.CONTACT_PHONE || "+381 64 122 04 29";
    const email = cfg.CONTACT_EMAIL || "";

    setText('#labelReachUs', L.reach);
    setText('#labelPhone', L.phone);
    setText('#labelEmail', L.email);
    setText('#labelArea', L.area);
    setText('#labelHint', L.hint);
    setText('#labelFullName', L.fullName);
    setText('#labelPhoneField', L.phoneF);
    setText('#labelEmailField', L.emailF);
    setText('#labelCity', L.city);
    setText('#labelType', L.type);
    setText('#labelMeasures', L.measures);
    setText('#labelDims', L.dims);
    setText('#labelDesc', L.desc);
    setText('#labelDeadline', L.deadline);
    setText('#labelBudget', L.budget);
    setText('#labelImages', L.images);
    setText('#labelConsent', L.consent);
    const submitBtn = qs('#submitBtn'); if (submitBtn) submitBtn.textContent = L.submit;
    const callBtn = qs('#contactPhoneBtn'); if (callBtn) callBtn.textContent = L.call;

    const phoneEl = qs("#contactPhone");
    const emailEl = qs("#contactEmail");
    const footPhone = qs("#footerPhone");
    const footEmail = qs("#footerEmail");
    if (phoneEl){ phoneEl.textContent=phone; phoneEl.href=telHref(phone); }
    if (emailEl && email){ emailEl.textContent=email; emailEl.href="mailto:"+email; }
    if (footPhone){ footPhone.textContent=phone; footPhone.href=telHref(phone); }
    if (footEmail && email){ footEmail.textContent=email; footEmail.href="mailto:"+email; }

    const form = qs("#contactForm");
    const filesInput = qs("#filesInput");
    const filesList = qs("#filesList");
    const alertBox = qs("#formAlert");
    const fallbackBox = qs("#fallbackBox");

    const cloudName = cfg.CLOUDINARY_CLOUD_NAME || "";
    const preset = cfg.CLOUDINARY_UPLOAD_PRESET || "";
    const cloudEnabled = Boolean(cloudName && preset);
    if (!cloudEnabled && fallbackBox) {
      fallbackBox.classList.remove("hidden");
      fallbackBox.textContent = L.fallback;
    }

    const FORMSPREE_ID = cfg.FORMSPREE_ID || "";
    let files = [];
    if (filesInput){
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
    }

    function renderFiles() {
      if (!filesList) return;
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

    if (form){
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (alertBox) alertBox.classList.add("hidden");
        const data = Object.fromEntries(new FormData(form).entries());
        const haveYes = ["Da","Yes","Ja","Да"];
        const payload = {
          fullName: (data.fullName || "").toString().trim(),
          phone: (data.phone || "").toString().trim(),
          email: (data.email || "").toString().trim(),
          city: data.city,
          projectType: data.projectType,
          description: (data.description || "").toString().trim(),
          haveMeasures: haveYes.includes(String(data.haveMeasures)),
          dimensions: data.dimensions || "",
          deadline: data.deadline || "",
          budget: data.budget || "",
          consent: data.consent === "on",
          imageUrls: []
        };
        if (!payload.fullName || !payload.phone || !payload.email || !payload.city || !payload.projectType || !payload.description || !payload.consent) {
          return showError(UI[state.lang].contact.errReq);
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

        if (!FORMSPREE_ID) return showError(UI[state.lang].contact.errSend);
        try {
          const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          if (!res.ok) throw new Error("Formspree error");
          qs("#contactSection").innerHTML = `
            <div class="container">
              <div class="card p-8 text-center">
                <h2 class="font-serif text-2xl mb-2">${UI[state.lang].contact.successTitle}</h2>
                <p>${UI[state.lang].contact.successText}</p>
              </div>
            </div>`;
        } catch (err) {
          showError(UI[state.lang].contact.errSend);
        }
      });
    }

    function showError(msg) {
      if (!alertBox) return;
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

  function setText(sel, txt){ const el=qs(sel); if(el) el.textContent=txt; }

  function renderFooter() {
    const phone = (window.APP_CONFIG && window.APP_CONFIG.CONTACT_PHONE) || "+381 64 122 04 29";
    const email = (window.APP_CONFIG && window.APP_CONFIG.CONTACT_EMAIL) || "";
    const tel = qs("#footerPhone");
    if (tel) { tel.textContent = phone; tel.href = "tel:" + phone.replace(/\s+/g,""); }
    const em = qs("#footerEmail");
    if (em && email) { em.textContent = email; em.href = "mailto:" + email; }
    const nav = UI[state.lang].nav;
    setText('#footContactTitle', nav.contact);
    setText('#footPhoneLabel', UI[state.lang].contact.phone);
    setText('#footEmailLabel', UI[state.lang].contact.email);
    setText('#footArea', UI[state.lang].contact.area);
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

  function wireLightbox(){
    const box = qs('#lightbox'); const img = qs('#lightboxImg'); const close = qs('#lightboxClose');
    if (!box || !img || !close) return;
    document.body.addEventListener('click', (e)=>{
      const btn = e.target.closest('.preview-btn');
      if (btn && btn.dataset.img){
        img.src = btn.dataset.img;
        box.classList.remove('hidden');
        box.classList.add('flex');
      }
    });
    close.addEventListener('click', ()=>{ box.classList.add('hidden'); box.classList.remove('flex'); img.src=''; });
    box.addEventListener('click', (e)=>{ if (e.target===box) { close.click(); } });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && !box.classList.contains('hidden')) close.click();});
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

