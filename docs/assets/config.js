// Globalna konfiguracija za GitHub Pages varijantu (bez servera)
(function () {
  // GitHub Pages URL (repo project page)
  const GH_PAGES_URL = "https://strahinjavasiljevic.github.io/Stolarija-Vasiljevi-";
  const GH_BASE_PATH = "/Stolarija-Vasiljevi-/";

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

    // GitHub repo info (za admin commit preko PAT) — samo ako imaš funkciju “admin upload”
    REPO_OWNER: "StrahinjaVasiljevic",
    REPO_NAME: "Stolarija-Vasiljevi-",
    BRANCH: "main",

    // Public URL (Pages URL dok ne povežeš custom domen)
    SITE_URL: GH_PAGES_URL,

    // Base path (ključan za SPA routing i putanje do asset-a na GitHub Pages)
    BASE_PATH: GH_BASE_PATH
  };
})();
