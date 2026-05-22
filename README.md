# Stolarija Vasiljević - statični sajt na GitHub Pages

Ovaj repo je spreman za GitHub Pages (serving iz foldera /docs).

Koraci:
1) GitHub → Settings → Pages → Build and deployment:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
   - Save

2) U docs/assets/config.js popunite:
   - CONTACT_EMAIL (prima upite)
   - CLOUDINARY_CLOUD_NAME i CLOUDINARY_UPLOAD_PRESET (ako želite upload slika)
   - FORMSPREE_ID (za slanje forme bez servera)
   - REPO_OWNER/REPO_NAME/BRANCH (za admin commit)
   - SITE_URL (vaš public GitHub Pages URL)

3) (Opcionalno) Admin (docs/admin):
   - Napravite GitHub Fine-grained PAT (repo contents: read/write samo za ovaj repo)
   - Na /admin unesite PAT i uređujte sadržaj (site.json, projects.json)

Napomena:
- Forma koristi Formspree (free) za slanje emaila.
- Upload slika ide na Cloudinary (unsigned preset).
- Ako Cloudinary nije podešen, forma se šalje bez slika i prikazuje korisniku poruku (fallback).
