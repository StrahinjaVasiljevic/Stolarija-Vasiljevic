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
      calculator: {
  nav: "Kalkulator",
  title: "Okvirna cena",
  subtitle: "Informativni raspon cene na osnovu osnovnih dimenzija i tipa elementa.",
  product: "Proizvod",
  wardrobe: "Plakar",
  kitchen: "Kuhinja",
  type: "Tip plakara",
  typeAmerican: "Američki",
  typeSliding: "Klizna vrata",
  typeClassic: "Klasična vrata",
  material: "Materijal",
  mdf: "Medijapan",
  univer: "Univer",
  height: "Visina (cm)",
  width: "Širina (cm)",
  kitchenLength: "Dužina kuhinje (m)",
  range: "Okvirna cena",
  min: "Minimalno",
  max: "Maksimalno",
  note: "Ovo je informativni raspon. Finalna cena zavisi od detalja, okova, unutrašnje organizacije, završne obrade, dubine elementa i montaže.",
  calcHintWardrobe: "Formula: visina × širina × cena po m²",
  calcHintKitchen: "Formula: dužni metar × cena po metru",
  send: "Pošalji upit sa ovim parametrima",
  reset: "Resetuj",
  summaryWardrobe: "Plakar",
  summaryKitchen: "Kuhinja"
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
    renderConfigurator();
    renderServices();
    renderPortfolioPreview();
    renderProcess();
    renderWhyUs();
    renderTestimonials();
    renderFAQ();
    renderContact();
    renderFooter();

    // /projekti/ page
    renderProjectsPage();
    wireProjectsModal();

    injectSEO();
    wireNav();
    wireLightbox();
    initMotion();
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
    .replace(/&/g, "&amp;")
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
  const flagEl = qs("#langFlag");
  const labelEl = qs("#langLabel");

  const flags = { sr: "🇷🇸", en: "🇬🇧", de: "🇩🇪", ru: "🇷🇺" };
  const labels = { sr: "Jezik", en: "Language", de: "Sprache", ru: "Язык" };
  const abbr = { sr: "srb", en: "eng", de: "deu", ru: "рус" };

  function applyLabel() {
    if (flagEl) flagEl.textContent = flags[state.lang] || "🇷🇸";
    if (labelEl) labelEl.textContent = `${labels[state.lang] || "Jezik"}: ${abbr[state.lang] || "srb"}`;
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
   ["Services", "Process", "Projects", "About", "FAQ", "Contact"].forEach((k) => {
  const el = qs("#nav" + k);
  if (el) el.textContent = nav[k.toLowerCase()];
  const fl = qs("#foot" + k);
  if (fl) fl.textContent = nav[k.toLowerCase()];
});

const calcNav = qs("#navCalculator");
if (calcNav) {
  const calcText = (UI[state.lang] && UI[state.lang].calculator && UI[state.lang].calculator.nav) || "Kalkulator";
  calcNav.textContent = calcText;
}

    const themeBtn = qs("#themeToggle");
    if (themeBtn) {
      themeBtn.setAttribute("aria-label", UI[state.lang].theme.toggle);
      themeBtn.setAttribute("title", UI[state.lang].theme.toggle);
      themeBtn.type = "button";
    }
    const langBtn = qs("#langToggle");
    if (langBtn) langBtn.type = "button";

    const heads = UI[state.lang].heads;
    const ids = {
  labelServices: "services",
  labelProcess: "process",
  labelAbout: "about",
  labelContact: "contact"
};
    const calcHead = qs("#labelCalculator");
if (calcHead) {
  calcHead.textContent = (UI[state.lang] && UI[state.lang].calculator && UI[state.lang].calculator.title) || "Okvirna cena";
}
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

  const projectsUrl = base("projekti/");

  el.innerHTML = `
    <div class="section-shell hero-shell hero-shell--single">
      <div class="hero-copy hero-copy--wide">
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-5">
          ${esc(c.title || "")}
        </h1>

        <p class="hero-subtitle text-lg md:text-xl mb-8">
          ${esc(c.subtitle || "")}
        </p>

        <div class="flex flex-wrap gap-3">
          <a href="#kontakt" class="btn btn-primary">
            ${esc(c.ctaPrimary || UI[state.lang].contact.submit)}
          </a>
          <a href="${projectsUrl}" class="btn btn-secondary">
            ${esc(c.ctaSecondary || UI[state.lang].common.viewAll)}
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderConfigurator() {
  const mount = qs("#configuratorMount");
  if (!mount) return;

  const L = (UI[state.lang] && UI[state.lang].calculator) || {
    nav: "Kalkulator",
    title: "Okvirna cena",
    subtitle: "Informativni raspon cene na osnovu osnovnih dimenzija i tipa elementa.",
    product: "Proizvod",
    wardrobe: "Plakar",
    kitchen: "Kuhinja",
    type: "Tip plakara",
    typeAmerican: "Američki",
    typeSliding: "Klizna vrata",
    typeClassic: "Klasična vrata",
    material: "Materijal",
    mdf: "Medijapan",
    univer: "Univer",
    height: "Visina (cm)",
    width: "Širina (cm)",
    kitchenLength: "Dužina kuhinje (m)",
    range: "Okvirna cena",
    min: "Minimalno",
    max: "Maksimalno",
    note: "Ovo je informativni raspon. Finalna cena zavisi od detalja, okova, unutrašnje organizacije, završne obrade, dubine elementa i montaže.",
    calcHintWardrobe: "Formula: visina × širina × cena po m²",
    calcHintKitchen: "Formula: dužni metar × cena po metru",
    send: "Pošalji upit sa ovim parametrima",
    reset: "Resetuj",
    summaryWardrobe: "Plakar",
    summaryKitchen: "Kuhinja"
  };

  mount.innerHTML = `
    <div class="configurator-app">
      <div class="configurator-app__bar">
        <div class="configurator-app__dots" aria-hidden="true">
          <span class="configurator-app__dot configurator-app__dot--1"></span>
          <span class="configurator-app__dot configurator-app__dot--2"></span>
          <span class="configurator-app__dot configurator-app__dot--3"></span>
        </div>
        <div class="configurator-app__title">Estimator / Mini App</div>
      </div>

      <div class="configurator-grid">
        <div class="configurator-card">
          <div class="configurator-app-badge">
            <span class="configurator-app-badge__dot"></span>
            <span>${esc(L.title)}</span>
          </div>

          <div class="configurator-form">
            <div>
              <div class="configurator-input-label">${esc(L.product)}</div>
              <div class="configurator-switch" role="tablist" aria-label="${esc(L.product)}">
                <button type="button" class="active" data-product="wardrobe">${esc(L.wardrobe)}</button>
                <button type="button" data-product="kitchen">${esc(L.kitchen)}</button>
              </div>
            </div>

            <div class="configurator-fields" id="configuratorFields"></div>

            <div class="configurator-actions">
              <button type="button" class="btn btn-primary" id="configuratorSend">${esc(L.send)}</button>
              <button type="button" class="btn btn-secondary" id="configuratorReset">${esc(L.reset)}</button>
            </div>
          </div>
        </div>

        <div class="configurator-card configurator-result">
          <div class="result-range">
            <div class="result-range-label">${esc(L.range)}</div>
            <div class="result-range-value" id="configuratorRange">—</div>
          </div>

          <div class="result-meta">
            <div class="result-pill" id="configuratorSummaryType">${esc(L.summaryWardrobe)}</div>
            <div class="configurator-inline-note" id="configuratorFormula">${esc(L.calcHintWardrobe)}</div>
            <div class="configurator-note">${esc(L.note)}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const fieldsMount = qs("#configuratorFields");
  const rangeEl = qs("#configuratorRange");
  const typeSummaryEl = qs("#configuratorSummaryType");
  const formulaEl = qs("#configuratorFormula");
  const sendBtn = qs("#configuratorSend");
  const resetBtn = qs("#configuratorReset");
  const productButtons = Array.from(mount.querySelectorAll("[data-product]"));

  const configState = {
    product: "wardrobe",
    wardrobeType: "sliding",
    material: "mdf",
    heightCm: "",
    widthCm: "",
    kitchenLengthM: ""
  };

  const fieldTemplates = {
    wardrobe: `
      <div>
        <label class="configurator-input-label" for="cfgWardrobeType">${esc(L.type)}</label>
        <select id="cfgWardrobeType" class="w-full border rounded-xl px-3 py-2">
          <option value="american">${esc(L.typeAmerican)}</option>
          <option value="sliding" selected>${esc(L.typeSliding)}</option>
          <option value="classic">${esc(L.typeClassic)}</option>
        </select>
      </div>

      <div>
        <label class="configurator-input-label" for="cfgMaterial">${esc(L.material)}</label>
        <select id="cfgMaterial" class="w-full border rounded-xl px-3 py-2">
          <option value="mdf">${esc(L.mdf)}</option>
          <option value="univer">${esc(L.univer)}</option>
        </select>
      </div>

      <div>
        <label class="configurator-input-label" for="cfgHeight">${esc(L.height)}</label>
        <input id="cfgHeight" type="number" min="50" step="1" class="w-full border rounded-xl px-3 py-2" placeholder="npr 240">
      </div>

      <div>
        <label class="configurator-input-label" for="cfgWidth">${esc(L.width)}</label>
        <input id="cfgWidth" type="number" min="40" step="1" class="w-full border rounded-xl px-3 py-2" placeholder="npr 180">
      </div>
    `,
    kitchen: `
      <div>
        <label class="configurator-input-label" for="cfgKitchenMaterial">${esc(L.material)}</label>
        <select id="cfgKitchenMaterial" class="w-full border rounded-xl px-3 py-2">
          <option value="mdf">${esc(L.mdf)}</option>
          <option value="univer">${esc(L.univer)}</option>
        </select>
      </div>

      <div>
        <label class="configurator-input-label" for="cfgKitchenLength">${esc(L.kitchenLength)}</label>
        <input id="cfgKitchenLength" type="number" min="0.5" step="0.1" class="w-full border rounded-xl px-3 py-2" placeholder="npr 3.2">
      </div>
    `
  };

  function renderFields() {
    if (!fieldsMount) return;
    fieldsMount.innerHTML = fieldTemplates[configState.product] || "";

    if (configState.product === "wardrobe") {
      const typeEl = qs("#cfgWardrobeType");
      const materialEl = qs("#cfgMaterial");
      const hEl = qs("#cfgHeight");
      const wEl = qs("#cfgWidth");

      if (typeEl) typeEl.value = configState.wardrobeType;
      if (materialEl) materialEl.value = configState.material;
      if (hEl) hEl.value = configState.heightCm;
      if (wEl) wEl.value = configState.widthCm;

      if (typeEl) {
        typeEl.addEventListener("change", () => {
          configState.wardrobeType = typeEl.value || "sliding";
          updateResult();
        });
      }

      if (materialEl) {
        materialEl.addEventListener("change", () => {
          configState.material = materialEl.value || "mdf";
          updateResult();
        });
      }

      if (hEl) {
        hEl.addEventListener("input", () => {
          configState.heightCm = hEl.value;
          updateResult();
        });
      }

      if (wEl) {
        wEl.addEventListener("input", () => {
          configState.widthCm = wEl.value;
          updateResult();
        });
      }
    }

    if (configState.product === "kitchen") {
      const materialEl = qs("#cfgKitchenMaterial");
      const lenEl = qs("#cfgKitchenLength");

      if (materialEl) materialEl.value = configState.material;
      if (lenEl) lenEl.value = configState.kitchenLengthM;

      if (materialEl) {
        materialEl.addEventListener("change", () => {
          configState.material = materialEl.value || "mdf";
          updateResult();
        });
      }

      if (lenEl) {
        lenEl.addEventListener("input", () => {
          configState.kitchenLengthM = lenEl.value;
          updateResult();
        });
      }
    }

    updateResult();
  }

  function getWardrobeTypeLabel(v) {
    if (v === "american") return L.typeAmerican;
    if (v === "classic") return L.typeClassic;
    return L.typeSliding;
  }

  function getMaterialLabel(v) {
    return v === "univer" ? L.univer : L.mdf;
  }

  function updateResult() {
    if (!rangeEl || !typeSummaryEl || !formulaEl) return;

    if (configState.product === "wardrobe") {
      const h = Number(configState.heightCm || 0);
      const w = Number(configState.widthCm || 0);

      const isValid = h > 0 && w > 0;
      if (!isValid) {
        rangeEl.textContent = "—";
        typeSummaryEl.textContent = `${L.summaryWardrobe} · ${getWardrobeTypeLabel(configState.wardrobeType)} · ${getMaterialLabel(configState.material)}`;
        formulaEl.textContent = L.calcHintWardrobe;
        return;
      }

      const area = (h / 100) * (w / 100);
      const min = area * 195;
      const max = area * 270;

      rangeEl.textContent = `${formatEur(min)} – ${formatEur(max)}`;
      typeSummaryEl.textContent = `${L.summaryWardrobe} · ${getWardrobeTypeLabel(configState.wardrobeType)} · ${getMaterialLabel(configState.material)}`;
      formulaEl.textContent = `${L.calcHintWardrobe} · ${area.toFixed(2)} m²`;
      return;
    }

    const len = Number(configState.kitchenLengthM || 0);
    const isValid = len > 0;

    if (!isValid) {
      rangeEl.textContent = "—";
      typeSummaryEl.textContent = `${L.summaryKitchen} · ${getMaterialLabel(configState.material)}`;
      formulaEl.textContent = L.calcHintKitchen;
      return;
    }

    const min = len * 195;
    const max = len * 280;

    rangeEl.textContent = `${formatEur(min)} – ${formatEur(max)}`;
    typeSummaryEl.textContent = `${L.summaryKitchen} · ${getMaterialLabel(configState.material)}`;
    formulaEl.textContent = `${L.calcHintKitchen} · ${len.toFixed(2)} m`;
  }

  function fillContactFormFromConfigurator() {
    const desc = qs('textarea[name="description"]');
    const type = qs('select[name="projectType"]');
    const measures = qs('select[name="haveMeasures"]');

    let text = "";

    if (configState.product === "wardrobe") {
      text =
        `Plakar — tip: ${getWardrobeTypeLabel(configState.wardrobeType)}, materijal: ${getMaterialLabel(configState.material)}, ` +
        `visina: ${configState.heightCm || "—"} cm, širina: ${configState.widthCm || "—"} cm. ` +
        `Želim okvirnu i finalnu ponudu za ovu konfiguraciju.`;

      if (type) type.value = "Plakari i garderoberi";
      if (measures) measures.value = "Da";
    } else {
      text =
        `Kuhinja — materijal: ${getMaterialLabel(configState.material)}, dužina: ${configState.kitchenLengthM || "—"} m. ` +
        `Želim okvirnu i finalnu ponudu za ovu konfiguraciju.`;

      if (type) type.value = "Kuhinje";
      if (measures) measures.value = "Da";
    }

    if (desc) {
      desc.value = text;
      desc.dispatchEvent(new Event("input", { bubbles: true }));
    }

    const contact = qs("#kontakt");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  productButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-product");
      if (!next || next === configState.product) return;

      configState.product = next;
      productButtons.forEach((x) => x.classList.toggle("active", x === btn));
      renderFields();
    });
  });

  if (sendBtn) {
    sendBtn.addEventListener("click", fillContactFormFromConfigurator);
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      configState.product = "wardrobe";
      configState.wardrobeType = "sliding";
      configState.material = "mdf";
      configState.heightCm = "";
      configState.widthCm = "";
      configState.kitchenLengthM = "";
      productButtons.forEach((x) =>
        x.classList.toggle("active", x.getAttribute("data-product") === "wardrobe")
      );
      renderFields();
    });
  }

  renderFields();
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
  const rawSteps =
    (state.site && state.site.process && state.site.process.length)
      ? state.site.process
      : (UI[state.lang].process || []);

  const mount = qs("#processMount");
  const headEl = qs("#labelProcess");

  if (headEl) headEl.textContent = UI[state.lang].heads.process;
  if (!mount) return;

  const fallbackDescriptions = {
    sr: [
      "Pregled zahteva, prostora i definišemo pravac rešenja.",
      "Predlažemo raspored, materijale i osnovni izgled.",
      "Dobijate okvirnu cenu i pregled ključnih stavki.",
      "Usaglašavamo detalje, materijale, rok i završnu varijantu.",
      "Nakon potvrde kreće priprema, nabavka i plan realizacije.",
      "Sledi proizvodnja, transport i uredna montaža na lokaciji.",
      "Prolazimo završne detalje i vršimo konačnu primopredaju."
    ],
    en: [
      "We review the requirements, the space and define the direction of the solution.",
      "We propose the layout, materials and the initial visual direction.",
      "You receive an estimated price range and an overview of key items.",
      "We align the details, materials, timeline and final version.",
      "After confirmation, preparation, sourcing and execution planning begin.",
      "Production, delivery and clean on-site installation follow.",
      "We review the final details and complete the handover."
    ],
    de: [
      "Wir prüfen Anforderungen und Raum und definieren die Lösungsrichtung.",
      "Wir schlagen Aufteilung, Materialien und die Grundgestaltung vor.",
      "Sie erhalten einen Kostenrahmen und die wichtigsten Positionen im Überblick.",
      "Wir stimmen Details, Materialien, Zeitplan und Endvariante ab.",
      "Nach der Bestätigung beginnen Vorbereitung, Beschaffung und Umsetzungsplanung.",
      "Danach folgen Fertigung, Lieferung und saubere Montage vor Ort.",
      "Zum Schluss prüfen wir alle Details und übergeben das Projekt."
    ],
    ru: [
      "Изучаем требования и пространство, определяем направление решения.",
      "Предлагаем планировку, материалы и базовый визуальный концепт.",
      "Вы получаете ориентировочную стоимость и обзор ключевых позиций.",
      "Согласовываем детали, материалы, сроки и финальный вариант.",
      "После подтверждения начинаются подготовка, закупка и план реализации.",
      "Далее идут производство, доставка и аккуратный монтаж на месте.",
      "Проверяем финальные детали и передаём готовый проект."
    ]
  };

  const steps = rawSteps.map((step, idx) => ({
    t: step.t || "",
    d: step.d || ((fallbackDescriptions[state.lang] && fallbackDescriptions[state.lang][idx]) || "")
  }));

  const hintText =
    state.lang === "sr"
      ? "Prevucite levo/desno kroz korake"
      : state.lang === "en"
        ? "On mobile, swipe left/right"
        : state.lang === "de"
          ? "Auf dem Handy horizontal durch die Schritte wischen. Für mehr Details auf die Karte klicken."
          : "На телефоне пролистайте шаги по горизонтали. Нажмите на карточку для подробностей.";

  const stepLabel =
    state.lang === "sr"
      ? "Korak"
      : state.lang === "en"
        ? "Step"
        : state.lang === "de"
          ? "Schritt"
          : "Шаг";

  mount.innerHTML = `
    <div class="process-roadmap-wrap">
      <div class="process-roadmap" role="list">
        ${steps.map((s, i) => {
          const num = String(i + 1).padStart(2, "0");
          return `
            <div class="process-step" role="listitem">
              <button
                class="process-step__card"
                type="button"
                aria-expanded="false"
                aria-controls="process-panel-${i + 1}"
                id="process-btn-${i + 1}"
                data-process-toggle
              >
                <div class="process-step__box">
                  <div class="process-step__line">
                    <div class="process-step__titlewrap">
                      <span class="process-step__index">${num}</span>
                      <span class="process-step__divider">—</span>
                      <span class="process-step__title">${esc(s.t || `${stepLabel} ${i + 1}`)}</span>
                    </div>
                    <span class="process-step__chev" aria-hidden="true">+</span>
                  </div>
                </div>
              </button>

              <div
                class="process-step__panel"
                id="process-panel-${i + 1}"
                role="region"
                aria-labelledby="process-btn-${i + 1}"
              >
                <div class="process-step__panel-inner">
                  ${esc(s.d)}
                </div>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>

    <div class="process-roadmap-hint">${esc(hintText)}</div>
  `;

  const buttons = Array.from(mount.querySelectorAll("[data-process-toggle]"));
  let openPanel = null;
  let openBtn = null;

  buttons.forEach((btn) => {
    const panelId = btn.getAttribute("aria-controls");
    const panel = panelId ? qs("#" + panelId) : null;
    if (!panel) return;

    btn.addEventListener("click", () => toggle(btn, panel));
  });

  function toggle(btn, panel) {
    const isOpen = btn.getAttribute("aria-expanded") === "true";

    if (openPanel && openPanel !== panel) {
      collapse(openBtn, openPanel);
    }

    if (isOpen) {
      collapse(btn, panel);
      openPanel = null;
      openBtn = null;
    } else {
      expand(btn, panel);
      openPanel = panel;
      openBtn = btn;
    }
  }

  function expand(btn, panel) {
    btn.setAttribute("aria-expanded", "true");
    panel.classList.add("open");
    panel.style.maxHeight = "0px";

    const h = panel.scrollHeight;
    panel.style.maxHeight = h + "px";

    const onEnd = (e) => {
      if (e.propertyName === "max-height") {
        panel.style.maxHeight = "none";
        panel.removeEventListener("transitionend", onEnd);
      }
    };

    panel.addEventListener("transitionend", onEnd);
  }

  function collapse(btn, panel) {
    if (btn) btn.setAttribute("aria-expanded", "false");

    const h = panel.scrollHeight;
    panel.style.maxHeight = h + "px";

    requestAnimationFrame(() => {
      panel.classList.remove("open");
      panel.style.maxHeight = "0px";
    });
  }
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

  const list = (state.projects || []).slice(0, 6);
  const typeMap = UI[state.lang].types || {};
  const projectsUrl = base("projekti/");

  const cover = (p) => {
    const imgs = Array.isArray(p.images) ? p.images : [];
    const path = (imgs.length > 1 && imgs[1]) ? imgs[1] : (imgs[0] || "images/ph2.svg");
    return asset(path);
  };

  const cardHref = (p) => {
    const url = new URL(projectsUrl, window.location.origin + window.location.pathname);
    const key = projectKey(p);
    return `${projectsUrl}#p=${encodeURIComponent(key)}`;
  };

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
          const href = cardHref(p);

          return `
            <a class="card overflow-hidden text-left block hover:shadow-lg transition-shadow" href="${href}">
              <div class="relative w-full h-40 bg-brand-light">
                <img src="${img}" alt="${esc(t)}" class="w-full h-40 object-cover" loading="lazy" decoding="async" />
              </div>
              <div class="p-4">
                <div class="text-sm text-gray-500">${esc(typeTxt)} · ${esc(p.location || "")}</div>
                <div class="font-medium">${esc(t)}</div>
                ${d ? `<p class="text-sm text-gray-600 mt-1">${esc(d)}</p>` : ``}
              </div>
            </a>
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

  function formatEur(n) {
  try {
    return new Intl.NumberFormat(state.lang === "sr" ? "sr-RS" : "en-GB", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(Number(n || 0));
  } catch {
    return `${Math.round(Number(n || 0))} €`;
  }
}
  function renderFooter() {
    const nav = UI[state.lang].nav;
    setText("#footContactTitle", nav.contact);
    setText("#footPhoneLabel", UI[state.lang].contact.phone);
    setText("#footEmailLabel", UI[state.lang].contact.email);
    setText("#footArea", UI[state.lang].contact.area);
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
