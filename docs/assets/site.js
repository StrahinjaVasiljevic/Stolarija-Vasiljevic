(function () {
  const cfg = window.APP_CONFIG || {};
  const base = typeof cfg.withBase === "function" ? cfg.withBase : (p) => p;
  const state = { site: null, projects: [], lang: "sr" };

  const UI = {
    sr: {
      nav: { services: "Usluge", process: "Proces", projects: "Projekti", about: "O nama", faq: "FAQ", contact: "Kontakt" },
      heads: { services: "Usluge", process: "Proces", about: "O nama", contact: "Kontakt", projects: "Projekti", testimonials: "Utisci", faq: "FAQ", whyus: "Zašto mi" },
      common: { viewAll: "Pogledaj sve" },
      theme: { toggle: "Promeni temu" },
      contact: {
        reach: "Kontakt podaci",
        phone: "Telefon",
        email: "Email",
        area: "Rumenačka 108, Novi Sad",
        hint: "",
        fullName: "Ime i prezime *",
        phoneF: "Telefon *",
        emailF: "Email *",
        city: "Grad *",
        type: "Tip projekta *",
        measures: "Imam mere *",
        dims: "Dimenzije",
        desc: "Opis projekta *",
        deadline: "Rok",
        budget: "Budžet",
        images: "Slike: max 10komada - do 5MB po slici",
        consent: "Slažem se da budem kontaktiran",
        submit: "Pošalji upit",
        call: "Pozovi",
        successTitle: "Hvala! Upit je poslat",
        successText: "Javićemo se uskoro",
        errReq: "Popunite obavezna polja",
        errSend: "Došlo je do greške - molimo pokušajte ponovo",
        fallback: "Slike možete naknadno poslati kao odgovor na email",
      },
      services: [
        { title: "Kuhinje", text: "Dizajn i izrada po meri - jasno i funkcionalno" },
        { title: "Plakari i Garderoberi", text: "Klizni ili klasični, za maksimalno iskorišćen prostor" },
        { title: "Police", text: "Za dnevne prostorije, hodnike i spavaće sobe" },
        { title: "Kancelarijski nameštaj", text: "Radni stolovi, police, ormari" },
        { title: "TV komode", text: "čist izgled" },
        { title: "Uređenje enterijera", text: "Pojedinačni komadi nameštaja ili kompletno uređenje prostora" },
      ],
      process: [
        { t: "Upoznavanje sa projektom", d: "" },
        { t: "Predlog rešenja", d: "" },
        { t: "Predračun", d: "" },
        { t: "Finalizacija projekta", d: "" },
        { t: "Avans i početak", d: "" },
        { t: "Izrada i montaža", d: "" },
        { t: "Završetak i primopredaja", d: "" },
      ],
      types: {
        "Kuhinje": "Kuhinje",
        "Plakari i garderoberi": "Plakari i garderoberi",
        "Komode i police": "Komode i police",
        "TV zidovi": "Zidni paneli",
        "Kancelarije": "Kancelarije",
        "Uređenje enterijera": "Uređenje enterijera",
      },
    },
    en: {
      nav: { services: "Services", process: "Process", projects: "Projects", about: "About", faq: "FAQ", contact: "Contact" },
      heads: { services: "Services", process: "Process", about: "About", contact: "Contact", projects: "Projects", testimonials: "Testimonials", faq: "FAQ", whyus: "Why us" },
      common: { viewAll: "View all" },
      theme: { toggle: "Toggle theme" },
      contact: {
        reach: "Contact details",
        phone: "Phone",
        email: "Email",
        area: "Area - Novi Sad, Belgrade and nearby",
        hint: "Send inquiry by email or here",
        fullName: "Full name *",
        phoneF: "Phone *",
        emailF: "Email *",
        city: "City *",
        type: "Project type *",
        measures: "Have measurements *",
        dims: "Dimensions",
        desc: "Project description *",
        deadline: "Deadline",
        budget: "Budget",
        images: "Images: max 10pcs - up to 5MB each",
        consent: "I agree to be contacted",
        submit: "Send inquiry",
        call: "Call",
        successTitle: "Thank you! Inquiry sent",
        successText: "We will get back soon",
        errReq: "Please fill required fields",
        errSend: "Error — please try again",
        fallback: "You can send images later by replying to email",
      },
      services: [
        { title: "Kitchens", text: "Custom design and build - clear and functional" },
        { title: "Wardrobes / Closets", text: "Sliding or hinged - space optimized" },
        { title: "Sideboards / Shelves", text: "For living, halls and bedrooms - clean lines" },
        { title: "Offices", text: "Desks, shelving, cabinets - tidy and efficient" },
        { title: "TV walls", text: "Concealed cabling - clean look" },
        { title: "Interior design", text: "Single pieces or full interior solutions" },
      ],
      process: [
        { t: "Project briefing", d: "Space review (on-site or via inquiry) and information gathering" },
        { t: "Design proposal", d: "Concept, material selection and initial direction" },
        { t: "Quotation", d: "Sketch and transparent cost overview" },
        { t: "Project finalization", d: "Approved model, timeline and offer definition" },
        { t: "Advance & start", d: "Advance payment (materials + costs) and production start" },
        { t: "Production & assembly", d: "Manufacturing, delivery and on-site assembly" },
        { t: "Handover", d: "Final checks and handover" },
      ],
      types: {
        "Kuhinje": "Kitchens",
        "Plakari i garderoberi": "Wardrobes",
        "Komode i police": "Sideboards & Shelves",
        "Zidni paneli": "TV panells",
        "Kancelarijski nameštaj": "Offices",
        "Uređenje enterijera": "Interior design",
      },
    },
    de: {
      nav: { services: "Leistungen", process: "Ablauf", projects: "Projekte", about: "Über uns", faq: "FAQ", contact: "Kontakt" },
      heads: { services: "Leistungen", process: "Ablauf", about: "Über uns", contact: "Kontakt", projects: "Projekte", testimonials: "Stimmen", faq: "FAQ", whyus: "Warum wir" },
      common: { viewAll: "Alle ansehen" },
      theme: { toggle: "Thema wechseln" },
      contact: {
        reach: "Kontaktdaten",
        phone: "Telefon",
        email: "E‑Mail",
        area: "Gebiet - Novi Sad, Belgrad und Umgebung",
        hint: "Anfrage per E‑Mail oder hier",
        fullName: "Vollständiger Name *",
        phoneF: "Telefon *",
        emailF: "E‑Mail *",
        city: "Stadt *",
        type: "Projekttyp *",
        measures: "Maße vorhanden *",
        dims: "Maße",
        desc: "Projektbeschreibung *",
        deadline: "Frist",
        budget: "Budget",
        images: "Bilder: max. 10pcs - bis 5MB",
        consent: "Ich stimme der Kontaktaufnahme zu",
        submit: "Anfrage senden",
        call: "Anrufen",
        successTitle: "Danke! Anfrage gesendet",
        successText: "Wir melden uns bald",
        errReq: "Bitte Pflichtfelder ausfüllen",
        errSend: "Fehler — bitte erneut versuchen",
        fallback: "Bilder können später per E‑Mail geschickt werden",
      },
      services: [
        { title: "Küchen", text: "Individuelle Planung und Fertigung - klar und funktional" },
        { title: "Schränke / Garderoben", text: "Schiebe- oder Drehtüren - Platz optimal genutzt" },
        { title: "Kommoden / Regale", text: "Für Wohn-, Flur- und Schlafzimmer - klare Linien" },
        { title: "Büros", text: "Schreibtische, Regale, Schränke — ordentlich" },
        { title: "TV‑Wände", text: "Verdeckte Kabel - klares Erscheinungsbild" },
        { title: "Innenraumgestaltung", text: "Einzelstücke oder komplette Einrichtung" },
      ],
      process: [
        { t: "Projektaufnahme", d: "Raumanalyse (vor Ort oder per Anfrage) und Anforderungserhebung" },
        { t: "Designvorschlag", d: "Konzept, Materialwahl und erste Richtung" },
        { t: "Kostenvoranschlag", d: "Skizze und transparente Kostenübersicht" },
        { t: "Finalisierung", d: "Freigegebenes Modell, Zeitplan und Angebot" },
        { t: "Anzahlung & Start", d: "Anzahlung (Material + Kosten) und Produktionsbeginn" },
        { t: "Produktion & Montage", d: "Fertigung, Lieferung und Montage vor Ort" },
        { t: "Abnahme", d: "Abschließende Prüfung und Übergabe" },
      ],
      types: {
        "Kuhinje": "Küchen",
        "Plakari i garderoberi": "Schränke",
        "Komode i police": "Kommoden & Regale",
        "Zidni paneli": "TV‑Wände",
        "Kancelarijski nameštaj": "Büros",
        "Uređenje enterijera": "Innenraumgestaltung",
      },
    },
    ru: {
      nav: { services: "Услуги", process: "Процесс", projects: "Проекты", about: "О нас", faq: "FAQ", contact: "Контакты" },
      heads: { services: "Услуги", process: "Процесс", about: "О нас", contact: "Контакты", projects: "Проекты", testimonials: "Отзывы", faq: "FAQ", whyus: "Почему мы" },
      common: { viewAll: "Смотреть все" },
      theme: { toggle: "Сменить тему" },
      contact: {
        reach: "Контакты",
        phone: "Телефон",
        email: "Email",
        area: "Регион - Нови-Сад, Белград и окрестности",
        hint: "Пишите на email или через форму",
        fullName: "Имя и фамилия *",
        phoneF: "Телефон *",
        emailF: "Email *",
        city: "Город *",
        type: "Тип проекта *",
        measures: "Есть размеры *",
        dims: "Размеры",
        desc: "Описание проекта *",
        deadline: "Срок",
        budget: "Бюджет",
        images: "Изображения — до 10 — по 5MB",
        consent: "Согласен на контакт",
        submit: "Отправить заявку",
        call: "Позвонить",
        successTitle: "Спасибо! Заявка отправлена",
        successText: "Мы свяжемся скоро",
        errReq: "Заполните обязательные поля",
        errSend: "Ошибка — попробуйте снова",
        fallback: "Изображения можно отправить позже ответом на письмо",
      },
      services: [
        { title: "Кухни", text: "Индивидуальный дизайн и изготовление - ясно и функционально" },
        { title: "Шкафы / Гардеробные", text: "Раздвижные или распашные - максимум пространства" },
        { title: "Комоды / Полки", text: "Для гостиной, коридора и спальни - чистые линии" },
        { title: "Офисы", text: "Столы, стеллажи, шкафы — аккуратно и удобно" },
        { title: "TV‑стены", text: "Скрытая проводка — аккуратный вид" },
        { title: "Дизайн интерьера", text: "Отдельные предметы или комплексные решения" },
      ],
      process: [
        { t: "Знакомство с проектом", d: "Осмотр пространства (на месте или по заявке) и сбор информации" },
        { t: "Предложение дизайна", d: "Концепция, выбор материалов и направление" },
        { t: "Смета", d: "Эскиз и прозрачный расчёт стоимости" },
        { t: "Финализация", d: "Утверждённая модель, сроки и предложение" },
        { t: "Аванс и старт", d: "Авансовый платёж (материалы + расходы) и начало производства" },
        { t: "Производство и монтаж", d: "Изготовление, доставка и монтаж на месте" },
        { t: "Передача", d: "Финальные проверки и передача" },
      ],
      types: {
        "Kuhinje": "Кухни",
        "Plakari i garderoberi": "Шкафы",
        "Komode i police": "Комоды и полки",
        "Zidni paneli": "TV‑стены",
        "Kancelarije": "Офисы",
        "Uređenje enterijera": "Дизайн интерьера",
      },
    },
  };

  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    try {
      initTheme();
      initLangDropdown();
      await safeLoadContent();

     renderHeader();
      renderHero();
      renderServices();
      renderPortfolioPreview();
      renderContact();
      renderFooter();
      initPriceCalculator();
      localizeCalculatorUI();

      // /projekti/ page
      renderProjectsPage();

      wireProjectsModal();

      injectSEO();
      wireNav();
      wireLightbox();
    } catch (e) {
      console.error(e);
    }
  }

  // ---------- helpers ----------
  function qs(sel) { return document.querySelector(sel); }
  function telHref(phone) { return "tel:" + String(phone || "").replace(/\s+/g, ""); }

  function asset(p) {
    const s = String(p || "");
    if (!s) return "";
    if (/^https?:\/\//i.test(s)) return s;
    const clean = s.replace(/^\.?\//, "").replace(/^\/+/, "");
    return base(clean);
  }

function esc(s) {
  return String(s ?? "")
    .replace(/&(?!(?:[a-z\d]+|#\d+|#x[a-f\d]+);)/gi, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

  

  function localize(val) {
    return typeof val === "string" ? val : (val && (val[state.lang] || val.sr)) || "";
  }

  // ---------- lang ----------
 function getLang() {
  const stored = localStorage.getItem("lang");
  const def = cfg.DEFAULT_LANG || "sr";
  return stored && UI[stored] ? stored : def;
}

function setLang(lang) {
  const next = UI[lang] ? lang : (cfg.DEFAULT_LANG || "sr");
  localStorage.setItem("lang", next);
  state.lang = next;
}

function initLangDropdown() {
  setLang(getLang());

 const toggle = qs("#langToggle");
  const menu = qs("#langMenu");
  const labelEl = qs("#langLabel");

  const flags = { sr: "🇷🇸", en: "🇬🇧", de: "🇩🇪", ru: "🇷🇺" };
  const labels = { sr: "Jezik", en: "Language", de: "Sprache", ru: "Язык" };
  const abbr = { sr: "RS", en: "EN", de: "DE", ru: "RU" };

  function applyLabel() {
    if (labelEl) {
      labelEl.textContent = `${labels[state.lang] || "Jezik"}: ${flags[state.lang] || "🇷🇸"} ${abbr[state.lang] || "RS"}`;
    }
  }

  function openMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("hidden");
    if (toggle.parentElement) toggle.parentElement.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.add("hidden");
    if (toggle.parentElement) toggle.parentElement.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function isOpen() {
    return menu && !menu.classList.contains("hidden");
  }

  applyLabel();

  if (!toggle || !menu) return;

  // Tip dugmeta (da ne submituje formu slučajno)
  toggle.type = "button";

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen()) closeMenu();
    else openMenu();
  });

  // Klik van menija zatvara
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!isOpen()) return;
    if (toggle.contains(t) || menu.contains(t)) return;
    closeMenu();
  });

  // ESC zatvara
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) closeMenu();
  });

  // Klik na stavku jezika
  menu.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = item.getAttribute("data-lang") || "sr";
      if (lang === state.lang) {
        closeMenu();
        return;
      }
      setLang(lang);

      // Najstabilnije: reload, jer ti ceo content loader koristi state.lang pri init-u.
      // (Ako kasnije hoćeš "bez reload", mogu ti dati varijantu sa re-renderom svega.)
      location.reload();
    });
  });
}
  // ---------- theme ----------
