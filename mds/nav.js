(function(){
  const h=document.querySelector('.site-header');
  const hh=()=>document.documentElement.style.setProperty('--hh',h.offsetHeight+'px');hh();window.addEventListener('resize',hh);
  const on=()=>h.classList.toggle('scrolled',window.scrollY>12);on();window.addEventListener('scroll',on,{passive:true});
  const links=[...document.querySelectorAll('.nav-links a[href^="#"]')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));
  const y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
