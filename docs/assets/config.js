// Globalna konfiguracija za GitHub Pages varijantu (bez servera)
(function () {
  // GitHub korisnik i repozitorijum (tačno prema vašem linku)
  const GH_OWNER = "strahinjavasiljevic";
  const GH_REPO = "Stolarija-Vasiljevic";

  // Base path za Project Pages: https://username.github.io/REPO/
  const GH_BASE_PATH = `/${GH_REPO}/`;

  // Public URL (GitHub Pages link)
  const GH_PAGES_URL = `https://${GH_OWNER}.github.io/${GH_REPO}/`;

  // Custom domen (ako ga kasnije dodate). Ako je setovan, BASE_PATH postaje "/"
  const CUSTOM_DOMAIN_URL = ""; // npr. "https://vasiljevic-stolarija.com"

  // Aktivni URL i base path
  const SITE_URL = (CUSTOM_DOMAIN_URL && CUSTOM_DOMAIN_URL.trim())
    ? CUSTOM_DOMAIN_URL.replace(/\/+$/, "")
    : GH_PAGES_URL.replace(/\/+$/, "");
  const BASE_PATH = (CUSTOM_DOMAIN_URL && CUSTOM_DOMAIN_URL.trim()) ? "/" : GH_BASE_PATH;

  // Helper za spajanje putanja
  function withBase(path) {
    const p = String(path || "").replace(/^\/+/, "");
    return BASE_PATH.replace(/\/+$/, "/") + p;
  }

  window.APP_CONFIG = {
    // Kontakt
    CONTACT_PHONE: "+381 64 122 04 29",
    CONTACT_EMAIL: "strahinjavasiljevic00@gmail.com",

    // Cloudinary (unsigned preset) — ostavite prazno ako ne koristite upload
    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_UPLOAD_PRESET: "",

    // Formspree — ostavite prazno ako ne koristite
    FORMSPREE_ID: "",

    // Repo info (za eventualni admin commit)
    REPO_OWNER: GH_OWNER,
    REPO_NAME: GH_REPO,
    BRANCH: "main",

    // Public URL i base path
    SITE_URL: SITE_URL,
    BASE_PATH: BASE_PATH,

    // Jezici
    SUPPORTED_LANGS: ["sr", "en", "de", "ru"],
    DEFAULT_LANG: "sr",

    // Helper
    withBase: withBase
  };
})();