function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved ? saved : (prefersDark ? "dark" : "light");

  applyTheme(initial);

  const btn = qs("#themeToggle");
  if (!btn) return;

  btn.type = "button";

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("theme-dark");
    const next = isDark ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  }, { passive: true });
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  const root = document.documentElement;

  root.classList.toggle("theme-dark", isDark);
  root.setAttribute("data-theme", isDark ? "dark" : "light");

  const light = qs("#iconLight");
  const dark = qs("#iconDark");
  const btn = qs("#themeToggle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  if (light && dark) {
    if (isDark) {
      light.classList.add("hidden");
      dark.classList.remove("hidden");
    } else {
      dark.classList.add("hidden");
      light.classList.remove("hidden");
    }
  }

  if (btn) {
    const themeText = UI[state.lang] && UI[state.lang].theme && UI[state.lang].theme.toggle
      ? UI[state.lang].theme.toggle
      : "Promeni temu";

    btn.setAttribute("aria-label", themeText);
    btn.setAttribute("title", isDark ? `${themeText} — svetla tema` : `${themeText} — tamna tema`);
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  if (metaTheme) {
    metaTheme.setAttribute("content", isDark ? "#0D1113" : "#0B3D3A");
  }
}
  // ---------- content ----------
  async function safeLoadContent() {
    const langFile = state.lang === "sr" ? base("content/site.json") : base(`content/site.${state.lang}.json`);
    state.site =
      (await tryFetchJson(langFile)) ||
      (await tryFetchJson(base("content/site.json"))) ||
      defaultSite();

    const pj = await tryFetchJson(base("content/projects.json"));
    state.projects = (pj && pj.projects) || [];
  }

  async function tryFetchJson(url) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  function defaultSite() {
    return {
      hero: {
  title: "Dizajn enterijera & Nameštaj po meri - Vasiljević",
  subtitle: "Kuhinje, plakari, komode, police, zidni paneli, kancelarijski nameštaj",
  ctaPrimary: "Pošalji upit",
  ctaSecondary: "Pogledaj projekte",
        benefits: [
          { title: "Jasan predračun", text: "Sve stavke na jednom mestu." },
          { title: "Realni rokovi", text: "Klijent nam je na prvom mestu" },
          { title: "Kultura rada", text: "Uredna montaža i komunikacija, prostor ostavljamo u čistijem stanju nego kako smo ga zatekli" },
        ],
      },
      services: [],
      process: [],
      whyUs: [],
      testimonials: [],
      faq: [],
    };
  }

  // ---------- render: header ----------
  function renderHeader() {
    const phone = cfg.CONTACT_PHONE || "+381 64 122 04 29";
    const h = qs("#headerPhone");
    if (h) { h.textContent = phone; h.href = telHref(phone); }
    const m = qs("#headerPhoneMobile");
    if (m) m.href = telHref(phone);

  const nav = UI[state.lang].nav;
    ["Services", "Projects", "About", "Contact"].forEach((k) => {
      const el = qs("#nav" + k);
      if (el) el.textContent = nav[k.toLowerCase()];
      const fl = qs("#foot" + k);
      if (fl) fl.textContent = nav[k.toLowerCase()];
    });
    
    const themeBtn = qs("#themeToggle");
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", UI[state.lang].theme.toggle);
      themeBtn.setAttribute("title", UI[state.lang].theme.toggle);
      themeBtn.type = "button";
    }
    const langBtn = qs("#langToggle");
    if (langBtn) langBtn.type = "button";

    const heads = UI[state.lang].heads;
    const ids = { labelServices: "services", labelProcess: "process", labelAbout: "about", labelContact: "contact" };
    Object.entries(ids).forEach(([id, key]) => {
      const el2 = qs("#" + id);
      if (el2) el2.textContent = heads[key];
    });

    const cta = qs("#ctaHeader");
    if (cta && state.lang !== "sr") cta.textContent = UI[state.lang].contact.submit;
  }

  // ---------- render: hero ----------
