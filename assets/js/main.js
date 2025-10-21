
// v5 main interactions
(function(){
  'use strict';
  // Mobile nav
  const hamb = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if(hamb && nav) hamb.addEventListener('click', ()=> nav.classList.toggle('open'));

  // Smooth scroll links
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(a){ const id = a.getAttribute('href').slice(1); const el = document.getElementById(id); if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); history.replaceState(null,'','#'+id); } }
  });

  // Intersection observer for reveal effects
  const io = new IntersectionObserver(entries=>{ entries.forEach(ent=>{ if(ent.isIntersecting){ ent.target.classList.add('visible'); io.unobserve(ent.target); } }); }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Work grid filter
  document.addEventListener('click', e=>{
    const b = e.target.closest('[data-filter]'); if(!b) return;
    const cat = b.dataset.filter;
    document.querySelectorAll('.work-grid .card').forEach(c=>{ const cats=(c.dataset.cat||'').split(' '); if(cat==='all' || cats.includes(cat)) c.style.display=''; else c.style.display='none'; });
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  });

  // Basic form validation
  document.querySelectorAll('form').forEach(f=> f.addEventListener('submit', function(e){ const email = f.querySelector('input[type="email"]'); if(email){ const v=email.value.trim(); if(!v||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){ e.preventDefault(); email.classList.add('invalid'); email.focus(); } } }));
})();
