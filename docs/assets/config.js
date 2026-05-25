// Globalna konfiguracija za GitHub Pages varijantu (bez servera)
(function () {
  // Repo Pages (project page)
  const GH_OWNER = "StrahinjaVasiljevic";
  const GH_REPO = "Stolarija-Vasiljevi-";

  // Base path je naziv repozitorijuma sa "/" na početku i na kraju
  // (za project pages: https://username.github.io/REPO/)
  const GH_BASE_PATH = `/${GH_REPO}/`;

  // Public URL (GitHub Pages link)
  const GH_PAGES_URL = `https://${GH_OWNER}.github.io/${GH_REPO}/`;

  // Ako kasnije pređeš na custom domen, ovde samo upiši npr. "https://vasiljevic-stolarija.com"
  // i BASE_PATH ostaje "/" (ili prazno), pa sve radi.
  const CUSTOM_DOMAIN_URL = ""; // npr. "https://vasiljevic-stolarija.com"

  // Aktivni URL i base path (ako je custom domen setovan, koristi njega)
  const SITE_URL = (CUSTOM_DOMAIN_URL && CUSTOM_DOMAIN_URL.trim()) ? CUSTOM_DOMAIN_URL.replace(/\/+$/, "") : GH_PAGES_URL.replace(/\/+$/, "");
  const BASE_PATH = (CUSTOM_DOMAIN_URL && CUSTOM_DOMAIN_URL.trim()) ? "/" : GH_BASE_PATH;

  // Helper za spajanje putanja (da izbegneš duple // i da radi i na Pages i na domenu)
  function withBase(path) {
    const p = String(path || "").replace(/^\/+/, "");
    return BASE_PATH.replace(/\/+$/, "/") + p;
  }

  window.APP_CONFIG = {
    // Kontakt (prikaz u UI i adresa koja prima upite)
    CONTACT_PHONE: "+381 64 122 04 29",
    CONTACT_EMAIL: "strahinjavasiljevic00@gmail.com",

    // Cloudinary (upload slika bez servera — Unsigned preset)
    // Ako ne koristiš upload uopšte, ostavi prazno.
    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_UPLOAD_PRESET: "",

    // Formspree (slanje forme bez sopstvenog backenda)
    // Ako ne koristiš Formspree, ostavi prazno.
    FORMSPREE_ID: "",

    // GitHub repo info (ako imaš funkciju “admin upload/commit”)
    REPO_OWNER: GH_OWNER,
    REPO_NAME: GH_REPO,
    BRANCH: "main",

    // Public URL i base path
    SITE_URL: "https://YOUR_GITHUB_USERNAME.github.io/stolarija-vasiljevic",

  SUPPORTED_LANGS: ["sr","en","de","ru"],
  DEFAULT_LANG: "sr"
    BASE_PATH: BASE_PATH,

    // Helper (opciono, ali korisno u site.js)
    withBase: withBase
  };
})();