function renderHero() {
  const c = state.site && state.site.hero;
  const el = qs("#hero");
  if (!c || !el) return;

  const logoLight = asset("assets/img/logo-stolarija-light.png");
  const logoDark = asset("assets/img/logo-stolarija-dark.png");

  const fallbackHero = {
    sr: {
      chip: "Nameštaj & enterijer po meri",
      brand: "Stolarija Vasiljević",
      subtitle: "Kuhinje, plakari, komode i enterijerska rešenja po meri za dom i poslovni prostor.",
      note: "Jasan predračun, realni rokovi i uredna montaža — bez komplikacije i bez iznenađenja."
    },
    en: {
      chip: "Custom furniture & interiors",
      brand: "Stolarija Vasiljević",
      subtitle: "Kitchens, wardrobes, sideboards and made-to-measure interior solutions for homes and business spaces.",
      note: "Clear quotation, realistic deadlines and clean installation — without complications and without surprises."
    },
    de: {
      chip: "Maßmöbel & Innenraumlösungen",
      brand: "Stolarija Vasiljević",
      subtitle: "Küchen, Schränke, Kommoden und maßgefertigte Innenraumlösungen für Wohn- und Geschäftsräume.",
      note: "Klarer Kostenvoranschlag, realistische Fristen und saubere Montage — ohne Komplikationen und ohne Überraschungen."
    },
    ru: {
      chip: "Мебель и интерьер на заказ",
      brand: "Stolarija Vasiljević",
      subtitle: "Кухни, шкафы, комоды и интерьерные решения по индивидуальным размерам для дома и коммерческих пространств.",
      note: "Понятный расчет, реальные сроки и аккуратный монтаж — без лишней сложности и без сюрпризов."
    }
  };

  const heroCopy = fallbackHero[state.lang] || fallbackHero.sr;

  const brand = (c.brand && localize(c.brand)) || heroCopy.brand;
  const subtitle = c.subtitle || heroCopy.subtitle;
  const chip = (c.kicker && localize(c.kicker)) || heroCopy.chip;
  const note = (c.note && localize(c.note)) || heroCopy.note;
  const primaryCta = c.ctaPrimary || UI[state.lang].contact.submit;

  el.innerHTML = `
    <div class="container mx-auto px-4">
      <div class="hero-layout">
        <div class="hero-copy">
          <div class="hero-chip hero-reveal">
            <span class="hero-chip-dot"></span>
            <span>${esc(chip)}</span>
          </div>

          <h1 class="hero-brand font-serif hero-reveal hero-reveal-delay-1">
            ${esc(brand)}
          </h1>

          <p class="hero-subcopy hero-reveal hero-reveal-delay-2">
            ${esc(subtitle)}
          </p>

          <div class="hero-actions hero-reveal hero-reveal-delay-3">
            <a href="#kontakt" class="btn btn-primary">
              ${esc(primaryCta)}
            </a>
          </div>

          <p class="hero-note hero-reveal hero-reveal-delay-3">
            ${esc(note)}
          </p>

          <div class="grid sm:grid-cols-3 gap-4 hero-metrics">
            ${(c.benefits || []).slice(0, 3).map((b, i) => `
              <div class="hero-metric-card hero-reveal hero-reveal-delay-${Math.min(i + 2, 4)}">
                <div class="title">${esc(b.title || "")}</div>
                <div class="text">${esc(b.text || "")}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="hero-logo-panel hero-reveal hero-reveal-delay-2" aria-hidden="true">
          <img src="${logoLight}" alt="" class="hero-logo-image hero-logo-light" loading="eager" decoding="async">
          <img src="${logoDark}" alt="" class="hero-logo-image hero-logo-dark" loading="eager" decoding="async">
        </div>
      </div>
    </div>
  `;
}

  // ---------- render: services ----------
  function renderServices() {
    const host = qs("#usluge .container");
    if (!host) return;

    const list = (state.site && state.site.services && state.site.services.length) ? state.site.services : UI[state.lang].services;
    const head = UI[state.lang].heads.services;

    host.innerHTML = `
      <h2 class="section-title font-serif">${esc(head)}</h2>
      <div class="grid md:grid-cols-3 gap-6">
        ${list.slice(0, 6).map((s) => `
          <div class="card p-6 hover:shadow-lg transition-shadow">
            <div class="text-xl font-medium mb-2">${esc(s.title || "")}</div>
            <div class="text-gray-700">${esc(s.text || "")}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  // ---------- render: process ----------
function renderProcess() {
    const mount = qs("#processMount");
    const headEl = qs("#labelProcess");
    if (!mount) return;

    if (headEl) headEl.textContent = "";

    const copy = {
      sr: {
        kicker: "Kako radimo",
        title: 'Radimo u 6 koraka, <span class="is-italic">bez iznenađenja.</span>',
        subtitle: "Tok rada koji štiti vaše vreme i čini odluke jasnijim.",
        steps: [
          { no: "01", title: "Upit", desc: "Osnovne informacije o prostoru i očekivanjima", icon: "clipboard" },
          { no: "02", title: "Konsultacija", desc: "Razgovor o funkciji, materijalima i budžetu", icon: "chat" },
          { no: "03", title: "Procena", desc: "Konkretno rešenje i ponuda sa cenom", icon: "calculator" },
          { no: "04", title: "Merenje", desc: "Uzimanje dimenzija na lokaciji", icon: "ruler" },
          { no: "05", title: "Izrada", desc: "Priprema materijala u radionici", icon: "hammer" },
          { no: "06", title: "Montaža", desc: "Ugradnja i predaja završenog projekta", icon: "box" }
        ]
      },
      en: {
        kicker: "How we work",
        title: 'We work in 6 steps, <span class="is-italic">without surprises.</span>',
        subtitle: "A workflow that protects your time and makes decisions clearer.",
        steps: [
          { no: "01", title: "Inquiry", desc: "Basic information about the space and expectations", icon: "clipboard" },
          { no: "02", title: "Consultation", desc: "Discussion about function, materials and budget", icon: "chat" },
          { no: "03", title: "Estimate", desc: "A concrete solution and a quote with pricing", icon: "calculator" },
          { no: "04", title: "Measurement", desc: "Taking dimensions on site", icon: "ruler" },
          { no: "05", title: "Production", desc: "Material preparation in the workshop", icon: "hammer" },
          { no: "06", title: "Installation", desc: "Fitting and handover of the completed project", icon: "box" }
        ]
      },
      de: {
        kicker: "So arbeiten wir",
        title: 'Wir arbeiten in 6 Schritten, <span class="is-italic">ohne Überraschungen.</span>',
        subtitle: "Ein Ablauf, der Ihre Zeit schützt und Entscheidungen klarer macht.",
        steps: [
          { no: "01", title: "Anfrage", desc: "Grundinformationen über Raum und Erwartungen", icon: "clipboard" },
          { no: "02", title: "Beratung", desc: "Gespräch über Funktion, Materialien und Budget", icon: "chat" },
          { no: "03", title: "Einschätzung", desc: "Konkrete Lösung und Angebot mit Preis", icon: "calculator" },
          { no: "04", title: "Aufmaß", desc: "Maßaufnahme vor Ort", icon: "ruler" },
          { no: "05", title: "Fertigung", desc: "Vorbereitung der Materialien in der Werkstatt", icon: "hammer" },
          { no: "06", title: "Montage", desc: "Einbau und Übergabe des fertigen Projekts", icon: "box" }
        ]
      },
      ru: {
        kicker: "Как мы работаем",
        title: 'Работаем в 6 этапов, <span class="is-italic">без сюрпризов.</span>',
        subtitle: "Понятный процесс, который экономит ваше время и упрощает решения.",
        steps: [
          { no: "01", title: "Запрос", desc: "Основная информация о пространстве и ожиданиях", icon: "clipboard" },
          { no: "02", title: "Консультация", desc: "Обсуждение функции, материалов и бюджета", icon: "chat" },
          { no: "03", title: "Оценка", desc: "Конкретное решение и предложение с ценой", icon: "calculator" },
          { no: "04", title: "Замер", desc: "Снятие размеров на объекте", icon: "ruler" },
          { no: "05", title: "Изготовление", desc: "Подготовка материалов в мастерской", icon: "hammer" },
          { no: "06", title: "Монтаж", desc: "Установка и передача готового проекта", icon: "box" }
        ]
      }
    };

    const L = copy[state.lang] || copy.sr;

    mount.innerHTML = `
      <div class="process-head">
        <div class="process-kicker process-reveal">${esc(L.kicker)}</div>
        <h2 class="process-title font-serif process-reveal process-reveal-delay-1">${L.title}</h2>
        <p class="process-subtitle process-reveal process-reveal-delay-2">${esc(L.subtitle)}</p>
      </div>

      <div class="process-flow-grid">
        ${L.steps.map((step, index) => `
          <div class="process-cell process-reveal process-reveal-delay-${Math.min(index + 1, 6)}">
            <div class="process-cell-card">
              <div class="process-cell-icon" aria-hidden="true">
                ${getProcessIcon(step.icon)}
              </div>
              <div class="process-cell-no">${esc(step.no)}</div>
              <div class="process-cell-title">${esc(step.title)}</div>
              <div class="process-cell-desc">${esc(step.desc)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function getProcessIcon(name) {
    const icons = {
      clipboard: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 4.75h6M9.75 3h4.5a1 1 0 0 1 1 1v1h1.75A1.75 1.75 0 0 1 18.75 6.75v11.5A1.75 1.75 0 0 1 17 20H7A1.75 1.75 0 0 1 5.25 18.25V6.75A1.75 1.75 0 0 1 7 5h1.75V4a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 9.5h6M9 13h4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      `,
      chat: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7 17.25 3.75 20V6.75A1.75 1.75 0 0 1 5.5 5h13A1.75 1.75 0 0 1 20.25 6.75v7.5A1.75 1.75 0 0 1 18.5 16H8.1L7 17.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 9h8M8 12.5h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      `,
      calculator: `
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="6" y="3.75" width="12" height="16.5" rx="2" stroke="currentColor" stroke-width="1.6"/>
          <path d="M8.75 7h6.5M9 11.25h.01M12 11.25h.01M15 11.25h.01M9 14.25h.01M12 14.25h.01M15 14.25h.01M9 17.25h.01M12 17.25h.01M15 17.25h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `,
      ruler: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M14.5 4.5 19.5 9.5 9 20H4v-5L14.5 4.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M13 6l5 5M7.8 16.2l1.6-1.6M10.5 13.5l1.4-1.4M13.2 10.8l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      `,
      hammer: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M14.2 5.2a3.6 3.6 0 0 1 5.1 0l.5.5-3 3-.5-.5a3.6 3.6 0 0 1-2.1-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M13.2 7.2 5 15.4V19h3.6l8.2-8.2M10.5 4.5l9 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      box: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 3.75 19 7.5 12 11.25 5 7.5 12 3.75Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M19 7.5v9L12 20.25 5 16.5v-9M12 11.25v9" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        </svg>
      `
    };

    return icons[name] || icons.clipboard;
  }


  function getProcessIcon(name) {
    const icons = {
      clipboard: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 4.75h6M9.75 3h4.5a1 1 0 0 1 1 1v1h1.75A1.75 1.75 0 0 1 18.75 6.75v11.5A1.75 1.75 0 0 1 17 20H7A1.75 1.75 0 0 1 5.25 18.25V6.75A1.75 1.75 0 0 1 7 5h1.75V4a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 9.5h6M9 13h4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      `,
      chat: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7 17.25 3.75 20V6.75A1.75 1.75 0 0 1 5.5 5h13A1.75 1.75 0 0 1 20.25 6.75v7.5A1.75 1.75 0 0 1 18.5 16H8.1L7 17.25Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 9h8M8 12.5h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      `,
      calculator: `
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="6" y="3.75" width="12" height="16.5" rx="2" stroke="currentColor" stroke-width="1.6"/>
          <path d="M8.75 7h6.5M9 11.25h.01M12 11.25h.01M15 11.25h.01M9 14.25h.01M12 14.25h.01M15 14.25h.01M9 17.25h.01M12 17.25h.01M15 17.25h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `,
      ruler: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M14.5 4.5 19.5 9.5 9 20H4v-5L14.5 4.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M13 6l5 5M7.8 16.2l1.6-1.6M10.5 13.5l1.4-1.4M13.2 10.8l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      `,
      hammer: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M14.2 5.2a3.6 3.6 0 0 1 5.1 0l.5.5-3 3-.5-.5a3.6 3.6 0 0 1-2.1-3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M13.2 7.2 5 15.4V19h3.6l8.2-8.2M10.5 4.5l9 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `,
      box: `
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 3.75 19 7.5 12 11.25 5 7.5 12 3.75Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="M19 7.5v9L12 20.25 5 16.5v-9M12 11.25v9" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
        </svg>
      `
    };

    return icons[name] || icons.clipboard;
  }
  // ---------- render: why us ----------
  function renderWhyUs() {
    const items = (state.site && state.site.whyUs) ? state.site.whyUs : [];
    const el = qs("#whyus");
    if (!el) return;

    const head = UI[state.lang].heads.whyus;
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">${esc(head)}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          ${items.map((it) => `
            <div class="card p-6 hover:shadow-lg transition-shadow">
              <div class="text-xl font-medium mb-2">${esc(it.title || "")}</div>
              <div class="text-gray-700">${esc(it.text || "")}</div>
            </div>
          `).join("")}
        </div>
        <p class="text-sm text-gray-600 mt-4">${state.lang === "sr"
          ? ""
          : state.lang === "en"
            ? ""
            : state.lang === "de"
              ? ""
              : ""}</p>
      </div>`;
  }

  // ---------- landing preview (8 cards + CTA) ----------
function renderPortfolioPreview() {
  const el = qs("#portfolioPreview");
  if (!el) return;

  const list = (state.projects || []).slice(0, 8);
  const typeMap = UI[state.lang].types || {};

  // Opcija A: cover na kartici = final (images[1]) ako postoji, inače images[0]
  const cover = (p) => {
    const imgs = Array.isArray(p.images) ? p.images : [];
    const path = (imgs.length > 1 && imgs[1]) ? imgs[1] : (imgs[0] || "images/ph2.svg");
    return asset(path);
  };

  const projectsUrl = base("projekti/");

  el.innerHTML = `
    <div class="container">
      <div class="flex items-center justify-between mb-6">
        <h2 class="section-title font-serif">${esc(UI[state.lang].heads.projects || "Projekti")}</h2>
        <a href="${projectsUrl}" class="text-brand-dark font-medium hover:underline">
          ${esc(UI[state.lang].common.viewAll)}
        </a>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        ${list.map((p) => {
          const img = cover(p);
          const typeTxt = typeMap[p.type] || p.type || "";
          const t = localize(p.title);
          const d = localize(p.description);

          return `
            <button class="card overflow-hidden text-left preview-btn" data-img="${img}" type="button">
              <div class="relative w-full h-40 bg-brand-light">
                <img src="${img}" alt="${esc(t)}" class="w-full h-40 object-cover" loading="lazy" decoding="async" />
              </div>
              <div class="p-4">
                <div class="text-sm text-gray-500">${esc(typeTxt)} · ${esc(p.location || "")}</div>
                <div class="font-medium">${esc(t)}</div>
                ${d ? `<p class="text-sm text-gray-600 mt-1">${esc(d)}</p>` : ``}
              </div>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

  // ---------- testimonials ----------
  function renderTestimonials() {
    const items = (state.site && state.site.testimonials) ? state.site.testimonials : [];
    const el = qs("#testimonials");
    if (!el) return;

    const head = UI[state.lang].heads.testimonials || "Utisci";
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">${esc(head)}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          ${items.map((t) => `
            <div class="card p-6">
              <div class="text-gray-700 mb-3">${esc(t.text || "")}</div>
              <div class="text-sm font-medium text-gray-900">${esc(t.name || "")}</div>
              ${t.date ? `<div class="text-xs text-gray-500 mt-1">${esc(formatDate(t.date))}</div>` : ``}
            </div>
          `).join("")}
        </div>
      </div>`;
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      if (state.lang === "en") return d.toLocaleDateString("en-GB");
      if (state.lang === "de") return d.toLocaleDateString("de-DE");
      if (state.lang === "ru") return d.toLocaleDateString("ru-RU");
      return d.toLocaleDateString("sr-RS");
    } catch {
      return iso;
    }
  }

  // ---------- FAQ ----------
  function renderFAQ() {
    const items = (state.site && state.site.faq) ? state.site.faq : [];
    const el = qs("#faq");
    if (!el) return;

    const head = UI[state.lang].heads.faq || "FAQ";
    el.innerHTML = `
      <div class="container">
        <h2 class="section-title font-serif">${esc(head)}</h2>
        <div class="space-y-3">
          ${items.map((it, i) => `
            <div class="card">
              <button data-i="${i}" class="w-full text-left px-5 py-4 flex justify-between items-center faq-toggle" type="button">
                <span class="font-medium">${esc(it.q || "")}</span>
                <span class="text-gray-500">+</span>
              </button>
              <div class="px-5 pb-5 text-gray-700 hidden faq-a">${esc(it.a || "")}</div>
            </div>
          `).join("")}
        </div>
      </div>`;

    el.querySelectorAll(".faq-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const a = btn.parentElement.querySelector(".faq-a");
        const sym = btn.querySelector("span.text-gray-500");
        const isHidden = a.classList.contains("hidden");
        el.querySelectorAll(".faq-a").forEach((x) => { if (x !== a) x.classList.add("hidden"); });
        el.querySelectorAll(".faq-toggle span.text-gray-500").forEach((x) => { if (x !== sym) x.textContent = "+"; });
        a.classList.toggle("hidden");
        sym.textContent = isHidden ? "−" : "+";
      });
    });
  }

  // ---------- contact/footer ----------
  function renderContact() {
    const L = UI[state.lang].contact;
    const phone = cfg.CONTACT_PHONE || "+381 64 122 04 29";
    const email = cfg.CONTACT_EMAIL || "strahinjavasiljevic00@gmail.com";

    setText("#labelReachUs", L.reach);
    setText("#labelPhone", L.phone);
    setText("#labelEmail", L.email);
    setText("#labelArea", L.area);
    setText("#labelHint", L.hint);
    setText("#labelFullName", L.fullName);
    setText("#labelPhoneField", L.phoneF);
    setText("#labelEmailField", L.emailF);
    setText("#labelCity", L.city);
    setText("#labelType", L.type);
    setText("#labelMeasures", L.measures);
    setText("#labelDims", L.dims);
    setText("#labelDesc", L.desc);
    setText("#labelDeadline", L.deadline);
    setText("#labelBudget", L.budget);
    setText("#labelImages", L.images);
    setText("#labelConsent", L.consent);

    const submitBtn = qs("#submitBtn");
    if (submitBtn) submitBtn.textContent = L.submit;
    const callBtn = qs("#contactPhoneBtn");
    if (callBtn) callBtn.textContent = L.call;

    const phoneEl = qs("#contactPhone");
    const emailEl = qs("#contactEmail");
    const footPhone = qs("#footerPhone");
    const footEmail = qs("#footerEmail");
    if (phoneEl) { phoneEl.textContent = phone; phoneEl.href = telHref(phone); }
    if (emailEl && email) { emailEl.textContent = email; emailEl.href = "mailto:" + email; }
    if (footPhone) { footPhone.textContent = phone; footPhone.href = telHref(phone); }
    if (footEmail && email) { footEmail.textContent = email; footEmail.href = "mailto:" + email; }
  }

  function setText(sel, txt) { const el = qs(sel); if (el) el.textContent = txt; }

  function renderFooter() {
    const nav = UI[state.lang].nav;
    setText("#footContactTitle", nav.contact);
    setText("#footPhoneLabel", UI[state.lang].contact.phone);
    setText("#footEmailLabel", UI[state.lang].contact.email);
    setText("#footArea", UI[state.lang].contact.area);
  }
