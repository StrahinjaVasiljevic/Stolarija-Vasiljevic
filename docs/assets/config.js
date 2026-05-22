// Globalna konfiguracija za GitHub Pages varijantu (bez servera)
window.APP_CONFIG = {
  // Kontakt (prikaz u UI i adresa koja prima upite)
  CONTACT_PHONE: "+381 64 122 04 29",
  CONTACT_EMAIL: "{{TARGET_EMAIL}}",

  // Cloudinary (upload slika bez servera — Unsigned preset)
  CLOUDINARY_CLOUD_NAME: "{{CLOUDINARY_CLOUD_NAME}}",
  CLOUDINARY_UPLOAD_PRESET: "unsigned_preset_name",

  // Formspree (slanje forme bez sopstvenog backenda)
  FORMSPREE_ID: "your_formspree_id",

  // GitHub repo info (za admin commit preko PAT)
  REPO_OWNER: "YOUR_GITHUB_USERNAME",
  REPO_NAME: "stolarija-vasiljevic",
  BRANCH: "main",

  // Public URL (custom domen na GitHub Pages)
  SITE_URL: "https://stolarija-vasiljevic.rs"
};
