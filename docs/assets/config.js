// Globalna konfiguracija za GitHub Pages varijantu (bez servera)
(function () {
  // GitHub korisnik i repozitorijum (prema tvom linku)
  const GH_OWNER = "strahinjavasiljevic";
  const GH_REPO = "Stolarija-Vasiljevic";

  // Base path za Project Pages: https://username.github.io/REPO/
  const GH_BASE_PATH = `/${GH_REPO}/`;
  const GH_PAGES_URL = `https://${GH_OWNER}.github.io/${GH_REPO}/`;

  // Custom domen (ostavi prazno ako ga nemaš)
  const CUSTOM_DOMAIN_URL = "";

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

    // Cloudinary (ostavi prazno ako ne koristiš upload)
    CLOUDINARY_CLOUD_NAME: "",
    CLOUDINARY_UPLOAD_PRESET: "",

    // Formspree (OVDE UNESI ID)
    FORMSPREE_ID: "mzdwgzyj",

    // Repo info (za admin commit ako koristiš)
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
