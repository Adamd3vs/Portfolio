import { WORDS } from "./common/words.js";

/* ===== Sidebar (mobile) ===== */
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn?.addEventListener('click', () => {
  const open = document.body.classList.toggle('sidebar-open');
  toggleBtn.setAttribute('aria-expanded', String(open));
});

/* ===== Theme ===== */
const THEME_KEY = 'portfolio_theme';
const prefersDark = matchMedia?.('(prefers-color-scheme: dark)').matches;
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const moon = document.querySelector('.icon-moon');
  const sun  = document.querySelector('.icon-sun');
  if (moon && sun){ const light = theme==='light'; sun.hidden=!light; moon.hidden=light; }
}
setTheme(localStorage.getItem(THEME_KEY) || (prefersDark ? 'dark' : 'light'));
document.getElementById('themeToggle')?.addEventListener('click', ()=>{
  const cur = localStorage.getItem(THEME_KEY) || 'light';
  setTheme(cur==='light' ? 'dark' : 'light');
});

/* ===== I18N (EN/KR) ===== */
const LANG_KEY = 'portfolio_lang';
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = (localStorage.getItem(LANG_KEY) || (navigator.language||'en').slice(0,2)).toLowerCase();
if (!WORDS[currentLang]) currentLang = 'en';

function applyLang(lang){
  const t = WORDS[lang] || WORDS.en;

  const brand = document.querySelector('.brand');
  if (brand && t.brand) brand.textContent = t.brand;

  document.querySelectorAll('.menu a').forEach(a=>{
    const key = a.getAttribute('data-key');
    const val = key ? t.menu?.[key] : null;
    if (val) a.textContent = val;
  });

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const parts = el.getAttribute('data-i18n').split('.');
    let val = t; for (const p of parts) val = val?.[p];
    if (typeof val === 'string') el.innerHTML = val;
  });

  langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}
applyLang(currentLang);
localStorage.setItem(LANG_KEY, currentLang);
langBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const lang = btn.dataset.lang;
    localStorage.setItem(LANG_KEY, lang);
    currentLang = lang;
    applyLang(lang);
  });
});

/* ===== Footer year ===== */
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());

/* ===== Helpers ===== */
function normalize(u){
  return u.replace(/^\.\//,'').split('?')[0].split('#')[0].toLowerCase();
}
function setActiveByUrl(url){
  const current = normalize(url || (location.pathname.split('/').pop() || 'index.html'));
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = normalize(a.getAttribute('href') || '');
    const isIndex = (current==='' || current==='index.html');
    const match = (isIndex && (href==='' || href==='index.html')) || href===current;
    a.classList.toggle('active', !!match);
  });
}

/* ===== SPA Router (fetch .content) ===== */
async function loadPage(url, push=true){
  try{
    const r = await fetch(url, {credentials:'same-origin'});
    const html = await r.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const newContent = doc.querySelector('.content')?.innerHTML || '';
    const mount = document.querySelector('.content');
    if (mount){
      mount.style.opacity = '0';
      requestAnimationFrame(()=>{
        mount.innerHTML = newContent;
        // i18n newly inserted nodes
        applyLang(currentLang);
        // active link
        setActiveByUrl(url);
        // smooth fade-in
        requestAnimationFrame(()=>{ mount.style.opacity = '1'; });
      });
    }
    if (push) history.pushState({url}, '', url);
    window.scrollTo({top:0, behavior:'smooth'});
  }catch(e){
    console.error('loadPage error:', e);
    location.href = url; // fallback
  }
}

// Delegate clicks from sidebar menu (single listener, no duplicates)
document.querySelector('.menu')?.addEventListener('click', (e)=>{
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;
  e.preventDefault();
  loadPage(href, true);
});

// Handle back/forward
window.addEventListener('popstate', (e)=>{
  const url = e.state?.url || location.pathname.split('/').pop() || 'index.html';
  loadPage(url, false);
});

// Initial active
setActiveByUrl();

// app.js – SPA loadPage ichida DOM almashtirishdan oldin:
async function transitionSwap(swapFn){
  if (!document.startViewTransition) { swapFn(); return; }
  await document.startViewTransition(swapFn).finished;
}

// loadPage(...) joyida:
await transitionSwap(() => {
  mount.innerHTML = newContent;
  applyLang(currentLang);
  setActiveByUrl(url);
});

// app.js – bir marta ishga tushiring
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('reveal-in'); io.unobserve(e.target); }
  });
},{ threshold:.08 });

document.querySelectorAll('.section, .card').forEach(el=>{
  el.classList.add('reveal'); io.observe(el);
});

// app.js
function attachSpotlight(el){
  el.addEventListener('pointermove', e=>{
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left)+'px');
    el.style.setProperty('--my', (e.clientY - r.top)+'px');
  });
}
document.querySelectorAll('.card').forEach(attachSpotlight);

// loadPage() da fetch boshlanishida:
const mount = document.querySelector('.content');
const old = mount.innerHTML;
mount.innerHTML = `<section class="section"><div class="skeleton"></div></section>`;

// Projects: mobile details toggler
document.querySelectorAll('.details-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.target + '-details';
    const panel = document.getElementById(id);
    const open = panel.hasAttribute('hidden');
    btn.setAttribute('aria-expanded', String(open));
    panel.toggleAttribute('hidden');
  });
});

