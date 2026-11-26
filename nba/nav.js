(function(){
  const h=document.querySelector('.site-header'),b=document.querySelector('.nav-toggle'),m=document.getElementById('nav-menu');
  if(b){b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.classList.toggle('open',!o);document.body.classList.toggle('menu-open',!o);});
    m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');m.classList.remove('open');document.body.classList.remove('menu-open');}));}
  const hh=()=>document.documentElement.style.setProperty('--hh',h.offsetHeight+'px');hh();window.addEventListener('resize',hh);
  const on=()=>h.classList.toggle('scrolled',window.scrollY>12);on();window.addEventListener('scroll',on,{passive:true});
  const links=[...document.querySelectorAll('.nav-links a[href^="#"]')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));
  const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