// ---------- calculator UI localization ----------
  const CALC_UI = {
    sr: {
      kicker: "Premium kalkulator cene",
      title: "Saznajte okvirnu cenu projekta za manje od 30 sekundi",
      intro: "Unesite osnovne podatke i dobićete realan cenovni raspon na osnovu tipa projekta, materijala, okova i dodatne opreme. Kalkulator je namenjen okvirnoj proceni — tačna cena zavisi od finalnih mera, izabranih detalja i montaže.",

      labelProject: "1. Tip projekta",
      kitchenTitle: "Kuhinja",
      kitchenSub: "Najčešće viši nivo opreme i više detalja",
      wardrobeTitle: "Plakar",
      wardrobeSub: "Klizna ili krilna vrata, garderobni sistemi",
      commodeTitle: "TV komoda / komoda",
      commodeSub: "Kompaktniji projekti sa manjom dubinom",

      labelWidth: "2. Širina (m)",
      widthHelp: "Unesite ukupnu širinu projekta u metrima.",
      labelHeight: "3. Visina (m)",
      heightHelp: "Za komode možete uneti realnu visinu elementa.",

      labelMaterial: "4. Materijal",
      materialBasic: "Bela iverica — ekonomično",
      materialStandard: "Dekor / Egger — standard",
      materialPremium: "MDF / lakirano / furnir — premium",
      materialHelp: "Materijal je glavni faktor formiranja cene.",

      labelHardware: "5. Okovi",
      hardwareStandard: "Standard soft-close",
      hardwarePremium: "Premium okovi (Blum / Hettich)",

      labelExtras: "6. Dodatna oprema",
      extraLedTitle: "LED rasveta",
      extraLedSub: "Dodatni vizuelni efekat i funkcionalnost",
      extraDrawersTitle: "Unutrašnje fioke",
      extraDrawersSub: "Bolja organizacija i veća vrednost projekta",
      extraOrgTitle: "Organizatori / unutrašnja oprema",
      extraOrgSub: "Premium osećaj i viši nivo završne obrade",
      extraSlidingTitle: "Klizni sistem",
      extraSlidingSub: "Posebno relevantno za plakare i garderobere",

      labelBudgetLevel: "7. Planirani budžet",
      budgetUnknown: "Nisam siguran još",
      budgetLow: "Do 1000€",
      budgetMid: "1000€ – 3000€",
      budgetHigh: "3000€+",

      submit: "Izračunaj okvirnu cenu",
      reset: "Resetuj",

      badge: "Okvirna procena",
      resultTitle: "Procena investicije",
      listArea: "Površina za obračun",
      listFinish: "Nivo obrade",
      listRecommendation: "Preporuka",

      anchorTitle: "Prosečna vrednost naših projekata",
      anchorText: "Najčešći projekti se kreću u rasponu od 1.500€ do 4.500€, u zavisnosti od materijala, unutrašnje opreme i složenosti izrade.",

      quote: "Zatraži tačnu ponudu",
      call: "Pozovi za konsultaciju",

      disclaimer: "Ovo je informativna procena. Konačna cena zavisi od preciznih mera, odabranih detalja, završne obrade, transporta i montaže."
    },

    en: {
      kicker: "Premium price calculator",
      title: "Get an estimated project price in less than 30 seconds",
      intro: "Enter the basic project details and get a realistic price range based on project type, materials, hardware and additional features. This calculator provides an approximate estimate — the final quote depends on exact measurements, selected details and installation.",

      labelProject: "1. Project type",
      kitchenTitle: "Kitchen",
      kitchenSub: "Usually a higher equipment level and more details",
      wardrobeTitle: "Wardrobe",
      wardrobeSub: "Sliding or hinged doors, wardrobe systems",
      commodeTitle: "TV sideboard / cabinet",
      commodeSub: "More compact projects with smaller depth",

      labelWidth: "2. Width (m)",
      widthHelp: "Enter the total project width in meters.",
      labelHeight: "3. Height (m)",
      heightHelp: "For sideboards, you can enter the real cabinet height.",

      labelMaterial: "4. Material",
      materialBasic: "White chipboard — budget",
      materialStandard: "Decor / Egger — standard",
      materialPremium: "MDF / lacquered / veneer — premium",
      materialHelp: "Material is the main pricing driver.",

      labelHardware: "5. Hardware",
      hardwareStandard: "Standard soft-close",
      hardwarePremium: "Premium hardware (Blum / Hettich)",

      labelExtras: "6. Additional features",
      extraLedTitle: "LED lighting",
      extraLedSub: "Additional visual effect and functionality",
      extraDrawersTitle: "Inner drawers",
      extraDrawersSub: "Better organization and higher project value",
      extraOrgTitle: "Organizers / internal accessories",
      extraOrgSub: "Premium feel and higher finishing level",
      extraSlidingTitle: "Sliding system",
      extraSlidingSub: "Especially relevant for wardrobes and closets",

      labelBudgetLevel: "7. Planned budget",
      budgetUnknown: "Not sure yet",
      budgetLow: "Up to 1000€",
      budgetMid: "1000€ – 3000€",
      budgetHigh: "3000€+",

      submit: "Calculate estimated price",
      reset: "Reset",

      badge: "Estimated range",
      resultTitle: "Investment estimate",
      listArea: "Calculated area",
      listFinish: "Finish level",
      listRecommendation: "Recommendation",

      anchorTitle: "Average value of our projects",
      anchorText: "Most of our projects fall in the 1,500€ to 4,500€ range, depending on materials, internal fittings and production complexity.",

      quote: "Request an exact quote",
      call: "Call for consultation",

      disclaimer: "This is an informational estimate. Final pricing depends on exact dimensions, selected details, finish, transport and installation."
    },

    de: {
      kicker: "Premium Preisrechner",
      title: "Erhalten Sie in weniger als 30 Sekunden eine Preisindikation",
      intro: "Geben Sie die grundlegenden Projektdaten ein und erhalten Sie eine realistische Preisspanne basierend auf Projekttyp, Material, Beschlägen und Zusatzausstattung. Der Rechner dient zur Orientierung — das endgültige Angebot hängt von exakten Maßen, ausgewählten Details und Montage ab.",

      labelProject: "1. Projekttyp",
      kitchenTitle: "Küche",
      kitchenSub: "Meist höherer Ausstattungsgrad und mehr Details",
      wardrobeTitle: "Schrank",
      wardrobeSub: "Schiebe- oder Drehtüren, Garderobensysteme",
      commodeTitle: "TV-Kommode / Kommode",
      commodeSub: "Kompaktere Projekte mit geringerer Tiefe",

      labelWidth: "2. Breite (m)",
      widthHelp: "Geben Sie die Gesamtbreite des Projekts in Metern ein.",
      labelHeight: "3. Höhe (m)",
      heightHelp: "Bei Kommoden können Sie die tatsächliche Höhe eingeben.",

      labelMaterial: "4. Material",
      materialBasic: "Weiße Spanplatte — wirtschaftlich",
      materialStandard: "Dekor / Egger — Standard",
      materialPremium: "MDF / lackiert / Furnier — Premium",
      materialHelp: "Das Material ist der wichtigste Preisfaktor.",

      labelHardware: "5. Beschläge",
      hardwareStandard: "Standard Soft-Close",
      hardwarePremium: "Premium-Beschläge (Blum / Hettich)",

      labelExtras: "6. Zusatzausstattung",
      extraLedTitle: "LED-Beleuchtung",
      extraLedSub: "Zusätzlicher visueller Effekt und Funktionalität",
      extraDrawersTitle: "Innenschubladen",
      extraDrawersSub: "Bessere Organisation und höherer Projektwert",
      extraOrgTitle: "Organizer / Innenausstattung",
      extraOrgSub: "Premium-Gefühl und höheres Ausstattungsniveau",
      extraSlidingTitle: "Schiebesystem",
      extraSlidingSub: "Besonders relevant für Schränke und Garderoben",

      labelBudgetLevel: "7. Geplantes Budget",
      budgetUnknown: "Noch nicht sicher",
      budgetLow: "Bis 1000€",
      budgetMid: "1000€ – 3000€",
      budgetHigh: "3000€+",

      submit: "Preisspanne berechnen",
      reset: "Zurücksetzen",

      badge: "Preisschätzung",
      resultTitle: "Investitionsschätzung",
      listArea: "Berechnete Fläche",
      listFinish: "Ausstattungsniveau",
      listRecommendation: "Empfehlung",

      anchorTitle: "Durchschnittlicher Projektwert",
      anchorText: "Die meisten unserer Projekte liegen zwischen 1.500€ und 4.500€, abhängig von Material, Innenausstattung und Fertigungskomplexität.",

      quote: "Genaues Angebot anfordern",
      call: "Für Beratung anrufen",

      disclaimer: "Dies ist eine unverbindliche Schätzung. Der endgültige Preis hängt von exakten Maßen, ausgewählten Details, Oberfläche, Transport und Montage ab."
    },

    ru: {
      kicker: "Премиальный калькулятор цены",
      title: "Получите ориентировочную стоимость проекта менее чем за 30 секунд",
      intro: "Введите основные параметры проекта и получите реалистичный ценовой диапазон на основе типа проекта, материалов, фурнитуры и дополнительного оснащения. Калькулятор дает ориентировочную оценку — итоговая цена зависит от точных размеров, выбранных деталей и монтажа.",

      labelProject: "1. Тип проекта",
      kitchenTitle: "Кухня",
      kitchenSub: "Обычно более высокий уровень оснащения и больше деталей",
      wardrobeTitle: "Шкаф",
      wardrobeSub: "Раздвижные или распашные двери, гардеробные системы",
      commodeTitle: "ТВ-комод / комод",
      commodeSub: "Более компактные проекты с меньшей глубиной",

      labelWidth: "2. Ширина (м)",
      widthHelp: "Введите общую ширину проекта в метрах.",
      labelHeight: "3. Высота (м)",
      heightHelp: "Для комодов можно указать фактическую высоту элемента.",

      labelMaterial: "4. Материал",
      materialBasic: "Белая ЛДСП — экономично",
      materialStandard: "Декор / Egger — стандарт",
      materialPremium: "MDF / крашеный / шпон — премиум",
      materialHelp: "Материал — основной фактор формирования цены.",

      labelHardware: "5. Фурнитура",
      hardwareStandard: "Стандарт soft-close",
      hardwarePremium: "Премиальная фурнитура (Blum / Hettich)",

      labelExtras: "6. Дополнительное оснащение",
      extraLedTitle: "LED-подсветка",
      extraLedSub: "Дополнительный визуальный эффект и функциональность",
      extraDrawersTitle: "Внутренние ящики",
      extraDrawersSub: "Лучшая организация и более высокая ценность проекта",
      extraOrgTitle: "Органайзеры / внутренняя комплектация",
      extraOrgSub: "Премиальное ощущение и более высокий уровень отделки",
      extraSlidingTitle: "Раздвижная система",
      extraSlidingSub: "Особенно актуально для шкафов и гардеробных",

      labelBudgetLevel: "7. Планируемый бюджет",
      budgetUnknown: "Пока не уверен",
      budgetLow: "До 1000€",
      budgetMid: "1000€ – 3000€",
      budgetHigh: "3000€+",

      submit: "Рассчитать ориентировочную цену",
      reset: "Сбросить",

      badge: "Ориентировочная оценка",
      resultTitle: "Оценка инвестиций",
      listArea: "Расчетная площадь",
      listFinish: "Уровень отделки",
      listRecommendation: "Рекомендация",

      anchorTitle: "Средняя стоимость наших проектов",
      anchorText: "Большинство наших проектов находятся в диапазоне от 1.500€ до 4.500€, в зависимости от материалов, внутреннего наполнения и сложности изготовления.",

      quote: "Запросить точное предложение",
      call: "Позвонить для консультации",

      disclaimer: "Это ориентировочная оценка. Итоговая цена зависит от точных размеров, выбранных деталей, отделки, логистики и монтажа."
    }
  };

  function localizeCalculatorUI() {
    const L = CALC_UI[state.lang] || CALC_UI.sr;

    setText("#calcKicker", L.kicker);
    setText("#calcTitle", L.title);
    setText("#calcIntroText", L.intro);

    setText("#calcLabelProject", L.labelProject);
    setText("#calcProjectKitchenTitle", L.kitchenTitle);
    setText("#calcProjectKitchenSub", L.kitchenSub);
    setText("#calcProjectWardrobeTitle", L.wardrobeTitle);
    setText("#calcProjectWardrobeSub", L.wardrobeSub);
    setText("#calcProjectCommodeTitle", L.commodeTitle);
    setText("#calcProjectCommodeSub", L.commodeSub);

    setText("#calcLabelWidth", L.labelWidth);
    setText("#calcWidthHelp", L.widthHelp);
    setText("#calcLabelHeight", L.labelHeight);
    setText("#calcHeightHelp", L.heightHelp);

    setText("#calcLabelMaterial", L.labelMaterial);
    setText("#calcMaterialBasic", L.materialBasic);
    setText("#calcMaterialStandard", L.materialStandard);
    setText("#calcMaterialPremium", L.materialPremium);
    setText("#calcMaterialHelp", L.materialHelp);

    setText("#calcLabelHardware", L.labelHardware);
    setText("#calcHardwareStandard", L.hardwareStandard);
    setText("#calcHardwarePremium", L.hardwarePremium);

    setText("#calcLabelExtras", L.labelExtras);
    setText("#calcExtraLedTitle", L.extraLedTitle);
    setText("#calcExtraLedSub", L.extraLedSub);
    setText("#calcExtraDrawersTitle", L.extraDrawersTitle);
    setText("#calcExtraDrawersSub", L.extraDrawersSub);
    setText("#calcExtraOrgTitle", L.extraOrgTitle);
    setText("#calcExtraOrgSub", L.extraOrgSub);
    setText("#calcExtraSlidingTitle", L.extraSlidingTitle);
    setText("#calcExtraSlidingSub", L.extraSlidingSub);

    setText("#calcLabelBudgetLevel", L.labelBudgetLevel);
    setText("#calcBudgetUnknown", L.budgetUnknown);
    setText("#calcBudgetLow", L.budgetLow);
    setText("#calcBudgetMid", L.budgetMid);
    setText("#calcBudgetHigh", L.budgetHigh);

    setText("#calcSubmitBtn", L.submit);
    setText("#calcResetBtn", L.reset);

    setText("#calcBadge", L.badge);
    setText("#calcResultTitle", L.resultTitle);
    setText("#calcListAreaLabel", L.listArea);
    setText("#calcListFinishLabel", L.listFinish);
    setText("#calcListRecommendationLabel", L.listRecommendation);

    setText("#calcAnchorTitle", L.anchorTitle);
    setText("#calcAnchorText", L.anchorText);

    setText("#calcQuoteLink", L.quote);
    setText("#calcCallLink", L.call);

    setText("#calcDisclaimer", L.disclaimer);
  }
  
  // ---------- premium kalkulator ----------
  function initPriceCalculator() {
    const form = qs("#priceCalculator");
    if (!form) return;

    const btn = qs("#calcSubmitBtn");
    const resetBtn = qs("#calcResetBtn");

    const priceRangeEl = qs("#calcPriceRange");
    const summaryEl = qs("#calcSummaryNote");
    const areaEl = qs("#calcAreaValue");
    const finishEl = qs("#calcFinishValue");
    const recEl = qs("#calcRecommendation");

    const projectTypeMapForContact = {
      "kuhinja": "Kuhinje",
      "plakar": "Plakari i garderoberi",
      "tv-komoda": "Komode i police"
    };

    const texts = {
      sr: {
        emptyPrice: "Odaberite parametre",
        emptySummary: "Izaberite tip projekta, dimenzije i nivo materijala kako biste dobili cenovni raspon.",
        invalid: "Unesite realne dimenzije projekta kako bismo mogli da prikažemo okvirnu procenu.",
        area: "m² fronta",
        recommendationEmpty: "Nakon unosa podataka prikazaćemo preporuku",
        finishBasic: "Ekonomična obrada",
        finishStandard: "Standardna obrada",
        finishPremium: "Premium obrada",
        recUnder1000: "Najbolje je fokusirati se na kompaktnije i ekonomičnije rešenje.",
        recMid: "Dobar balans cene, estetike i dugotrajnosti.",
        recHigh: "Preporuka je premium rešenje sa boljim okovima i završnom obradom.",
        recDefault: "Za preciznu ponudu pošaljite dimenzije i željeni izgled projekta.",
        project: {
          "kuhinja": "Kuhinja",
          "plakar": "Plakar",
          "tv-komoda": "TV komoda / komoda"
        },
        material: {
          "basic": "bela iverica",
          "standard": "dekor / Egger",
          "premium": "MDF / lakirano / furnir"
        },
        hardware: {
          "standard": "standard soft-close",
          "premium": "premium okovi"
        }
      },
      en: {
        emptyPrice: "Select your parameters",
        emptySummary: "Choose project type, dimensions and finish level to get an estimated range.",
        invalid: "Please enter realistic project dimensions so we can show an estimate.",
        area: "m² of front area",
        recommendationEmpty: "A recommendation will appear after entering project details",
        finishBasic: "Economy finish",
        finishStandard: "Standard finish",
        finishPremium: "Premium finish",
        recUnder1000: "Focus on a more compact and cost-efficient solution.",
        recMid: "A strong balance between price, aesthetics and durability.",
        recHigh: "We recommend a premium solution with better hardware and finishing.",
        recDefault: "For an exact quote, send dimensions and your preferred visual direction.",
        project: {
          "kuhinja": "Kitchen",
          "plakar": "Wardrobe",
          "tv-komoda": "TV sideboard / cabinet"
        },
        material: {
          "basic": "white chipboard",
          "standard": "decor / Egger",
          "premium": "MDF / lacquered / veneer"
        },
        hardware: {
          "standard": "standard soft-close",
          "premium": "premium hardware"
        }
      },
      de: {
        emptyPrice: "Parameter auswählen",
        emptySummary: "Wählen Sie Projekttyp, Maße und Materialniveau für eine Preisspanne.",
        invalid: "Bitte geben Sie realistische Maße ein, damit wir eine Schätzung anzeigen können.",
        area: "m² Frontfläche",
        recommendationEmpty: "Nach Eingabe der Daten erscheint eine Empfehlung",
        finishBasic: "Basis-Ausführung",
        finishStandard: "Standard-Ausführung",
        finishPremium: "Premium-Ausführung",
        recUnder1000: "Konzentrieren Sie sich auf eine kompaktere und wirtschaftlichere Lösung.",
        recMid: "Gute Balance aus Preis, Ästhetik und Langlebigkeit.",
        recHigh: "Empfohlen ist eine Premium-Lösung mit besseren Beschlägen und Oberfläche.",
        recDefault: "Für ein exaktes Angebot senden Sie Maße und gewünschte Optik.",
        project: {
          "kuhinja": "Küche",
          "plakar": "Schrank",
          "tv-komoda": "TV-Kommode / Kommode"
        },
        material: {
          "basic": "weiße Spanplatte",
          "standard": "Dekor / Egger",
          "premium": "MDF / lackiert / Furnier"
        },
        hardware: {
          "standard": "Standard Soft-Close",
          "premium": "Premium-Beschläge"
        }
      },
      ru: {
        emptyPrice: "Выберите параметры",
        emptySummary: "Выберите тип проекта, размеры и уровень материалов для оценки.",
        invalid: "Введите реалистичные размеры проекта, чтобы получить оценку.",
        area: "м² фасадной площади",
        recommendationEmpty: "После ввода данных появится рекомендация",
        finishBasic: "Базовый уровень",
        finishStandard: "Стандартный уровень",
        finishPremium: "Премиальный уровень",
        recUnder1000: "Лучше ориентироваться на более компактное и экономичное решение.",
        recMid: "Хороший баланс цены, эстетики и долговечности.",
        recHigh: "Рекомендуется премиальное решение с лучшей фурнитурой и отделкой.",
        recDefault: "Для точного расчета отправьте размеры и желаемый стиль.",
        project: {
          "kuhinja": "Кухня",
          "plakar": "Шкаф",
          "tv-komoda": "ТВ-комод / комод"
        },
        material: {
          "basic": "белая ЛДСП",
          "standard": "декор / Egger",
          "premium": "MDF / эмаль / шпон"
        },
        hardware: {
          "standard": "стандарт soft-close",
          "premium": "премиальная фурнитура"
        }
      }
    };

    function t() {
      return texts[state.lang] || texts.sr;
    }

    function eur(n) {
      return new Intl.NumberFormat(
        state.lang === "de" ? "de-DE" :
        state.lang === "ru" ? "ru-RU" :
        state.lang === "en" ? "en-GB" : "sr-RS",
        { maximumFractionDigits: 0 }
      ).format(Math.round(n)) + "€";
    }

    function setDefaultState() {
      if (priceRangeEl) priceRangeEl.textContent = t().emptyPrice;
      if (summaryEl) summaryEl.textContent = t().emptySummary;
      if (areaEl) areaEl.textContent = "—";
      if (finishEl) finishEl.textContent = "—";
      if (recEl) recEl.textContent = t().recommendationEmpty;
    }

    function getSelectedProject() {
      const checked = form.querySelector('input[name="calcProjectType"]:checked');
      return checked ? checked.value : "plakar";
    }

    function getSelectedExtras() {
      return Array.from(form.querySelectorAll('input[name="calcExtras"]:checked')).map((el) => el.value);
    }

    function calculate() {
      const projectType = getSelectedProject();
      const width = parseFloat(form.calcWidth.value || "0");
      const height = parseFloat(form.calcHeight.value || "0");
      const material = form.calcMaterial.value;
      const hardware = form.calcHardware.value;
      const budgetLevel = form.calcBudgetLevel.value;
      const extras = getSelectedExtras();

      if (!width || !height || width < 0.5 || height < 0.4) {
        if (priceRangeEl) priceRangeEl.textContent = t().emptyPrice;
        if (summaryEl) summaryEl.textContent = t().invalid;
        if (areaEl) areaEl.textContent = "—";
        if (finishEl) finishEl.textContent = "—";
        if (recEl) recEl.textContent = t().recommendationEmpty;
        return;
      }

      const area = width * height;

      // Osnovna konkurentna tržišna logika:
      // - baza po m² fronta
      // - korekcija po tipu projekta
      // - okovi i dodaci
      // - minimum projekta da filtrira premale upite
      const materialRates = {
        basic: 130,
        standard: 165,
        premium: 230
      };

      const projectMultipliers = {
        "kuhinja": 1.35,
        "plakar": 1.00,
        "tv-komoda": 0.92
      };

      const minimumProject = {
        "kuhinja": 1200,
        "plakar": 650,
        "tv-komoda": 550
      };

      const hardwareMultiplier = {
        standard: 1.00,
        premium: 1.12
      };

      const extrasFlat = {
        led: 120,
        fioke: 180,
        organizatori: 140,
        klizni: 240
      };

      const extrasProjectAdjustments = {
        led: { "kuhinja": 1.00, "plakar": 1.00, "tv-komoda": 1.00 },
        fioke: { "kuhinja": 1.10, "plakar": 1.00, "tv-komoda": 0.90 },
        organizatori: { "kuhinja": 1.00, "plakar": 1.10, "tv-komoda": 0.85 },
        klizni: { "kuhinja": 0.70, "plakar": 1.00, "tv-komoda": 0.60 }
      };

      let subtotal =
        area *
        materialRates[material] *
        (projectMultipliers[projectType] || 1);

      subtotal *= hardwareMultiplier[hardware] || 1;

      let extrasTotal = 0;
      extras.forEach((extraKey) => {
        const baseExtra = extrasFlat[extraKey] || 0;
        const factor =
          (extrasProjectAdjustments[extraKey] && extrasProjectAdjustments[extraKey][projectType]) || 1;
        extrasTotal += baseExtra * factor;
      });

      subtotal += extrasTotal;

      // complexity fee kad korisnik bira skuplju konfiguraciju
      const premiumSignals =
        (material === "premium" ? 1 : 0) +
        (hardware === "premium" ? 1 : 0) +
        (extras.length >= 2 ? 1 : 0);

      if (premiumSignals >= 2) {
        subtotal *= 1.08;
      }

      subtotal = Math.max(subtotal, minimumProject[projectType] || 500);

      const low = subtotal * 0.93;
      const high = subtotal * 1.12;

      let finishText = t().finishStandard;
      if (material === "basic") finishText = t().finishBasic;
      if (material === "premium") finishText = t().finishPremium;

      let recommendation = t().recDefault;
      if (budgetLevel === "under-1000") recommendation = t().recUnder1000;
      else if (budgetLevel === "1000-3000") recommendation = t().recMid;
      else if (budgetLevel === "3000-plus") recommendation = t().recHigh;

      const projectLabel = (t().project && t().project[projectType]) || projectType;
      const materialLabel = (t().material && t().material[material]) || material;
      const hardwareLabel = (t().hardware && t().hardware[hardware]) || hardware;

      if (priceRangeEl) {
        priceRangeEl.textContent = `${eur(low)} – ${eur(high)}`;
      }

      if (summaryEl) {
        summaryEl.textContent =
          `${projectLabel} dimenzija ${width.toFixed(1)} × ${height.toFixed(1)} m, ` +
          `${materialLabel}, ${hardwareLabel}` +
          `${extras.length ? `, dodatna oprema: ${extras.length}` : ""}.`;
      }

      if (areaEl) {
        areaEl.textContent = `${area.toFixed(2)} ${t().area}`;
      }

      if (finishEl) {
        finishEl.textContent = finishText;
      }

      if (recEl) {
        recEl.textContent = recommendation;
      }

      syncCalculatorToContactForm({
        projectType,
        budgetLevel,
        low,
        high,
        width,
        height
      });
    }

   function syncCalculatorToContactForm(data) {
      const contactType = qs('select[name="projectType"]');
      const contactDims = qs('input[name="dimensions"]');
      const contactBudget = qs('input[name="budget"]');
      const contactDesc = qs('textarea[name="description"]');
      const carryoverBox = qs("#calcCarryoverBox");

      if (contactType && projectTypeMapForContact[data.projectType]) {
        contactType.value = projectTypeMapForContact[data.projectType];
      }

      if (contactDims && !contactDims.value.trim()) {
        contactDims.value = `${data.width.toFixed(1)} x ${data.height.toFixed(1)} m`;
      }

      if (contactBudget && !contactBudget.value.trim()) {
        contactBudget.value = `${eur(data.low)} – ${eur(data.high)}`;
      }

      if (contactDesc && !contactDesc.value.trim()) {
        contactDesc.value =
          state.lang === "en"
            ? "Interested in a precise quote based on the online calculator estimate"
            : state.lang === "de"
              ? "Ich interessiere mich für ein genaues Angebot auf Basis der Online-Kalkulator-Schätzung"
              : state.lang === "ru"
                ? "Интересует точное предложение на основе расчета онлайн-калькулятора"
                : "Zanima me precizna ponuda na osnovu procene iz online kalkulatora";
      }
      if (carryoverBox) {
        const msg =
          state.lang === "en"
            ? `Calculator estimate transferred: ${eur(data.low)} – ${eur(data.high)}. Complete the form for a more precise quote.`
            : state.lang === "de"
              ? `Schätzung aus dem Kalkulator übernommen: ${eur(data.low)} – ${eur(data.high)}. Füllen Sie das Formular für ein genaueres Angebot aus.`
              : state.lang === "ru"
                ? `Оценка из калькулятора перенесена: ${eur(data.low)} – ${eur(data.high)}. Заполните форму для более точного предложения.`
                : `Procena iz kalkulatora je preneta: ${eur(data.low)} – ${eur(data.high)}. Popunite formu za precizniju ponudu.`;

        carryoverBox.textContent = msg;
        carryoverBox.classList.remove("hidden");
      }
    }

    if (btn) {
      btn.addEventListener("click", calculate);
    }

    form.addEventListener("change", () => {
      const hasAnyValue =
        form.calcWidth.value ||
        form.calcHeight.value ||
        form.calcMaterial.value ||
        form.calcHardware.value;
      if (hasAnyValue) calculate();
    });

    form.addEventListener("input", (e) => {
      if (e.target && (e.target.name === "calcWidth" || e.target.name === "calcHeight")) {
        const ready = form.calcWidth.value && form.calcHeight.value;
        if (ready) calculate();
      }
    });

    form.addEventListener("reset", () => {
      setTimeout(() => {
        setDefaultState();
      }, 0);
    });

   if (resetBtn) {
      resetBtn.type = "reset";
    }

    const quoteLink = qs("#calcQuoteLink");
    if (quoteLink) {
      quoteLink.addEventListener("click", (e) => {
        e.preventDefault();
        const target = qs("#kontakt");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    setDefaultState();
  }
  
  // ---------- nav smooth scroll ----------
  function wireNav() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
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

  // ---------- landing lightbox (simple) ----------
  function wireLightbox() {
    const box = qs("#lightbox");
    const img = qs("#lightboxImg");
    const close = qs("#lightboxClose");
    if (!box || !img || !close) return;

    document.body.addEventListener("click", (e) => {
      const btn = e.target.closest(".preview-btn");
      if (btn && btn.dataset.img) {
        img.src = btn.dataset.img;
        box.classList.remove("hidden");
        box.classList.add("flex");
      }
    });

    close.addEventListener("click", () => {
      box.classList.add("hidden");
      box.classList.remove("flex");
      img.src = "";
    });

    box.addEventListener("click", (e) => { if (e.target === box) close.click(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !box.classList.contains("hidden")) close.click();
    });
  }

 // ---------- SEO ----------
function injectSEO() {
  const siteUrl = (window.APP_CONFIG && window.APP_CONFIG.SITE_URL) || "https://strahinjavasiljevic.github.io/Stolarija-Vasiljevic/";
  const phone = (window.APP_CONFIG && window.APP_CONFIG.CONTACT_PHONE) || "+381 64 122 04 29";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stolarija Vasiljević",
    "url": siteUrl,
    "telephone": phone,
    "areaServed": ["Novi Sad", "Beograd", "Ostala mesta"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Novi Sad / Beograd",
      "addressCountry": "RS"
    },
    "founder": [
      { "@type": "Person", "name": "Strahinja Vasiljević" },
      { "@type": "Person", "name": "Nemanja Vasiljević" }
    ],
    "image": siteUrl
      ? `${siteUrl}/assets/img/cover-logo.png`
      : asset("assets/img/cover-logo.png"),
    "sameAs": []
  };

  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.text = JSON.stringify(jsonLd);
  document.head.appendChild(s);
}
  // ==========================================================
  // /projekti/ PAGE: filteri + grid + modal (info panel)
  // ==========================================================

  function renderProjectsPage() {
    const mount = qs("#projectsPageMount");
    if (!mount) return;

    const projects = Array.isArray(state.projects) ? state.projects.slice() : [];
    const typeMap = UI[state.lang].types || {};
    const uniq = (arr) => Array.from(new Set(arr.filter(Boolean)));
    const types = uniq(projects.map((p) => p.type));
    const locs = uniq(projects.map((p) => p.location));

    const url = new URL(location.href);
    let fType = url.searchParams.get("type") || "";
    let fLoc = url.searchParams.get("loc") || "";

    const labelType = state.lang === "sr" ? "Tip" : state.lang === "en" ? "Type" : state.lang === "de" ? "Typ" : "Тип";
    const labelLoc = state.lang === "sr" ? "Lokacija" : state.lang === "en" ? "Location" : state.lang === "de" ? "Ort" : "Локация";
    const labelAll = state.lang === "sr" ? "Sve" : state.lang === "en" ? "All" : state.lang === "de" ? "Alle" : "Все";
    const labelReset = state.lang === "sr" ? "Reset" : state.lang === "en" ? "Reset" : state.lang === "de" ? "Zurücksetzen" : "Сброс";
    const labelCount = state.lang === "sr" ? "projekata" : state.lang === "en" ? "projects" : state.lang === "de" ? "Projekte" : "проектов";

    mount.innerHTML = `
      <div class="card p-5 mb-6">
        <div class="grid md:grid-cols-3 gap-4 items-end">
          <div>
            <label class="block text-sm font-medium mb-1">${esc(labelType)}</label>
            <select id="filterType" class="w-full border rounded-xl px-3 py-2">
              <option value="">${esc(labelAll)}</option>
              ${types.map((t) => `<option value="${esc(t)}">${esc(typeMap[t] || t)}</option>`).join("")}
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">${esc(labelLoc)}</label>
            <select id="filterLoc" class="w-full border rounded-xl px-3 py-2">
              <option value="">${esc(labelAll)}</option>
              ${locs.map((l) => `<option value="${esc(l)}">${esc(l)}</option>`).join("")}
            </select>
          </div>
          <div class="flex gap-3 md:justify-end flex-wrap">
            <button id="filterReset" class="btn btn-secondary" type="button">${esc(labelReset)}</button>
            <div class="text-sm text-gray-600 flex items-center"><span id="filterCount"></span></div>
          </div>
        </div>
      </div>

      <div id="projectsGrid" class="grid md:grid-cols-3 gap-6"></div>
    `;

    const selType = qs("#filterType");
    const selLoc = qs("#filterLoc");
    const btnReset = qs("#filterReset");
    const countEl = qs("#filterCount");
    const grid = qs("#projectsGrid");

    if (selType) selType.value = fType;
    if (selLoc) selLoc.value = fLoc;

    const applyFilters = () => {
      let list = projects.slice();
      if (fType) list = list.filter((p) => p.type === fType);
      if (fLoc) list = list.filter((p) => p.location === fLoc);
      return list;
    };

    const syncUrl = () => {
      const u = new URL(location.href);
      if (fType) u.searchParams.set("type", fType); else u.searchParams.delete("type");
      if (fLoc) u.searchParams.set("loc", fLoc); else u.searchParams.delete("loc");
      history.replaceState(null, "", u.toString());
    };

    const cover = (p) => {
      const imgs = Array.isArray(p.images) ? p.images : [];
      // Opcija A: cover = final (images[1]) ako postoji, else images[0]
      const path = imgs.length > 1 && imgs[1] ? imgs[1] : (imgs[0] || "images/ph2.svg");
      return asset(path);
    };

    const renderGrid = () => {
      const list = applyFilters();
      if (countEl) countEl.textContent = `${list.length} ${labelCount}`;
      if (!grid) return;

      grid.innerHTML = list.map((p, idx) => {
        const img = cover(p);
        const typeTxt = typeMap[p.type] || p.type || "";
        const t = localize(p.title);
        const d = localize(p.description);
        return `
          <button class="card overflow-hidden text-left project-card" data-filtered-index="${idx}" type="button">
            <div class="relative w-full h-52 bg-brand-light">
              <img src="${img}" alt="${esc(t)}" class="w-full h-52 object-cover" loading="lazy" decoding="async" />
            </div>
            <div class="p-4">
              <div class="text-sm text-gray-500">${esc(typeTxt)} · ${esc(p.location || "")}</div>
              <div class="font-medium">${esc(t)}</div>
              ${d ? `<p class="text-sm text-gray-600 mt-1">${esc(d)}</p>` : ``}
            </div>
          </button>
        `;
      }).join("");
    };

    if (selType) selType.addEventListener("change", () => { fType = selType.value || ""; syncUrl(); renderGrid(); });
    if (selLoc) selLoc.addEventListener("change", () => { fLoc = selLoc.value || ""; syncUrl(); renderGrid(); });

    if (btnReset) btnReset.addEventListener("click", () => {
      fType = ""; fLoc = "";
      if (selType) selType.value = "";
      if (selLoc) selLoc.value = "";
      syncUrl();
      renderGrid();
    });

    renderGrid();

    mount.addEventListener("click", (e) => {
      const card = e.target.closest(".project-card");
      if (!card) return;
      const list = applyFilters();
      const i = Number(card.getAttribute("data-filtered-index") || 0);
      if (!list[i]) return;
      openProjectModal(list, i);
    });
  }

  const modalState = { list: [], index: 0, imgIndex: 0 };

  function wireProjectsModal() {
    const modal = qs("#projectModal");
    if (!modal) return;

    const close = qs("#projectClose");
    const prev = qs("#projectPrev");
    const next = qs("#projectNext");
    const copy = qs("#projectCopyLink");

    const doClose = () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      const img = qs("#projectModalImg");
      if (img) img.src = "";
    };

    if (close) close.addEventListener("click", doClose);
    modal.addEventListener("click", (e) => { if (e.target === modal) doClose(); });

    document.addEventListener("keydown", (e) => {
      if (modal.classList.contains("hidden")) return;
      if (e.key === "Escape") doClose();
      if (e.key === "ArrowLeft") stepProject(-1);
      if (e.key === "ArrowRight") stepProject(+1);
    });

    if (prev) prev.addEventListener("click", () => stepProject(-1));
    if (next) next.addEventListener("click", () => stepProject(+1));

    if (copy) {
      copy.addEventListener("click", async () => {
        const proj = modalState.list[modalState.index];
        if (!proj) return;
        const u = new URL(location.href);
        u.hash = `#p=${encodeURIComponent(projectKey(proj))}`;
        try {
          await navigator.clipboard.writeText(u.toString());
          const old = copy.textContent;
          copy.textContent = state.lang === "sr" ? "Kopirano" : "Copied";
          setTimeout(() => (copy.textContent = old), 1200);
        } catch {}
      });
    }

    function stepProject(dir) {
      const list = modalState.list || [];
      if (!list.length) return;
      let nextIndex = modalState.index + dir;
      if (nextIndex < 0) nextIndex = list.length - 1;
      if (nextIndex >= list.length) nextIndex = 0;
      modalState.index = nextIndex;
      modalState.imgIndex = 0; // kreće od skice/3D
      renderProjectModal();
    }
  }

  function openProjectModal(list, index) {
    const modal = qs("#projectModal");
    if (!modal) return;
    modalState.list = Array.isArray(list) ? list : [];
    modalState.index = typeof index === "number" ? index : 0;
    modalState.imgIndex = 0;
    renderProjectModal();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }

  function renderProjectModal() {
    const imgEl = qs("#projectModalImg");
    const metaEl = qs("#projectModalMeta");
    const titleEl = qs("#projectModalTitle");
    const descEl = qs("#projectModalDesc");
    const thumbs = qs("#projectModalThumbs");
    const project = modalState.list[modalState.index];
    if (!project) return;

    const typeMap = UI[state.lang].types || {};
    const title = localize(project.title);
    const desc = localize(project.description);
    const type = typeMap[project.type] || project.type || "";
    const loc = project.location || "";

    if (metaEl) metaEl.textContent = `${type} · ${loc}`;
    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;

    const imgs = (project.images || []).slice(0, 3).map(asset);
    const main = imgs[modalState.imgIndex] || asset("images/ph2.svg");

    if (imgEl) { imgEl.src = main; imgEl.alt = title; }

    if (thumbs) {
      if (imgs.length <= 1) {
        thumbs.innerHTML = "";
        thumbs.style.display = "none";
      } else {
        thumbs.style.display = "";
        thumbs.innerHTML = imgs.map((src, i) => `
          <button type="button"
                  class="card overflow-hidden border ${i === modalState.imgIndex ? "ring-2 ring-brand-dark" : ""}"
                  data-thumb-index="${i}">
            <img src="${src}" alt="" class="w-full h-20 object-cover" loading="lazy" decoding="async" />
          </button>
        `).join("");

        thumbs.querySelectorAll("[data-thumb-index]").forEach((btn) => {
          btn.addEventListener("click", () => {
            modalState.imgIndex = Number(btn.getAttribute("data-thumb-index") || 0);
            renderProjectModal();
          });
        });
      }
    }
  }

  function projectKey(p) {
    const t = (p && p.title && (p.title.sr || p.title.en || "")) || "";
    return [p.type, p.location, t].join("|").toLowerCase().replace(/\s+/g, "-");
  }
})();
