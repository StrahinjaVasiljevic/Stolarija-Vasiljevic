(function(){
  const cfg = window.APP_CONFIG || {};
  const OWNER = cfg.REPO_OWNER;
  const REPO = cfg.REPO_NAME;
  const BRANCH = cfg.BRANCH || "main";
  let token = "";

  document.addEventListener("DOMContentLoaded", init);

  function $(s){ return document.querySelector(s); }

  function loadToken() {
    token = localStorage.getItem("gh_pat") || "";
    if (token) {
      $("#pat").value = mask(token);
      $("#pat").dataset.real = token;
    }
  }
  function saveToken(t) {
    localStorage.setItem("gh_pat", t);
    token = t;
  }
  function mask(t){ return t ? t.slice(0,4) + "•••" + t.slice(-4) : ""; }

  async function init() {
    loadToken();
    $("#connectBtn").addEventListener("click", ()=>{
      const val = $("#pat").dataset.real || $("#pat").value.trim();
      if (!val) return alert("Unesite GitHub PAT.");
      saveToken(val);
      $("#authBox").classList.add("hidden");
      $("#appBox").classList.remove("hidden");
      loadAll();
    });
    $("#showPat").addEventListener("click", ()=>{
      const real = $("#pat").dataset.real || "";
      if (real) { $("#pat").value = real; $("#pat").dataset.real = ""; }
    });
    $("#saveSiteBtn").addEventListener("click", saveSite);
    $("#saveProjectsBtn").addEventListener("click", saveProjects);
  }

  async function loadAll() {
    const site = await fetch("../content/site.json", {cache:"no-store"}).then(r=>r.json());
    const projects = await fetch("../content/projects.json", {cache:"no-store"}).then(r=>r.json());
    $("#heroTitle").value = site.hero.title || "";
    $("#heroSubtitle").value = site.hero.subtitle || "";
    $("#ctaPrimary").value = site.hero.ctaPrimary || "";
    $("#ctaSecondary").value = site.hero.ctaSecondary || "";
    $("#benefits").value = JSON.stringify(site.hero.benefits || [], null, 2);
    $("#whyUs").value = JSON.stringify(site.whyUs || [], null, 2);
    $("#testimonials").value = JSON.stringify(site.testimonials || [], null, 2);
    $("#faq").value = JSON.stringify(site.faq || [], null, 2);
    $("#projects").value = JSON.stringify(projects.projects || [], null, 2);
  }

  async function saveSite() {
    const payload = {
      hero: {
        title: $("#heroTitle").value,
        subtitle: $("#heroSubtitle").value,
        ctaPrimary: $("#ctaPrimary").value,
        ctaSecondary: $("#ctaSecondary").value,
        benefits: safeParse($("#benefits").value, [])
      },
      whyUs: safeParse($("#whyUs").value, []),
      testimonials: safeParse($("#testimonials").value, []),
      faq: safeParse($("#faq").value, [])
    };
    await putFile("docs/content/site.json", JSON.stringify(payload, null, 2), "chore(cms): update site.json");
    notify("Sačuvano (site.json). Pages će uskoro prikazati izmene.");
  }

  async function saveProjects() {
    const payload = { projects: safeParse($("#projects").value, []) };
    await putFile("docs/content/projects.json", JSON.stringify(payload, null, 2), "chore(cms): update projects.json");
    notify("Sačuvano (projects.json). Pages će uskoro prikazati izmene.");
  }

  function safeParse(str, fb){ try { return JSON.parse(str); } catch { return fb; } }

  function notify(msg){
    const el = $("#notice");
    el.textContent = msg;
    el.classList.remove("hidden");
    setTimeout(()=>el.classList.add("hidden"), 3000);
  }

  async function getFileSha(path) {
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(BRANCH)}`;
    const r = await fetch(url, { headers: { Authorization: `token ${token}`, Accept: "application/vnd.github+json" }});
    if (r.status === 200) { const j = await r.json(); return j.sha; }
    if (r.status === 404) return null;
    const t = await r.text(); throw new Error("GitHub get sha error: " + t);
  }

  async function putFile(path, content, message) {
    const sha = await getFileSha(path);
    const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(path)}`;
    const body = {
      message,
      content: btoa(unescape(encodeURIComponent(content))),
      branch: BRANCH,
      ...(sha ? { sha } : {})
    };
    const r = await fetch(url, {
      method: "PUT",
      headers: { Authorization: `token ${token}`, Accept: "application/vnd.github+json" },
      body: JSON.stringify(body)
    });
    if (r.status !== 200 && r.status !== 201) {
      const t = await r.text(); throw new Error("GitHub commit error: " + t);
    }
    return r.json();
  }
})();

